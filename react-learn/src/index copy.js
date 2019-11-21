import React from 'react';
import ReactDOM from 'react-dom';

function handleClick(e) {
    console.log('点击了！！！！');
    console.log(e);
}

const btn = <button onClick={handleClick} onMouseEnter={(e) => {
    console.log('鼠标移入',e)
}}>点击我</button>
ReactDOM.render( btn, document.getElementById('root'));