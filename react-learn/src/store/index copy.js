import { createStore,bindActionCreators} from 'redux'
import reducer from './reducer'
import { createAddUserAction,createDeleteUserAction } from './action/userAction'


const store = createStore(reducer);//创建store仓库

const actionCreators = {
    addUsers:createAddUserAction,
    deleteUser:createDeleteUserAction
}

const actions = bindActionCreators(actionCreators,store.dispatch);

store.subscribe(() => {
    console.log('监听器',store.getState());
})

actions.addUsers({id:3,name:'sss',age:19});
actions.deleteUser(3);











