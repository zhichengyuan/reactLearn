import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'

FadeTransition.defaultProps = {
    timeout:1000
}

function addTransition(node,timeout) {
    node.style.transition = `opacity ${timeout}ms`
}

function removeTransition(node) {
    node.style.transition = '';
}
export default function FadeTransition(props) {
    return (
        <CSSTransition {...props} classNames="fade"
            onEnter={node => addTransition(node,props.timeout)}
            onEntered={node => removeTransition(node,props.timeout)}
            onExit={node => addTransition(node,props.timeout)}
            onExited={node => removeTransition(node,props.timeout)}
        ></CSSTransition>
    )
}
