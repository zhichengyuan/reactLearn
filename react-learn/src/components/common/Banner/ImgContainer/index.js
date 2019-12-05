import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImgContainer extends Component {

    static defaultProps = {
        imgSrcs:[],
        imgWidth:520,
        imgHeight:280
    }

    static propTypes = {
        imgSrcs:PropTypes.arrayOf(PropTypes.string).isRequired,//图片路径的数组
        imgWidth:PropTypes.number.isRequired,//单张图片宽度
        imgHeight:PropTypes.number.isRequired,//单张图片宽度
    }

    render() {
        var imgs = this.props.imgSrcs.map((src,i) => <img src={src} key={i} style={{width:this.props.imgWidth,height:this.props.imgHeight}}  alt=''/>)
        return (
            <div style={{
                width:this.props.imgSrcs.length * this.props.imgWidth,
                height:this.props.imgHeight
            }}>
                {imgs}
            </div>
        )
    }
}
