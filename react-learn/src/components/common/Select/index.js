import React, { Component } from 'react'

/**
 * 一组单选框
 */
export default class Selet extends Component {

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value,this.props.name,e);
    }

    /**
     * 得到一组下拉列表
     */
    getOptions(){
        return this.props.datas.map(it => (
            <option value={it.value} key={it.value}>
                {it.text}
            </option>
            
        ))
    }

    render() {
        const options = this.getOptions();
        return (
            <select name={this.props.name}
                value={this.props.value}
                onChange={this.handleChange}
            >
                {options}
            </select>            
        )
    }
}
