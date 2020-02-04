import { createStore,bindActionCreators, applyMiddleware} from 'redux'
import reducer from './reducer'
import { createAddUserAction,createDeleteUserAction } from './action/userAction'

const logger1 = store => next => action => {
    console.log('中间件1');
    console.log('旧数据',store.getState());
    console.log('action',action);
    next(action);
    console.log('新数据',store.getState());
    console.log(" ")
}
const logger2 = store => next => action => {
    console.log('中间件2');
    console.log('旧数据',store.getState());
    console.log('action',action);
    next(action);
    console.log('新数据',store.getState());
    console.log(" ")
}

/**
 * 一个中间件函数
 * @param {*} store 
 */
//  function logger1(store) {
//     return function (next) {
//         //下面返回的函数，是最终要应用的dispatch
//         return function (action) {
//             console.log('中间件1');
//             console.log('旧数据',store.getState());
//             console.log('action',action);
//             next(action);
//             console.log('新数据',store.getState());
//             console.log(" ")
//         }
//     }
//  }

//  function logger2(store) {
//     return function (next) {
//         //下面返回的函数，是最终要应用的dispatch
//         return function (action) {
//             console.log('中间件2');
//             console.log('旧数据',store.getState());
//             console.log('action',action);
//             next(action);
//             console.log('新数据',store.getState());
//             console.log(" ")
//         }
//     }
//  }

//应用中间件，方式1：
//const store = createStore(reducer,applyMiddleware(logger1,logger2));//创建store仓库

//方式2：
const store = applyMiddleware(logger1,logger2)(createStore)(reducer);
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











