import { createHashHistory } from 'history'
window.createHashHistory = createHashHistory;

window.h = createHashHistory({
    // basename:'/news',
    hashType:"slash",
    getUserConfirmation:(msg,callback) => {
        console.log(msg);
        callback(window.confirm(msg));
    }
})

window.unblock = window.h.block((location,action) => {
    return `你真的要进入${location.pathname}页面吗？${action}`;
})
// window.unListen = window.h.listen((location,action) => {
//     console.log(location);
//     window.h.action = action;
// })