import { takeEvery,delay,put,take,fork,cancel} from 'redux-saga/effects'
import { actionTypes,increase,decrease } from '../action/counter'

function* asyncIncrease() {
    let task;
    while(true) {
        yield take(actionTypes.asyncIncrease);
        //监听到了action，并且在开启新的任务之前，取消之前的任务
        if(task) {
            //之前有任务
            yield cancel(task);
            console.log('之前的任务被取消掉了');
        }
        task = yield fork(function* () {
            yield delay(2000);
            yield put(increase());
        })
    }
}

function* asyncDecrease() {
    yield delay(2000);
    console.log('触发了asyncDecrease');
    yield put(increase());
}

export default function* () {
    
        yield fork(asyncIncrease);
        yield takeEvery(actionTypes.asyncDecrease,asyncDecrease);
        console.log('监听到了asyncIncrease、asyncDecrease');
}