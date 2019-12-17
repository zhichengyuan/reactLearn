import React, { useState } from 'react'


export default function App() {

    // const arr = useState(0);//使用一个状态，该状态的默认值是0
    // const n = arr[0];//得到状态的值
    // const setN = arr[1];//得到一个函数，该函数用于改变状态

    const [n,setN] = useState(0);//使用一个状态，该状态的默认值是0

    return <div>
        <button onClick={() => {
            console.log(21212)
            setN(n - 1)
        }}>-</button>
        <span>{n}</span>
        <button onClick={() => {
            setN(n + 1)
        }}>+</button>
    </div>
}