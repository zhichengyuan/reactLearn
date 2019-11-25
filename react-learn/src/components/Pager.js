import React from 'react'
import './Pager.css'

/**
 * 分页组件
 * 属性
 * 1、current：初始页码
 * 2、total：总数据量
 * 3、limit：页容量，每页显示的数据量
 * 4、panelNumber:数字页码最多显示多少个
 * 
 */

export default function Pager(props) {
    const pageNumber = getPageNumber(props);
    const min = getMinNumber(props);//获取最小数字
    const max = getMaxNumber(min,pageNumber,props);//最大数字
    const number = [];
    for (var i = min; i<= max; i++) {
        number.push(<span key={i} className="item" onClick={() => {toPage(i,props)}}>{i}</span>)
    }
    return (
        <>
            <span 
                className={props.current === 1 ? "item disabled" : 'item'}
                onClick={() => toPage(1,props)}
            >首页</span>
            <span
                onClick={() => toPage(props.current -1 < 1 ? 1 : props.current - 1,props)} 
                className={props.current === 1 ? "item disabled" : 'item'}>上一页</span>
            {/* 数字页码 */}
            {number}
            <span className={props.current === pageNumber ? "item disabled" : 'item'}>下一页</span>
            <span className={props.current === pageNumber ? "item disabled" : 'item'}>尾页</span>
            <span className="current">{props.current}</span>/
            <span>{pageNumber}</span>
        </>
    )
}


function getMinNumber(props) {
    var min = props.current - Math.floor(props.panelNumber / 2)
    if(min < 1) {
        min = 1;
    }
    return min;
}

/**
 * 计算最大数字
 * @param {*} min 
 * @param {*} pageNumber 
 * @param {*} props 
 */

function getMaxNumber(min,pageNumber,props){
    var max = min + props.panelNumber -1 ;
    if(max > pageNumber) {
        max = pageNumber;
    }
    return max;
}

/**
 * 跳转到某一页
 * @param {*} target 目标页面
 * @param {*} props 所有属性
 */

function toPage(target,props){
    console.log(target,props);
    if(props.current === target) {
        return; //目标和当前页面相同
    }
    props.onPageChange && props.onPageChange(target);
}

/**
 * 计算总页数
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit);
}