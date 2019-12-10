import React, { PureComponent } from 'react'
import './style.css'

export default function withMouseListener(Comp) {
    return class MouseListener extends PureComponent {

        state = {
            x:0,
            y:0
        }
    
        divRef = React.createRef();
    
        handeMouseMove = e => {
            //更新x和y的值
            // console.log(e,e.pageX,e.pageY);
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
                    <Comp {...this.props} x={this.state.x} y={this.state.y}/>
                </div>
            )
        }
    }
}