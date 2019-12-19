import React, { useState,useEffect } from 'react'

function Test(props) {
    console.log('渲染组件')
    useEffect(() => {
        console.log('副作用函数，仅挂载时运行一次');
        
        return () => {
            console.log('清理函数，仅卸载时运行一次')
        }
    },[]);//使用空数组作为依赖项，则副作用函数仅在挂载的时候运行

    const [,forceUpdate] = useState({})

    return <div >test组件 <button onClick={() => {
        forceUpdate({});
    }}>刷新组件</button></div>
}

export default function App() {
    const [visible,setVisible] = useState(true);
    return (
        <div>
            {
                visible && <Test />
            }
            
            <button onClick={() => {
                setVisible(!visible);
            }}>显示隐藏</button>
        </div>
    )
}