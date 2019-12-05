import React, { Component } from 'react'
import './index.css'

export default class SwitchArrow extends Component {
    render() {
        return (
            <div className="arrow">
                <span className="left">
                    &lt;
                </span>
                <span className="right">
                    &gt;
                </span>
            </div>
        )
    }
}
