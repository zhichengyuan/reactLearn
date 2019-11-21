import React, { Component } from 'react'

export default class Tick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number:props.number
        }

        const timer = setInterval(() => {
            this.setState({
                number :this.state.number - 1
            })
            if(this.state.number === 0) {
                clearInterval(timer);
            }
        },1000)
    }

    render() {
        return (
            <h1>
                倒计时：{this.state.number}
            </h1>
        )
    }
}
