import { takeEvery,put,call,select,cps} from 'redux-saga/effects'
import { fetchStudents, setIsLoading,setStudentsAndTotal } from '../action/student/searchResult'
import { searchStudents } from '../../services/student'



function* fetchStudentsSaga() {
    //设置为正在加载中
    yield put(setIsLoading(true));
    //使用call指令,按照当前仓库中的条件
    const condition = yield select(state => state.students.searchCondition);
    try{
        console.log(condition);
        const resp = yield call(searchStudents,condition);
        // const resp = yield apply(null,searchStudents,[]);
        console.log(resp);
        yield put(setStudentsAndTotal(resp.datas,resp.cont));
    }
    catch(err) {
        console.log(err.message);
    }
    yield put(setIsLoading(false));
  
}

export default function* () {
    yield takeEvery(fetchStudents.toString(),fetchStudentsSaga);
    console.log('正在监听fetchStudents');
}