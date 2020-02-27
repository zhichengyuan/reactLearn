import React from 'react'
import Counter from './Counter'

export default function App() {

    return (
        <div>
            <h1>9-7之前的必须卸载dva依赖包才能运行起来,也可以将配置文件中的dva去除，然后下载依赖包</h1>
            <Counter/>
        </div>
    )
}