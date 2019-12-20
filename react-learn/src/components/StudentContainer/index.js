import React,{ useState,useEffect } from 'react'
import StudentList from '../StudentList'
import Pager from '../common/Pager/Pager.js'
import { getStudents } from '../../services/student'
// getStudents().then(data => console.log(data));

/**
 * 用于提供数据，以及控制数据的变化
 */
export default function StudentContainer() {
    const [students,setStudents] = useState([]);
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(10);
    const [total,setTotal] = useState(0);
    const [panelNumber,setPanelNumber] = useState(5);
   
    //当页吗和页容量发生变化时，将重新获取数据
    useEffect(() => {
        console.log('sdf');
        (async function () {
            const resp = await getStudents(page,limit);
            console.log(resp);
            setStudents(resp.findByPage);
            setTotal(resp.cont)
        })();
    },[page,limit])//page发生变化时，需要重新获取数据

    return (
        <div>
            <StudentList stus={students}/>
            <Pager 
                current={page} 
                limit={limit} 
                total={total} 
                panelNumber={panelNumber}
                onPageChange={newPage => {
                    setPage(newPage);
                }}    
            />
            <p>
                每页显示的条数：
                <input type="number" value={limit} onChange={e => {
                    setLimit(parseInt(e.target.value));
                }} />
            </p>
            <p>
                最多显示的页码数：
                <input type="number" value={panelNumber} onChange={e => {
                    setPanelNumber(parseInt(e.target.value));
                }} />
            </p>
        </div>
    )
}
