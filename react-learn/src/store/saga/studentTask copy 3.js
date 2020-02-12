import { takeEvery,put,call,apply,select} from 'redux-saga/effects'
import { actionTypes, setIsLoading,setStudentsAndTotal } from '../action/student/searchResult'
import { searchStudents } from '../../services/student'

function* fetchStudents() {
    //设置为正在加载中
    yield put(setIsLoading(true));
    //使用call指令,按照当前仓库中的条件
    const condition = yield select(state => state.students.searchCondition);
    console.log(condition);
    const resp = yield call(searchStudents,condition);
    // const resp = yield apply(null,searchStudents,[]);
    console.log(resp);
    yield put(setStudentsAndTotal(resp.datas,resp.cont));
    yield put(setIsLoading(false));
  
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents,fetchStudents);
    console.log('正在监听fetchStudents');
}