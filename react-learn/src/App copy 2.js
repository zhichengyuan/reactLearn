import React, { useState } from 'react'


export default function App() {

    const [n,setN] = useState(0);//使用一个状态，该状态的默认值是0
    const [visible,setVisible] = useState(true);

    return <div>
        <p style={{display:visible? 'block' : 'none'}}>
            <button onClick={() => {
                console.log(21212)
                setN(n - 1)
            }}>-</button>
            <span>{n}</span>
            <button onClick={() => {
                setN(n + 1)
            }}>+</button>
        </p>
        <button onClick={() => {
            setVisible(!visible);
        }}>显示/隐藏</button>
    </div>
}