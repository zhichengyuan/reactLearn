import React, { Component } from 'react'
// import FunDefault from './FunDefault'
// import ClassDefault from './ClassDefault'
import ValidationComp,{ A } from './ValidationComp'
import Comp from './Comp'

export default class App extends Component {
    
    render() {
       
        return (
            <div>
                {/* <FunDefault a={10} b={4} /> */}
                {/* <ClassDefault a={11} b={4} /> */}
                <ValidationComp
                    a={1}
                    d={<Comp/>}
                    e={<Comp/>}
                    F={Comp}
                    g={new A()}
                    sex='男'
                    h={[2,4]}
                    i={{
                        a:1
                    }}
                    j={{
                        name:'sdas',
                        age:2,
                        a:3,
                        address:{
                            province:'dsd',
                            city:'dsda'
                        }
                    }}
                    k={[{name:'sdsa',age:12}]}
                />
            </div>
        )
    }
}
