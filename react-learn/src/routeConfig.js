import Home from './Home'
import News from './News'
import NewsHome from './NewsHome'
import NewsDetail from './NewsDetail'
import NewsSearch from './NewsSearch'

export default [
    {path:"/", component: Home},
    {
        path:"news",component:News,
        children:[
            {path:'/',component:NewsHome},
            {path:'/detail',component:NewsDetail},
            {path:'/search',component:NewsSearch},
        ]
    }
]