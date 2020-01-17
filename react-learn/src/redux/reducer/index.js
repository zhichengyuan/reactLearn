import * as actionTypes from '../action/action-type'
/**
 * reducer本质就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要做什么的对象
 */
export default function reducer(state,action) {
    console.log('reducer运行了',state,action);
    //返回一个新的状态
    if(action.type === actionTypes.INCREASE) {
        return state + 1;
    }
    else if (action.type === actionTypes.DECREASE) {
        return state -1
    }
    else if (action.type === actionTypes.SET) {
        return action.payload;
    }
    return state;//如果是一个无效的操作类型，数据不变
}