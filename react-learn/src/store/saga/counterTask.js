import { fork,take,delay,put,race,call} from 'redux-saga/effects'
import { actionTypes,increase } from '../action/counter'
 
/**
 * 自动增加和停止的流程控制
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
    while (true) {
        yield take(actionTypes.autoIncrease);//只监听autoIncrease
        yield race({
            actionTypes:call(function* () {
                while(true) {
                    yield delay(2000);
                    yield put(increase());
                }
            }),
            cancel:take(actionTypes.stopAutoIncrease)
        })
        
       
    }
}

export default function* () {
        yield fork(autoTask);
        console.log('正在监听autoIncearse');
}