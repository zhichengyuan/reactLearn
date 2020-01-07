import Home from './Home'
import News from './News'
import NewsHome from './NewsHome'
import NewsDetail from './NewsDetail'
import NewsSearch from './NewsSearch'

export default [
    
    {
        path:"/news",component:News,name:"news",
        children:[
            {path:'/', exact:true ,component:NewsHome,name:"newsHome"},
            {path:'/detail',exact:true,component:NewsDetail,name:"newsDetail"},
            {path:'/search',exact:true,component:NewsSearch,name:"newsSearch"},
        ]
    },
    {path:"/", exact:true,component: Home,name:"home"},
]