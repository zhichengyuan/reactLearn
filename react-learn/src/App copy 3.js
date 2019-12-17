import React, { useState } from 'react'


export default function App() {
    console.log('app,render');
    const [data,setData] = useState({
        x:1,
        y:2
    })

    return <div>
        <p >
            x:{data.x},y:{data.y}
            <button onClick={() => {
                setData({
                    ...data,
                    x:data.x + 1
                })
            }}>+</button>
        </p>
        
    </div>
}