import React from 'react'
import {connect} from 'react-redux'
import { asyncDecrease,asyncIncrease,increase,decrease } from '../store/action/counter'

function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onAsyncDecrease}>异步减</button>
                <button onClick={props.onDecrease}>减</button>
                <button onClick={props.onIncrease}>加</button>
                <button onClick={props.onAsyncIncrease}>异步加</button>
            </p>
        </div>
    )
}

/**
 * 将整个仓库的状态，映射到当前需要的数据
 * @param {*} state 
 */
function mapStateToProps(state,ownProps) {
    console.log(ownProps);
    return {
        number:state.counter
    }
}

//映射事件处理
function mapDispatchToProps(dispatch) {
    return {
        onAsyncDecrease(){
            dispatch(asyncDecrease())
        },
        onDecrease(){
            dispatch(decrease())
        },
        onIncrease(){
            dispatch(increase())
        },
        onAsyncIncrease(){
            dispatch(asyncIncrease())
        }
    }
}

// //connect 返回一个高阶组件
// const hoc = connect(mapStateToProps,mapDispatchToProps)

// //传入展示组件，返回一个容器
// export default hoc(Counter);

export default connect(mapStateToProps,mapDispatchToProps)(Counter)