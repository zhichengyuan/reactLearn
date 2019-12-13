import React, { Component } from 'react'
var prev;
export default class App extends Component {
    render() {
        return (
            <div onClick={e => {
                console.log(prev === e);
                console.log('rect:div被点击了')
            }}>
                <input type="text" onFocus={e => {
                    console.log("react:文本或得了焦点")
                }}/>
                <button onClick={e =>{
                    console.log('react:我被点击了');
                    prev = e;
                    e.persist();
                    setTimeout(() => {
                        console.log(e.type)
                    },0)

                    // console.log(e.nativeEvent);
                    // e.nativeEvent.stopImmediatePropagation();
                    // console.log(e.isPropagationStopped());
                    // e.stopPropagation();
                    // console.log(e.isPropagationStopped());
                }}>按钮</button>
            </div>
        )
    }
}

document.querySelector("#root").onFocus = function (e) {
    console.log('阻止focus事件冒泡');
    e.stopPropagation();
    
}

