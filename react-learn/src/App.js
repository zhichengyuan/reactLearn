import React from 'react'
import { Route,Link} from 'react-router-dom'
import RouteGuard from './RouteGuard'

function Page1() {
  return <h1>page1</h1>
}
function Page2() {
  return <h1>page2</h1>
}

export default function App() {
    return(
      <RouteGuard
        onBeforeChange={(prev,cur,action,commit,unBlock) => {
          console.log(`页面想要从${prev.pathname}跳转到${cur.pathname},跳转方式是${action},允许跳转`);
          commit(true);
          unBlock();//取消阻塞 ，只阻塞一次
        }}
        onChange={(precLocation,location,action,unListen) => {
          console.log(`日志：从${precLocation.pathname}进入页面${location.pathname},进入方式${action}`)
          unListen();//取消监听 ，只监听一次
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
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2}/>
      </RouteGuard>
    )
}

