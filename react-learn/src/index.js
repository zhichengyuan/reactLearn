import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp';



ReactDOM.render( <div>
    <MyFuncComp number="3"/>
    <MyFuncComp number={4}/>
    <MyFuncComp number={5}/>
    <MyFuncComp number={6}/>
    <MyFuncComp number={7}/>

    <MyClassComp />
    <MyClassComp number={5} enable obj={{
        name:'明天',
        age:'20'
    }}/>
    <MyClassComp number={6} ui={<h2>这是我传递的属性</h2>}/>
    <MyClassComp number={7}/>
    <MyClassComp/>
</div> , document.getElementById('root'));