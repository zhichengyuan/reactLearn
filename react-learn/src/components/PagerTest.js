import React, { Component } from 'react'
import Pager from './Pager'

export default class PagerTest extends Component {
    state = {
        current:3,
        total:100,
        limit:10,
        panelNumber:5
    }

    handlePageChange = (newPage) => {
        console.log(newPage);
    }

    render() {
        return (
            <div>
                <Pager {...this.state} onPageChange={this.handlePageChange}/>
            </div>
        )
    }
}
