import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildA(props) {
    return <div>
        <h1>ChildA</h1>
        <ChildB />
    </div>
}

function ChildB(props) {
    return <p>
        <h1>ChildB</h1>
    </p>
}


export default class OldContext extends Component {

    /**
     * 约束上下文数据的类型
     */
    static childContextTypes = {
        a:PropTypes.number,
        b:PropTypes.string.isRequired
    }

    /**
     * 得到上下文中的数据
     */
    getChildContext() {
        console.log('获取上下文中的数据');
        return {
            a:123,
            b:'2323'
        }
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
