import React, { Component } from 'react'
// import Test from './components/common/CheckBoxGroup/Test'
// import Test from './components/common/RadioBoxGroup/Test'
// import Test from './components/common/Select/Test'
// import Test from './components/Test'
import {A,B} from './components/Comps';
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'
let AComp = withLogin(withLog(A,'sdasdf'));
let BComp = withLogin(withLog(B,'ewewew'));


export default class App extends Component {
    
    render() {
        
        return (
            <div>
                <AComp isLogin a={2}/>
                <BComp isLogin b={3}/>
                <button onClick={() => {
                    this.setState({})
                }}>点击</button>
            </div>
        )
    }
}
