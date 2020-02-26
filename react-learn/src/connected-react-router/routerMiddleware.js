import { CALL_HISTORY_METHOD } from './actionType'

export default history => store => next => action => {
    if(action.type === CALL_HISTORY_METHOD) {
        //调用history对应的方法
        const { method,args } = action.payload;
        history[method](...args);
    }
    else{
        next(action);
    }
}