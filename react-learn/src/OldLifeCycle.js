import React, { Component } from 'react'

export default class OldLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            n:0
        };
        console.log('一个新组件诞生了！！！');
    }

    componentWillMount() {
        console.log("componentWillMount",'组件即将被挂载');
    }

    componentDidMount(){
        console.log('componentDidMount','挂载完成');
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps','接收到新的属性',this.props,nextProps);
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log('shouldComponentUpdate','是否应该重新渲染',this.props,nextProps,this.state,nextState);
        if(this.props.n === nextProps.n && this.state.n === nextState.n){
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate','组件即将被重新渲染');
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate','组件以完成重新渲染',prevProps,prevState);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount','组件被销毁');
    }

    render() {
        console.log('渲染了');
        return (
            <div>
                <h1>旧的生命周期 React {'<'} 16.0.0 </h1>
                <h2>1.constructor</h2>
                <p>1.同一个组件对象只会创建一次</p>
                <p>2.不能在第一次挂载到页面之前，调用setState，为了避免问题，构造函数中严禁使用setState</p>
                <h2>2.componentWillMount</h2>
                <p>1.正常情况下，和构造函数一样，它只会运行一次</p>
                <p>2.可以使用setState，但是为了避免bug，不允许使用，因为在某些特殊情况下，该函数可能被调用多次</p>
                <h2>3.*render</h2>
                <p>1.返回一个虚拟dom，会被挂载到虚拟dom树中，最终渲染到页面的真实dom中</p>
                <p>2.render可能不止运行一次，只要需要重新渲染，就会重新运行</p>
                <p>3.严禁使用setState，因为可能会导致无限递归渲染</p>
                <h2>4.*componentDidMount</h2>
                <p>1.只运行一次</p>
                <p>2.可以使用setState</p>
                <p>3.通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中</p>
                <h2>5.组件进入活跃状态</h2>
                <h2>6.componentWillReceiveProps</h2>
                <p>1.即将接受新的属性值</p>
                <p>2.参数为新的属性值</p>
                <p>3.该函数可能会导致一些bug，所以不推荐使用</p>
                <h2>7.*shuldComponentUpdate</h2>
                <p>1.指示React是否重新渲染该组件，通过返回true和false来指定</p>
                <p>2.默认情况下，会直接返回true</p>
                <h2>8.componentWillUpdate</h2>
                <p>1.组件即将被重新渲染</p>
                <h2>9.componentDidUpdate</h2>
                <p>1.往往在该函数中使用dom操作,改变元素 </p>
                <h2>10.*componentWillUnmount</h2>
                <p>1.通常在该函数中销毁一些组件依赖的资源，比如计时器 </p>
                <h2>属性n：{this.props.n}</h2>
                <h2>属性n：{this.state.n}</h2>
                <button onClick={() => {
                    this.setState({
                        n:this.state.n + 1
                    })
                }}>状态n+1</button>

                <h1>新的生命周期 React {'>'} 16.0.0 </h1>
                <h2>React官方认为，某个数据得来来源必须是单一的</h2>
                <h2>1.getDerivedStateFromProps</h2>
                <p>1.通过参数可以获取新的属性和状态</p>
                <p>2.该函数是静态的</p>
                <p>3.该函数的返回值会覆盖掉组件状态</p>
                <p>3.该函数几乎没什么用</p>
                <h2>2.getSnapshotBeforeUpdate</h2>
                <p>1.真事的dom构建完成，但还未实际渲染到页面中</p>
                <p>2.在该函数中，通常用于实现一些附加的dom操作</p>
                <p>3.该函数的返回值，会作为componentDidUpdate的第三个参数</p>
            </div>
        )
    }
}
