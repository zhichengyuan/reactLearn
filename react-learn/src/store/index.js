import { createStore,bindActionCreators, applyMiddleware} from '../redux'
import reducer from './reducer'
import { createAddUserAction,createDeleteUserAction } from './action/userAction'
import logger from 'redux-logger'


//应用中间件，方式1：
const store = createStore(reducer,applyMiddleware(logger));//创建store仓库

//方式2：
// const store = applyMiddleware(logger1,logger2)(createStore)(reducer);

const actionCreators = {
    addUsers:createAddUserAction,
    deleteUser:createDeleteUserAction
}


const actions = bindActionCreators(actionCreators,store.dispatch);



actions.addUsers({id:3,name:'sss',age:19});
actions.deleteUser(3);











