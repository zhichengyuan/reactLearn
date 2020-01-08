import React from 'react'
import rest from './resetScroll'

export default function withScroll(Comp) {
    return class ScrollWrapper extends React.Component{
        componentDidMount () {
            rest();
        }

        render() {
            return <Comp {...this.props} />
        }
    }
}
