import React,{PureComponent} from 'react'
import { bindActionCreators } from 'redux'
import ctx from './ctx'
/**
 * 返回一个高阶组件
 * @param {*} mapStateToProps 
 * @param {*} mapDispatchToProps 
 */
export default function (mapStateToProps,mapDispatchToProps) {
    return function (Comp) {
        //对于Temp组件，只有它需要的数据发生变化时才会重新渲染
        class Temp extends React.PureComponent{
            static contextType = ctx;

            /**
             * 得到需要传递的事件处理函数
             */
            getEventHandlers() {
                if(typeof mapDispatchToProps === 'function') {
                    return mapDispatchToProps(this.store.dispatch,this.props);
                }
                else if (typeof mapDispatchToProps === 'object') {
                    return bindActionCreators(mapDispatchToProps,this.store.dispatch);
                }
            }

            constructor(props,context) {
                super(props,context);
                this.store = this.context;
                if (mapStateToProps) {
                    //状态中的数据，来自于仓库中的映射结果
                    this.state = mapStateToProps(this.store.getState(),this.props);
                    //监听仓库中的数据变化，得到一个取消监听的函数
                    this.unlisten = this.store.subscribe(() => {
                        this.setState(mapStateToProps(this.store.getState(),this.props));
                    })
                }
                if(mapDispatchToProps) {
                    this.handlers = this.getEventHandlers();
                }

            }

            componentWillUnmount() {
                if(this.unlisten) {
                    //当组件卸载时，取消监听
                    this.unlisten();
                }
            }

            render() {
                console.log(`${Temp.displayName}重新渲染了`);
                return <Comp {...this.state} {...this.handlers} {...this.props}/>;
            }
        }
        Temp.displayName = Comp.displayName || Comp.name;//类组件的名称和传入的组件一致
        return Temp;
    }
}