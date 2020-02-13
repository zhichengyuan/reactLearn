import { takeEvery,put,call,select,cps} from 'redux-saga/effects'
import { fetchStudents, setIsLoading,setStudentsAndTotal } from '../action/student/searchResult'


/**
 * 回调模式的异步
 */
function mockStudents(condition,callback) {
    console.log('参数',condition);
    setTimeout(() => {
        if(Math.random() > 0.5 ) {
            //nodejs风格
            callback(null,{
                cont:78,
                datas:[
                    {id:1,name:'wew'},
                    {id:2,name:'sss'},
                ]
            })
        }else{
            callback(new Error('出错了！！！'),null)
        }
    },3000)
}

function* fetchStudentsSaga() {
    //设置为正在加载中
    yield put(setIsLoading(true));
    //使用call指令,按照当前仓库中的条件
    const condition = yield select(state => state.students.searchCondition);
    try{
        console.log(condition);
        const resp = yield cps(mockStudents,condition);
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