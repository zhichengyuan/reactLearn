import React from 'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import RouteGuard from './RouteGuard'

function Page1() {
  return <h1>page1</h1>
}
function Page2() {
  return <h1>page2</h1>
}
let count = 0;
export default function App() {
    return(
     <Router
      getUserConfirmation={(msg,callback) => {
        console.log('页面想要跳转？没门,消息：' + msg)
        callback(true);
      }}
     >
       <ul>
         <li>
           <Link replace to="/page1">页面1</Link>
         </li>
         <li>
           <Link to="/page2">页面2</Link>
         </li>
       </ul>
       <RouteGuard onChange={(precLocation,location,action,unListen) => {
         count ++;
         console.log(`日志${count}：从${precLocation.pathname}进入页面${location.pathname},进入方式${action}`)
         if(count === 5) {
           unListen();
         }
       }}>
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2}/>
       </RouteGuard>
     </Router>
    )
}

