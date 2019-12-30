import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import qs from 'query-string'

function A(props) {
    console.log(props.location)
    console.log(qs.parse(props.location.search));
    console.log(qs.parse(props.location.hash));
    return <div>
        
        <p>组件A</p>
    </div>
}



function NotFound() {
    return <h1>找不到页面</h1>
}

export default function App() {
    return(
      <Router>
          <Switch>
              <Route path="/a" exact component={A}/>
              <Route component={NotFound}/>
          </Switch>
      </Router>
    )
}
