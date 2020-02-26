import React from 'react'
import {push} from 'connected-react-router'
import { connect } from 'react-redux'

function StudentAdd({history,onClick}) {
    return (
        <div>
            <h1>添加学生页面</h1>
            <button onClick={() => {
                history.push("/courses")
            }}>history方法点击跳转到课程列表页</button>
            <button onClick={() => {
                history.push("/courses")
            }}>数据方式点击跳转到课程列表页</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onClick:() => {
        dispatch(push("/courses"))
    }
})

export default connect(null,mapDispatchToProps)(StudentAdd)