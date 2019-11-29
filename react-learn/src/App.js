import React, { Component } from 'react'
import FormTest from './components/common/FormTest'

export default class App extends Component {
    state = {
        val:'1212',
        checked:true,
        loves:['足球','篮球','音乐','其他'],
        chooseLoves:['足球','篮球'],
        selVal:'beijing'
    }
    render() {
        const checkboxes = this.state.loves.map(it => (<label key={it}>
            <input 
                type="checkbox"
                checked={this.state.chooseLoves.includes(it)}
                onChange={e => {
                    if(e.target.checked) {
                        this.setState({
                            chooseLoves:[...this.state.chooseLoves,it]
                        })
                    }else{
                        this.setState({
                            chooseLoves:this.state.chooseLoves.filter(l => l !==it)
                        })
                    }
                }}
            />
            {it}
        </label>))
        return (
            <div>
                <p>只能输入数字{this.state.val}</p>
                <input type="text" value={this.state.val} onChange={e => {
                    var val = e.target.value;
                    val = val.replace(/\D/g,"")
                    this.setState({
                        val
                    })
                }}/>
                <input type="checkbox" checked={this.state.checked} 
                    onChange={e => {
                        console.log(e.target.checked);
                        this.setState({
                            checked:e.target.checked
                        })
                    }}
                />
                <button onClick={() => {
                    console.log(this.state.val);
                }}>
                    获取文本的值
                </button>
                <p>
                    {checkboxes}
                    <button onClick={() => {
                        console.log(this.state.chooseLoves);
                    }}>获取选中值</button>
                </p>
                <p>
                    <select value={this.state.selVal} onChange={e => {
                        this.setState({
                            selVal:e.target.value
                        })
                    }}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="shenzhen">深圳</option>
                    </select>
                </p>
                <div>
                    <FormTest/>
                </div>
            </div>
        )
    }
}
