import { createStore,bindActionCreators} from '../redux'
import reducer from './reducer'
import { createAddUserAction,createDeleteUserAction } from './action/userAction'


const store = createStore(reducer);//创建store仓库

let oldDispatch = store.dispatch;//保留原本的dispatch函数
store.dispatch = function(action) {//更改store中的dispatch
    console.log('中间件1');
    console.log('旧数据',store.getState());
    console.log('action',action);
    oldDispatch(action);
    console.log('新数据',store.getState());

}

// oldDispatch = store.dispatch;//保留原本的dispatch函数
// store.dispatch = function(action) {//更改store中的dispatch
//     console.log('中间件2');
//     console.log('旧数据',store.getState());
//     console.log('action',action);
//     oldDispatch(action);
//     console.log('新数据',store.getState());

// }

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











