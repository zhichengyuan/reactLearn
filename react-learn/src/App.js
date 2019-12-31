import React from 'react'
import { BrowserRouter as Router, Route,Switch,withRouter } from 'react-router-dom'
import qs from 'query-string'

const AWrapper = withRouter(A);

// function withRouter(Comp) {
//     return function routerWrapper(props) {
//         //获取上下文中的信息
//         return <Comp {...props} history={上下文中的history}/>
//     }
// }

function News(props) {
    console.log(props.match)
    return <div>
        {/* <A {...props}></A> */}
        <AWrapper></AWrapper>
        <p>显示{props.match.params.year}年{props.match.params.month}月{props.match.params.day}日的新闻</p>
    </div>
}

function A(props) {
    return <button onClick={() => {
        props.history.push('/');
    }}>点击返回</button>
}

function Index() {
    return <h1>首页</h1>
}


function NotFound() {
    return <h1>找不到页面</h1>
}

export default function App() {
    return(
      <Router>
          <Switch>
              <Route path={["/news","/news/:year/:month/:day","/n"]} exact component={News}/>
              <Route path='/' component={Index}/>
              <Route component={NotFound}/>
          </Switch>
      </Router>
    )
}

