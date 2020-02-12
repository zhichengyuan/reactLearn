import { takeEvery,delay,put,take,fork,cancel} from 'redux-saga/effects'
import { actionTypes,increase } from '../action/counter'
 
// function takeEvery(actionTypes,saga) {
//     return fork(function* () {
//         while(true) {
//             const action = yield take(actionType);
//             fork(saga);
//         }
//     })
// }

function* autoIncearse() {
    let task;
    while (true) {
       yield take(actionTypes.autoIncrease);
       if(task) {
           yield cancel(task);
       }
       task = yield fork(function* () {
           while(true) {
               yield delay(2000);
               yield put(increase());
           }
       })
   }
}

export default function* () {
        yield fork(autoIncearse);
        console.log('正在监听autoIncearse');
}