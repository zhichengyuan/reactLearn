import React, { Component } from 'react'
import RadioBoxGroup from './index'
import { getAllStudents } from '../../../services/student'

export default class Test extends Component {
    state = {
        datas:[],
        value:''
    }

    async componentDidMount() {
        const stus = await getAllStudents();
        console.log(stus);
        this.setState({
            datas:stus.map(it => ({value:it.id.toString(),text:it.name}))
        })
    }

    render() {
        return (
            <div>
                <RadioBoxGroup
                name='loves' 
                datas={this.state.datas}
                value={this.state.value}
                onChange={val => {
                    this.setState({
                        value:val
                    })
                }}
                />
            </div>
        )
    }
}
