import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class CompA extends PureComponent {
    static propTypes = {

    }

    state = {
        a:123,
        b:'abc'
    }

    handleClick = () => {
        this.setState({
            a:321,
            b:'bca'
        })
    }

    render() {
        return (
            <div>
               <h1>CompA</h1>
               <h1>{this.state.a}</h1>
               <CompB n={this.state.b}/>
               <button onClick={this.handleClick}>按钮</button>
            </div>
        )
    }
}

function CompB (props) {
    
    return (
        <div>
            <h1>CompB {props.n}</h1>
            <CompC n={props.n}/>
        </div>
    )
    
}

class CompC extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <div>
            <h1>CompC {this.props.n}</h1>
            </div>
        )
    }
}

export default class App extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <CompA />
            </div>
        )
    }
}
