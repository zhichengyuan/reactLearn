import React from 'react'
import { BrowserRouter as Router, Route,Switch,withRouter } from 'react-router-dom'
import qs from 'query-string'

import Login from './pages/Login'
import Admin from './pages/Admin'

export default function App() {
    return(
      <Router>
          <Switch>
              <Route path="/login" exact component={Login}/>
              <Route path="/" component={Admin}/>
          </Switch>
      </Router>
    )
}

