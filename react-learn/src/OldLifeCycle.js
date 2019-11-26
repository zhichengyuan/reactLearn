import React, { Component } from 'react'

export default class OldLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            n:0
        };
        console.log('一个新组件诞生了！！！');
    }

    render() {
        return (
            <div>
                <h1>旧的生命周期</h1>
                <h2>属性n：{this.props.n}</h2>
                <h2>属性n：{this.state.n}</h2>
            </div>
        )
    }
}
