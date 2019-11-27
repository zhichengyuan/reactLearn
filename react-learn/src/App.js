import React from 'react'
import ThreeLayout from './components/common/ThreeLayout'

export default function App() {
    return (
        <div>
            <ThreeLayout
                gap={50}
                left={<div style={{
                    border:'1px solid black'
                }}>
                    左边栏
                </div>}
                right={<div style={{
                    border:'1px solid black'
                }}>
                    右边栏
                </div>}
            >
                <div style={{
                    border:"1px solid #ccc"
                }}>
                     <h1>主区域</h1>
                     <p>dfsadfsdfsdfds</p>
                </div>
            </ThreeLayout>
        </div>
    )
}