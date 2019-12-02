import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'

/**
 * 一组单选框
 */
export default class Selet extends Component {

    /**
     * 默认属性值
     */
    static defaulProps = {
        datas:[],
        value:''
    }

    static propTypes = {
        datas:types.groupDatas.isRequired,
        name:PropTypes.string.isRequired,
        value:PropTypes.string.isRequired,
        onChange:PropTypes.func
    }

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
