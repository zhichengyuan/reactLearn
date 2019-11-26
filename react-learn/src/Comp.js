import React, { Component } from 'react'


export default class Comp extends Component {
    state = {
        n:0
    }

    handleClick = () => {
        this.setState(cur => {
            //参数prev表示当前的状态
            //该函数的返回结果，会混合（覆盖）掉之前的状态
            //该函数是异步执行
            return {
                n:cur.n + 1
            }
        },() => {
            //所有状态全部更新完成，并且重新渲染后执行
            console.log('state更新完成',this.state.n);
        });

        this.setState(cur => ({
            n:cur.n + 1
        }));

        this.setState(cur => ({
            n:cur.n + 1
        }))
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>
                    <p>setState,它对状态的改变，*可能*是异步的</p>
                    <p>如果改变状态的代码处于某个HTML元素的事件中，则其是异步的，否则是同步</p>
                    <p>如果遇到某个事件中，需要同步调用多次，需要使用函数的方式得到最新状态</p>
                </h1>
                <h1>
                    <p>最佳实践：</p>
                    <p>1.把所有的setState当做是异步的</p>
                    <p>2.永远不要信任setState调用之后的状态</p>
                    <p>3.如果要使用改变之后的状态，需要使用回调函数（setState的第二个参数</p>
                    <p>4.如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState的第一个函数）</p>
                </h1>
                <h1>

                    {this.state.n}
                </h1>
                <p>
                    <button onClick={this.handleClick}>+</button>
                </p>
            </div>
        )
    }
}
