
import routerConfig from "./routerConfig"
// import './store/test'
import dva from './dva'
import counterModel from './models/counter'
import studentsModel from './models/students'
import { createBrowserHistory } from 'history'
import createLoading from './dva/dva-loading'

// 得到一个dva对象
const app = dva({
    history:createBrowserHistory()
});

app.use(createLoading());

//在启动之前定义模型
app.model(counterModel)
app.model(studentsModel)

//设置跟路由，即启动后要运行的函数，函数的返回结果会被渲染
app.router(routerConfig)

app.start('#root');