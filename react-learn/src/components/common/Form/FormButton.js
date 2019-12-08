import React from 'react'
import { Consumer } from './formContext'

export default function FromButton(props) {
    return (
        <Consumer>
            { ctx => {
                return (
                    <button onClick={() => {
                        ctx.submit();
                    }}>
                        {props.children}
                    </button>
                )
            }}
        </Consumer>
        
    )
}