import React, { Component } from 'react'

const ctx = React.createContext();

function ChildA(props) {
    return <div>
        <h1>ChildA</h1>
        <h2>
            <ctx.Consumer>
                {value => <>{value.a},{value.b}</>}
            </ctx.Consumer>
        </h2>
        <ChildB />
    </div>
}

class ChildB extends React.Component {

    static contextType = ctx;

    render() {
        return (
            <ctx.Consumer>
                { value => (
                    <div>
                        ChildB,来自于上下文的数据，a:{value.a},b:{value.b}
                        <button onClick={() => {
                            value.changA(value.a + 2);
                        }}>子组件按钮，a+2</button>
                    </div>
                )}
            </ctx.Consumer>
            
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
            <ctx.Provider value={this.state}>
                <div>
                    <ChildA />
                    <button onClick={() => {
                        this.setState({
                            a:this.state.a + 1
                        })
                    }}>父组件的按钮，a+1</button>
                </div>

            </ctx.Provider>
        )
    }
}
