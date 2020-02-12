import { takeEvery,put } from 'redux-saga/effects'
import { actionTypes, setIsLoading,setStudentsAndTotal } from '../action/student/searchResult'
import { searchStudents } from '../../services/student'




function* fetchStudents() {
    //设置为正在加载中
    yield put(setIsLoading(true));
    //当saga发现得到的结果是一个promise对象，它会自动等待Promise完成
    //完成之后，会把完成的结果作为值传递到下一个next
    
    const resp = yield searchStudents();
    console.log(resp);
    yield put(setStudentsAndTotal(resp.datas,resp.cont));
    yield put(setIsLoading(false));
  
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents,fetchStudents);
    console.log('正在监听fetchStudents');
}