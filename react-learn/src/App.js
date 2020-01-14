import React from 'react'
import { BrowserRouter, Route,Switch } from "./react-router-dom"

function Page1() {
    return <h1>Page1</h1>
}

function Page2() {
    return <h1>Page2</h1>
}

function Change({ history }) {
    return <div>
        <button onClick={() => {
            history.push("/page1")
        }}>去page1</button>
        <button onClick={() => {
            history.push("/page1/abc")
        }}>去page2</button>
    </div>
}

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/page1" component={Page1}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page1/abc" component={Page2} />
            </Switch>
        </BrowserRouter>
    )
}
