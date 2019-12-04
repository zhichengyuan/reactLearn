import React, { Component } from 'react'


export default class Comp extends Component {

    state = {
        show:true
    }

    handleClick = () =>{
        console.log(this);
        // this.refs.txt.focus();
        // this.txt.focus();
        // this.setState({});
        this.setState({
            show:!this.state.show
        })
    }

    componentDidMount() {
        console.log('didMount',this.txt);
    }

    getRef = el => {
        console.log('函数被调用了',el);
        this.txt = el;
    }

    render() {
        return(
            <div>
                {
                    this.state.show && <input type="text" ref={this.getRef}/>
                }

                
                {/* <input type="text" ref={el => {
                    console.log('函数被调用了');
                    this.txt = el;
                }}/> */}
               
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}