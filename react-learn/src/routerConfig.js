import React from 'react'
import Counter from './Counter'
import {routerRedux, BrowserRouter,NavLink,Route,Switch } from 'dva/router'
//routerRedux相当于connected-router-redux
function Home() {
    return <h1>首页</h1>
}

export default function({history}) {
    return (
        <routerRedux.ConnectedRouter history={history}>
            <div>
            <h1>9-7之前的必须卸载dva依赖包才能运行起来,也可以将配置文件中的dva去除，然后下载依赖包</h1>
                <ul>
                    <li>
                        <NavLink to="/">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">计数器</NavLink>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path="/counter" component={Counter}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </div>
        </routerRedux.ConnectedRouter>
        
    )
}