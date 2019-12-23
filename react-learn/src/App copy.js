import React,{useState,useEffect} from 'react'
import useAllStudents from './myHooks/useAllStudents'
import usePageStudent from './myHooks/usePageStudent'

function Test() {
    // const stus = useAllStudents();
    // const list = stus.map(it => <li key={it.id}>{it.name}</li>)
    // return <ul>{list}</ul>

    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(10);
    const resp = usePageStudent(page,limit);
    console.log(resp);
    if(resp) {
        const list = resp.findByPage.map(it => <li key={it.id}>{it.name}</li>)
        return (
            <div>
                <h1>数据总数{resp.cont}</h1>
                <ul>{list}</ul>
                <input type="number"
                    value={page}
                    onChange={e => {
                        setPage(parseInt(e.target.value));
                    }}
                />
            </div>
        )
    }else{
        return null
    }
}

export default function App() {
    return (
        <div>
           <Test/>
        </div>
    )
}
