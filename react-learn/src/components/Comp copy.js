import React, { Component } from 'react'

class A extends Component {

    method(){
        console.log('调用了组件A的方法');
    }

    render(){
        return (
            <h1>组件A</h1>
        )
    }
}

function B() {
    return <h1>组件B</h1>
}

export default class Comp extends Component {

    constructor(props) {
        super(props);
        this.txt = React.createRef();
        console.log(this.txt);
    }

    handleClick = () =>{
        console.log(this);
        // this.refs.txt.focus();
        this.txt.current.focus();
        this.refs.comp.method();
    }

    render() {
        return(
            <div>
                <input type="text" ref={this.txt}/>
                <A ref="comp"/>
                <B/>
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}