import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImgContainer extends Component {

    static propTypes = {
        imgSrcs:PropTypes.arrayOf(PropTypes.string).isRequired,//图片路径的数组
        imgWidth:PropTypes.number.isRequired,//单张图片宽度
        imgHeight:PropTypes.number.isRequired,//单张图片宽度
        duration:PropTypes.number.isRequired,//在多长时间内完成切换
    }

    containerRef = el => {
        this.div = el;
    }

    //计时器的间隔时间
    tick = 16

    timer = null;//计时器

    /**
     * 切换到第几张图片
     * 调用该函数，此组件会经过一段动画完成切换
     * @param {*} index 
     */
    switchTo(index) {
        //设置正确的index
        if(index < 0) {
            index = 0;
        }else if(index > this.props.imgSrcs.length - 1) {
            index = this.props.imgSrcs.length - 1;
        }
        console.log(this.div,index);
        //1.根据index,计算div的最终的marginLeft
        const targetLeft = -index * this.props.imgWidth;
        //2.得到当前的marginLeft
        var curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft);
        //3.计算运动次数
        const times = Math.ceil(this.props.duration / this.tick);
        let curTimes = 0;//当前运动次数

        //4.计算每次运动的距离
        const totalDis = targetLeft - curLeft;//总距离
        const dis = totalDis / times;//每次运动的距离
        //先停止之前的动画
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            curTimes++;
            curLeft += dis;
            this.div.style.marginLeft = curLeft + 'px';
            if(curTimes === times) {
                //停止运动
                this.div.style.marginLeft = targetLeft + 'px';
                clearInterval(this.timer);
            }
        },this.tick)
    }



    render() {
        var imgs = this.props.imgSrcs.map((src,i) => <img src={src} key={i} style={{
            width:this.props.imgWidth,
            height:this.props.imgHeight,
            float:'left',
            
        }}  alt=''/>)
        return (
            <div
                ref={this.containerRef}
                style={{
                width:this.props.imgSrcs.length * this.props.imgWidth,
                height:this.props.imgHeight
            }}>
                {imgs}
            </div>
        )
    }
}
