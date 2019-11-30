var appkey = 'demo13_1545210570249';
// var appkey = 'yuanzhicheng_1563606632795';
var baseurl = 'http://open.duyiedu.com';

/**
 * 获取所有学生
 */

 export async function getAllStudents() {
    return await fetch(baseurl + '/api/student/findAll?appkey=' + appkey)
        .then(resp => resp.json()).then(resp => resp.data)
 }