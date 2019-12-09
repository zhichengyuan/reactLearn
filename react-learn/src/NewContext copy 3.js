import React, { Component } from 'react'

const ctx1 = React.createContext();
const ctx2 = React.createContext();

function ChildA(props) {
    return (
        <ctx2.Provider value={{
            a:121212,
            c:'hello'
        }}>
            <div>
                <h1>ChildA</h1>
                <h2>
                    <ctx1.Consumer>
                        {value => <>{value.a},{value.b}</>}
                    </ctx1.Consumer>
                </h2>
                <ChildB />
            </div>
    </ctx2.Provider>)
}

class ChildB extends React.Component {

   

    render() {
        return (
            <ctx1.Consumer>
                { value => (
                    <div>
                       <p>ChildB,来自于上下文的数据，a:{value.a},b:{value.b}
                            <button onClick={() => {
                                value.changA(value.a + 2);
                            }}>子组件按钮，a+2</button>
                        </p> 
                        <ctx2.Consumer>
                            {val => (
                                <p>来自于ctx2的数据:a:{val.a},c:{val.c}</p>
                            )}
                        </ctx2.Consumer>
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
