import React, { Component } from 'react'
import PropTypes from 'prop-types'

const types = {
    a:PropTypes.number,
    b:PropTypes.string.isRequired,
    onChangeA:PropTypes.func
}

class ChildA extends Component {
    static contextTypes = types;

    static childContextTypes = {
        a:PropTypes.number,
        c:PropTypes.string
    }

    getChildContext() {
        return {
            a:789,
            c:'hello'
        }
    }

    render () {
        return <div>
            <h1>ChildA</h1>
            <h2>a:{this.context.a},b:{this.context.b}</h2>
            <ChildB />
        </div>
    }
}



ChildA.contextTypes = types;

class ChildB extends React.Component {
    /**
     * 声明需要使用那些上下文中的数据
     */
    static contextTypes = {
        ...types,
        c:PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                ChildB,来自于上下文的数据，a：{this.context.a},b:{this.context.b},c:{this.context.c}
                <button onClick={() => {
                    this.context.onChangeA(this.context.a + 2)
                }}>子组件的按钮，a+2</button>
            </div>
        )
    }
}


export default class OldContext extends Component {

    /**
     * 约束上下文数据的类型
     */
    static childContextTypes = types

    state = {
        a:123,
        b:'abc'
    }

    /**
     * 得到上下文中的数据
     */
    getChildContext() {
        console.log('获取上下文中的数据');
        return {
            a:this.state.a,
            b:this.state.b,
            onChangeA:(newA) => {
                this.setState({
                    a:newA
                })
            }
        }
    }


    render() {
        return (
            <div>
                <ChildA />
                <button onClick={() => {
                    this.setState({
                        a:this.state.a + 1,
                    })
                }}>a加1</button>
            </div>
        )
    }
}
