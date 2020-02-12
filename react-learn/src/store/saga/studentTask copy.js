import { takeEvery,put } from 'redux-saga/effects'
import { actionTypes, setIsLoading } from '../action/student/searchResult'
import { searchStudents } from '../../services/student'


function mockStudents() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                resolve('学生数据');
            }
            else{
                reject('错误！！！');
            }
        },2000)
    })
}

function* fetchStudents() {
    //设置为正在加载中
    yield put(setIsLoading(true));
    //当saga发现得到的结果是一个promise对象，它会自动等待Promise完成
    //完成之后，会把完成的结果作为值传递到下一个next
    try{
        const resp = yield mockStudents();
        console.log(resp);
    } catch(err) {
        //err表示reject的返回内容
        console.log(err);
    }
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents,fetchStudents);
    console.log('正在监听fetchStudents');
}