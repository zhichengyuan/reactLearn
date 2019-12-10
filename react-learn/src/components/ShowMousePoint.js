import React, { PureComponent } from 'react'
import './style.css'

export default class ShowMousePoint extends PureComponent {

    state = {
        x:0,
        y:0
    }

    divRef = React.createRef();

    handeMouseMove = e => {
        //更新x和y的值
        // console.log(e,e.pageX,e.pageY);
        const div = this.divRef.current.getBoundingClientRect();
        console.log(div);
        const {left,top} = this.divRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        this.setState({
            x,
            y
        })
    }



    render() {
        return (
            <div className="point" ref={this.divRef} onMouseMove={this.handeMouseMove}>
               <h2>
                鼠标x:{parseInt(this.state.x)},
                鼠标y:{parseInt(this.state.y)}

               </h2>
            </div>
        )
    }
}
