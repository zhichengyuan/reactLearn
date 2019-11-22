import React, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {

    state = {
        isOver:false //倒计时是否完成
    }

    // constructor(props) {
    //     super(props);
    //     this.handleOver = this.handleOver.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleClick(){
        console.log('我点击了');
    }

    handleOver(){
        this.setState({
            isOver:true
        })
    }

    render() {
        let status = '正在倒计时';
        if(this.state.isOver) {
            status = '倒计时完成'
        }
        return (
            <div>
                <Tick 
                    number={10} 
                    onClick={this.handleClick.bind(this)} 
                    onOver={this.handleOver.bind(this)}/>
                <h2>
                    {status}
                </h2>
            </div>
        )
    }
}
