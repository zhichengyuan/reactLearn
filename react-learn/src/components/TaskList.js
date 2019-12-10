import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

export default class TaskList extends PureComponent {

    static propTypes = {
        tasks:PropTypes.arrayOf(PropTypes.shape({
            name:PropTypes.string.isRequired,
            isFinish:PropTypes.bool.isRequired
        })).isRequired
    }

    render() {
        const ts = this.props.tasks.map((it,i) => <Task key={i} name={it.name} isFinish={it.isFinish}/>)
        return (
            <ul>
                {ts}
            </ul>
        )
    }
}
