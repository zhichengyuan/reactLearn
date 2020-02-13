import { fork,takeEvery,delay,put,race,call} from 'redux-saga/effects'
import { asyncDecrease,asyncIncrease,increase,decrease } from '../action/counter'
 
function* asyncIncreaseSaga() {
    yield delay(2000);
    yield put(increase())
}
function* asyncDecreaseSaga() {
    yield delay(2000);
    yield put(decrease())
}

export default function* () {
        yield takeEvery(asyncIncrease.toString(),asyncIncreaseSaga);
        yield takeEvery(asyncDecrease.toString(),asyncDecreaseSaga);
        console.log('正在监听autoIncearse');
}