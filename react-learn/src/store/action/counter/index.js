import { createActions,handleActions,combineActions } from 'redux-actions'

const actions = createActions({
    INCREASE:() => 1,
    DECREASE:() => -1,
    ASYNC_INCREASE:null,
    ASYNC_DECREASE:null,
    STOP_AUTO_INCREASE:null,
    ADD:number => number
})
export const {increase,decrease,asyncIncrease,asyncDecrease,autoIncrease,stopAutoIncrease,add} = actions;

export default handleActions({
    [combineActions(increase,decrease,add)]:(state,{payload}) => state + payload
    },0)
