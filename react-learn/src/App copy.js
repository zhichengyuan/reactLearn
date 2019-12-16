import React, { Component } from 'react'

class Comp1 extends Component {
    render() {
        return (
            <h1>Comp1</h1>
        )
    }

}

export default class App extends Component {
    render() {
        return(
            <div>
                <Comp1 />
            </div>
        )
    }
}

