import React,{useRef} from 'react'
import { connect } from './dva'

function Counter(props) {
    const inp = useRef();
    return (
        <div>
            <h2>{props.number}</h2>
            <button onClick={props.onAsyncDecrease}> 异步减 </button>
            <button onClick={props.onDecrease}> - </button>
            <button onClick={props.onIncrease}> + </button>
            <button onClick={props.onAsyncIecrease}> 异步加 </button>
            <p>
                <input type="number" ref={inp}/>
                <button onClick={() => {
                    const n = parseInt(inp.current.value);
                    props.onAdd(n)
                }}>加上</button>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    number:state.counter
})

const mapbDispatchToProps = dispatch => ({
    onIncrease:() => {
        dispatch({
            type:'counter/increase'
        })
    },
    onDecrease:() => {
        dispatch({
            type:'counter/decrease'
        })
    },
    onAdd:(n) => {
        dispatch({
            type:'counter/add',
            payload:n
        })
    },
    onAsyncDecrease(){
        dispatch({
            type:"counter/asyncDncrease"
        })
    },
    onAsyncIecrease(){
        dispatch({
            type:"counter/asyncIncrease"
        })
    }
})

export default connect(mapStateToProps,mapbDispatchToProps)(Counter);