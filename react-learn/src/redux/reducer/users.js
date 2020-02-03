import * as usersAction from '../action/userAction'
import uuid from 'uuid'

const initialState = [
    {id:uuid(),name:'用户1',age:11},
    {id:uuid(),name:'用户2',age:12},
    {id:uuid(),name:'用户3',age:14},
    {id:uuid(),name:'用户4',age:15},
]

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case usersAction.ADDUSER:
        return [...state,payload];
    case usersAction.DELETEUSER:
        return state.filter(it => it.id !== payload);
    case usersAction.UPDATEUSER:
        return state.map(it => it.id === payload.id ? payload : it);
    default:
        return state
    }
}
