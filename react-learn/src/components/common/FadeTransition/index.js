import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'

FadeTransition.defaultProps = {
    timeout:1000
}


export default function FadeTransition(props) {
    function addTransition(node) {
        node.style.transition = `opacity ${props.timeout}ms`
    }
    
    function removeTransition(node) {
        node.style.transition = '';
    }
    return (
        <CSSTransition {...props} classNames="fade"
            onEnter={addTransition}
            onEntered={(node,isApper) => {
                removeTransition(node);
                props.onEntered && props.onEntered(node,isApper)
            }}
            onExit={addTransition}
            onExited={node => {
                removeTransition(node);
                if(props.onExited) {
                    props.onExited(node);
                }
            }}
        ></CSSTransition>
    )
}
