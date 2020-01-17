import { createStore,bindActionCreators } from 'redux'
import reducer from './reducer'
import * as numberActions from './action//number-action'


const store = createStore(reducer,10);//创建store仓库

console.log(store.getState());
store.dispatch(numberActions.getIncreaseAction());
console.log(store.getState());
