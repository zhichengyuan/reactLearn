import React, { Component } from 'react'

export default class ClassDefault extends Component {

    //属性默认值方法二
    static defaultProps = {
        a:1,
        b:2,
        c:3
    }

    render() {
        return (
            <div>
                a:{this.props.a},b:{this.props.b},c:{this.props.c}
            </div>
        )
    }
}

//属性默认值方法一
ClassDefault.defaultProps = {
    a:1,
    b:2,
    c:3
}