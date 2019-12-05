import React, { Component } from 'react'
import Banner from './index'
import src1 from './img/01.jpg'
import src2 from './img/02.jpg'
import src3 from './img/03.jpg'


export default class Test extends Component {
    render() {
        return (
            <div className="container">
                <Banner imgSrcs={[src1,src2,src3]}
                    duration={500}
                />
            </div>
        )
    }
}
