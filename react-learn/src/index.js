import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import src1 from './assets/01.jpg';
import src2 from './assets/02.jpg';
import src3 from './assets/03.jpg';
import App from './App';

const srcs =[src1,src2,src3];//保存图片路径的数组
let index = 0;//显示的图片索引
const container = document.getElementById('photo');
let timer;

// 根据index的值，显示某张图片

function render(){
    ReactDOM.render( <img src={srcs[index]} alt=""/> , container);
}
//启动计时器，每隔一段时间，切换图片
function start() {
    stop();
    timer = setInterval(() => {
        index = (index + 1) % 3;//改变index
        render(); 
    },2000)
}

//停止计时器
function stop(){
    clearInterval(timer);
}

render();
start();

container.onmouseenter = function (){
    stop();
}
container.onmouseleave = function () {
    start();
}


const a = 12323,b= 234332;
const obj = <span>元素对象</span>

const arr = ['1','2','3','4','sdf'];

const numbers = new Array(5);
numbers.fill(0);
var lis = numbers.map((item,i) => (<li key={i} title={i + 1}>{i}</li>));

const url = 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3483030207,3924941481&fm=202&mola=new&crop=v1';
const cls = 'image';

const content = "<h1>插入html元素</h1>";
const div = (
    <div>
        {a} * {b} = {a*b}
        {/* 以下不会产生任何输出 */}
        {null}
        {undefined}
        {false}
        {obj}
        <p>{arr}</p>
        <ul>
            {lis}
        </ul>
        <div>
        <img src={url} className={cls} alt="" style={{
            width:'200px',
        }} />
        <p dangerouslySetInnerHTML={{
            __html:content
        }}></p>
    </div>
    </div>
)


// ReactDOM.render( < App / > , document.getElementById('root'));
ReactDOM.render( div , document.getElementById('root'));