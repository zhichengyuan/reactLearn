import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './RouterContext'
import matchPath from './matchPath'

export default class Router extends Component {
    static propTypes = {
        history:PropTypes.object.isRequired,
        children:PropTypes.node
    }

    state = {
        location:this.props.history.location
    }

    componentDidMount() {
        this.unListen = this.props.history.listen((location,action) => {
            this.props.history.action = action;
            this.setState({
                location
            })
        })
    }

    componentWillUnmount() {
        this.unListen();
    }

    ctxValue = {} //上下文中的对象

    render() {
        this.ctxValue.history = this.props.history;//该对象不变
        this.ctxValue.location = this.state.location;
        this.ctxValue.match = matchPath("/",this.state.location.pathname);
        return <ctx.Provider value = {this.ctxValue}>
            {/* <h1>
                {this.ctxValue.location.pathname}
            </h1>
            <button onClick={() => {
                this.ctxValue.history.push('/123');
            }}>跳转123</button>
            <button onClick={() => {
                this.ctxValue.history.push('/abc');
            }}>跳转abc</button> */}
            {this.props.children}
        </ctx.Provider>
    }
}
