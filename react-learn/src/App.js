import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'



export default class App extends PureComponent {
    constructor(props) {
        super(props)
        setTimeout(() => {
            console.log('hello')
        },3000);
    }

    componentWillMount() {
        console.log('sdsadfasa')
    }

    render() {
        return (
            <div ref={'dsda'}>
               sdsd 
            </div>
        )
    }
}
