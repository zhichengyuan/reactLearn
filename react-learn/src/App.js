import React,{useState,useEffect} from 'react'
import useTimer from './myHooks/useTimer'
function Test() {
    useTimer(() => {
        console.log('Test组件的一些副作用操作')
    },1000)
    return <h1>Test组件</h1>
}

export default function App() {
    const [visible,setVisible] = useState(true)
    return (
        <div>
           {
              visible &&  <Test/>
           }
           <button onClick={() => {
               setVisible(!visible);
           }}>显示/隐藏</button>
        </div>
    )
}
