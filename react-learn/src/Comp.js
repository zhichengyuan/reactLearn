import React from 'react'

export default function Comp(props) {
    console.log(props);
    return (
        <div className="comp">
            {props.html}
            {props.children || <h1>默认值</h1>}
        </div>
    )
}
