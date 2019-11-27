import React, { Component } from 'react'
import Modal from './common/Modal'

export default class Test extends Component {
    state = {
        showModal:false
    }

    showModal = () =>{
        this.setState({
            showModal:true
        })
    }

    hideModal = () => {
        this.setState({
            showModal:false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.showModal ?
                        (<Modal onClose={this.hideModal}>
                            <h2>发的发生的法定</h2>
                            <button onClick={this.hideModal}>关闭蒙层</button>
                        </Modal>) : 
                        null
                }
                <button onClick={this.showModal}>显示蒙层</button>
            </div>
        )
    }
}
