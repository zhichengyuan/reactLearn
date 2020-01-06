import React from 'react'
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import qs from 'query-string'

export default function App() {
    return(
      <Router>
        <nav>
          <Link>首页</Link>
          <Link>新闻页</Link>
        </nav>
        <div>
          {/* 匹配网站的顶级页面 */}
        </div>
      </Router>
    )
}

