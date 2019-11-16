import React from "react"

export default function MyFuncComp (props) {
    console.log(props);
return <h1>组件内容 number: {props.number}</h1>
}