import { createActions } from 'redux-actions'
export const actionTypes = {
    increase:"INCREASE",
    decrease:"DECREASE",
    asyncIncrease:"ASYNC_INCREASE",//异步增加
    asyncDecrease:"ASYNC_DECREASE",
    autoIncrease:"AUTO_INCREASE",//自动增加
    stopAutoIncrease:"STOP_AUTO_INCREASE",//停止自动增加
    add:"ADD"
}

export const {increase,decrease,asyncIncrease,asyncDecrease,autoIncrease,stopAutoIncrease,add} = createActions({
    INCREASE:null,
    DECREASE:null,
    ASYNC_INCREASE:null,
    ASYNC_DECREASE:null,
    STOP_AUTO_INCREASE:null,
    ADD:number => number
})




