//计时器
import React, { Component } from 'react'

export default class Tick extends Component {
    //初始化状态，JS Next语法，目前处于实验阶段
    // state = {
    //     left : this.props.number
    // }

    constructor(props) {
        super(props);
        //初始化状态
        this.state = {
            left: this.props.number
        };
        this.timer = setInterval(() => {
            if(this.state.left <= 0) {
                //停止计时器
                clearInterval(this.timer);
                return;
            }
            this.setState({
                left:this.state.left -1 
            });//重新设置状态,会自动触发重新渲染    
        },1000)
    }

    render() {
        return (
            <div>
                倒计时剩余时间{this.state.left}
            </div>
        )
    }
}
