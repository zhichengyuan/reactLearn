import React, { useState,useEffect } from 'react'


export default function App() {

    console.log('app,render');

    const [n,setN] = useState(0);//使用一个状态，该状态的默认值是0
    //一下代码属于副作用
    // document.title = `计数器：${n}`

    useEffect(() => {
        console.log('改变页面标题的副作用操作')
        document.title = `计数器：${n}`
    })
    useEffect(() => {
        console.log('其他的副作用操作')
    })
    return <div>
        <span>{n}</span>
        <button onClick={() => {
            setN(n +1);
        }}>+</button>
    </div>
}