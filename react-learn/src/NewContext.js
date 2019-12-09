import React, { Component } from 'react'

const ctx1 = React.createContext();
const ctx2 = React.createContext();

function ChildA(props) {
    return (
            <div>
                <h1>ChildA</h1>
                <ChildB />
            </div>
    )
}

class ChildB extends React.Component {

    shouldComponentUpdate(nextProps,nextState) {
        console.log('运行了优化')
        return false;
    }

    render() {
        console.log('render')
        return (
            <ctx1.Consumer>
                { value => (
                    <div>
                       <p>ChildB,来自于上下文的数据，a:{value.a},b:{value.b}
                            <button onClick={() => {
                                value.changA(value.a + 2);
                            }}>子组件按钮，a+2</button>
                        </p> 
                      
                    </div>
                )}
            </ctx1.Consumer>
        )
    }
}

export default class NewContext extends Component {
    state = {
        a:0,
        b:'abc',
        changA:(newA) => {
            this.setState({
                a:newA
            })
        } 
    }
    render() {
        return (
            <ctx1.Provider value={this.state}>
                <div>
                    <ChildA />
                    <button onClick={() => {
                        this.setState({
                            a:this.state.a + 1
                        })
                    }}>父组件的按钮，a+1</button>
                </div>

            </ctx1.Provider>
        )
    }
}
