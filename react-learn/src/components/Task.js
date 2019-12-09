import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Task.css'

export default class Task extends Component {

    static propTypes = {
        name:PropTypes.string.isRequired,//任务名称
        isFinish:PropTypes.bool.isRequired//任务是否完成
    }

    render() {
        return (
        <li className={this.props.isFinish ? 'finish':''}>{this.props.name}</li>
        )
    }
}
