import React, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {

    state = {
        isOver:false //倒计时是否完成
    }

    //结果是handleClick不在原型上，在对象上
    handleClick = () =>{
        console.log('我点击了');
    }

    handleOver = () => {
        this.setState({
            isOver:true
        })
    }

    render() {
        let status = '正计时';
        if(this.state.isOver) {
            status = '倒计时完成'
        }
        return (
            <div>
                <Tick 
                    number={10} 
                    onClick={this.handleClick} 
                    onOver={this.handleOver}/>
                <h2>
                    {status}
                </h2>
            </div>
        )
    }
}
