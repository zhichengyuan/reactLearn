import React, { Component } from 'react'
// import FunDefault from './FunDefault'
// import ClassDefault from './ClassDefault'
import ValidationComp from './ValidationComp'

export default class App extends Component {
    
    render() {
       
        return (
            <div>
                {/* <FunDefault a={10} b={4} /> */}
                {/* <ClassDefault a={11} b={4} /> */}
                <ValidationComp />
            </div>
        )
    }
}
