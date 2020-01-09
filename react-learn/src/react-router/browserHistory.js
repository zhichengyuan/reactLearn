import { createBrowserHistory } from 'history'
window.createBrowserHistory = createBrowserHistory;

window.h = createBrowserHistory({
    basename:'/news',
    forceRefresh:false,
    keyLength:4,
    getUserConfirmation:() => {
        console.log('getUserConfirmation运行了')
    }
})

window.h.block('你真的要跳转页面吗？')
// window.unListen = window.h.listen((location,action) => {
//     console.log(location);
//     window.h.action = action;
// })