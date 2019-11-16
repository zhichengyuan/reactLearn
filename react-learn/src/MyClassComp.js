import React from 'react'

export default class MyClassComp extends React.Component {
    //该方法必须返回React元素
    render() {
        console.log(this.props);
        if(this.props.obj) {
            return (
                <>
                    <p>{this.props.obj.name}会更好{this.props.obj.age}</p>
                </>
            );
        }else if(this.props.ui) {
            return (
                <div>
                    <h2>下面是我传递的内容</h2>
                    传递dom{this.props.ui}
                </div>
            );
        }
        return <h1>类数组的内容 数字：{this.props.number}</h1>
    }
}