import React from 'react'
import { BrowserRouter as Router, Route,NavLink} from 'react-router-dom'
// import Link from './Link'
import './App.css'

function PageA() {
    return <h1>A页</h1>
}

function PageB() {
    return <h1>B页</h1>
}

function NavBar() {
    return <div>
        <NavLink activeClassName="selected"
            exact
            strict
            activeStyle={{
                background:'#ccc'
            }}
        to="/a"  style={{marginRight:20}}>去a页</NavLink>
        <NavLink activeClassName="selected"
            activeStyle={{
                background:'#ccc'
            }}
        replace to={{
            pathname:"/b",
            hash:"#fsd",
            search:'?a=dadf&b=dsfsa'
        }} style={{marginRight:20}}>去b页</NavLink>
    </div>
}

export default function App() {
    return(
      <div>
          <Router>
              <NavBar/>
              <Route path="/a" component={PageA} />
              <Route path="/b" component={PageB} />
          </Router>
      </div>
    )
}

