import {actionTypes} from '../../action/student/searchResult'
//默认状态
const initialState = {
    datas:[],
    total:0,
    isLoading:false,
}
/**
 * 控制查询结果的reducer
 * @param {} state 
 * @param {*} action 
 */
export default function (state = initialState,{type,payload}) {
    switch (type) {
        case actionTypes.setStudentsAndTotal:
            return {
                ...state,
                ...payload
            }
        case actionTypes.setIsLoading:
            return {
                ...state,
                isLoading:payload
            }
        default:
            return state;
    }
}