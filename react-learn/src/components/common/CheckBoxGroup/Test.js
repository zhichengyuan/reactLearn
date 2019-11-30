import React, { Component } from 'react'
import CheckBoxGroup from './index'

export default class Test extends Component {
    state = {
        datas:[
            {value:"football",text:'足球'},
            {value:"basketball",text:'篮球'},
            {value:"movie",text:'电影'},
        ],
        chooseDatas:[]
    }
    render() {
        return (
            <div>
                <CheckBoxGroup
                name='loves' 
                datas={this.state.datas}
                chooseDates={this.state.chooseDatas}
                onChange={newArr => {
                    this.setState({
                        chooseDatas:newArr
                    })
                }}
                />
            </div>
        )
    }
}
