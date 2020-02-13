import { createActions } from 'redux-actions'

// function createActions(mapToActionCreators) {
//     const result = {};
//     for (const prop in mapToActionCreators) {
//         const payloadCreator = mapToActionCreators[prop];//取属性值
//         const newPropName = toSmallCamel(prop);
//         const actionCreator = (...args) => {
//             if(typeof payloadCreator === 'function') {
//                 return {
//                     type:this.props,
//                     payload:payloadCreator(...args)
//                 }
//             }
//             else {
//                 return {
//                     type:prop
//                 }
//             }
//         }
//         actionCreator.toString = function() {
//             return prop;
//         }
//         result[newPropName] = actionCreator
//     }
//     return result;
// }

//得到小驼峰命名法
function toSmallCamel(str) {
    //ASYNC_INCREAS -> ['ASYNC','INCREAS'] -> ['async','Increase]' - 'asyncIncrease'
    return str.split('_').map((s,i) => {
        s = s.toLowerCase();
        if(i !== 0 && s.length >= 1) {
            s=s[0].toUpperCase() + s.substr(1);
        }
        return s;
    }).join("")
}

export const actionTypes = {
    increase:"INCREASE",
    decrease:"DECREASE",
    asyncIncrease:"ASYNC_INCREASE",//异步增加
    asyncDecrease:"ASYNC_DECREASE",
    autoIncrease:"AUTO_INCREASE",//自动增加
    stopAutoIncrease:"STOP_AUTO_INCREASE",//停止自动增加
    add:"ADD"
}

const actions = createActions({
    INCREASE:null,
    DECREASE:null,
    ASYNC_INCREASE:null,
    ASYNC_DECREASE:null,
    STOP_AUTO_INCREASE:null,
    ADD:number => number
})


export const {increase,decrease,asyncIncrease,asyncDecrease,autoIncrease,stopAutoIncrease,add} = actions;


