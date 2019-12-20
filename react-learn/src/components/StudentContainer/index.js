import React,{ useState,useEffect } from 'react'
import StudentList from '../StudentList'
import { getStudents } from '../../services/student'
// getStudents().then(data => console.log(data));

/**
 * 用于提供数据，以及控制数据的变化
 */
export default function StudentContainer() {
    const [students,setStudents] = useState([]);
    const [page,setPage] = useState(1);

    useEffect(() => {
        (async function () {
            const resp = await getStudents(page,10);
            console.log(resp);
            setStudents(resp.findByPage);
        })();
    },[page])//page发生变化时，需要重新获取数据

    return (
        <div>
            <StudentList stus={students}/>
            <input type="number" value={page} onChange={e => {
                setPage(parseInt(e.target.value))
            }}/>
        </div>
    )
}
