//合并reducers
import students from './student'
import counter from './counter'
import { combineReducers } from 'redux'

export default combineReducers({
    students,
    counter
})