import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
// /a
function A() {
    return <h1>组件A</h1>
}
// /b
function B() {
    return <h1>组件B</h1>
}

// /任意路径
function C() {
    return <h1>
        找不到页面
        <Route path="/abc" exact component={D}/>
        </h1>
}
// /abc
function D() {
    return <p>组件D</p>
}

export default function App() {
    return(
        <Router>
            <Switch>
                
                <Route path="/a/b" component={B}/>
                <Route path="/a" exact component={A}>
                    {() => {
                        return <div>
                            <h1 style={{color:'red'}}>必定渲染</h1>
                        </div>
                    }}
                </Route>
                <Route component={C}/>
            </Switch>
        </Router>
        
    )
}
