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
let task;

function* stopTask() {
    if(task) {
        yield cancel(task);
    }
}

function* autoIncearse() {
    while(true) {
        yield take(actionTypes.autoIncrease);
        yield* stopTask();
        task = yield fork(function* () {
            while(true) {
                yield delay(2000);
                yield put(increase());
            }
        })
    }
}

function* stopAutoIncrease() {
    yield* stopTask();
}

export default function* () {
        yield fork(autoIncearse());
        yield takeEvery(actionTypes.stopAutoIncrease,stopAutoIncrease)
        console.log('正在监听autoIncearse');
}