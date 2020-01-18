import * as actionTypes from '../action/action-type'
/**
 * reducer本质就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要做什么的对象
 */
export default function reducer(state = 10,action) {
    console.log('reducer运行了',state,action);
    switch (action.type) {
        case actionTypes.INCREASE:
            return state + 1;
        case actionTypes.DECREASE:
            return state - 1;
        case actionTypes.SET:
            return action.payload;
        default:
            return state;
    }
 
}