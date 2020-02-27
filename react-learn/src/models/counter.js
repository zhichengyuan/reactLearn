export default {
    namespace:'counter',
    state:0,
    reducers:{
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
        add(state,{ payload}) {
            return state + payload
        }
    },
    effects:{
        *asyncIncrease(action,{call,put}) {
            yield call(delay,1000);
            // throw new Error('测试错误')
            yield put({type:'increase'})
            
            console.log('异步加');
        },
        *asyncDncrease(action,{call,put}) {
            yield call(delay,1000);
            yield put({type:'decrease'})
            console.log('异步减');
        }
    },
    subscriptions:{
        resizeIncrease({dispatch}) {
            //订阅窗口尺寸变化，每次变化让数字增家
            window.onresize = () => {
                dispatch({type:'increase'})
            }
        },
        resizeDecrease({dispatch,history}){
            history.listen(() => {
                dispatch({type:'decrease'})
            })
        }
    }
}

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        },duration);
    })
}