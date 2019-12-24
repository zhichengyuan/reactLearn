import React,{useRef,useImperativeHandle} from 'react'

function Test(props,ref) {
    useImperativeHandle(ref,() => {
        //该函数第一次加载组件后调用
        //如果使用依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会重新调用函数
        //相当于给ref.current = 1;
        return {
            method() {
                console.log('Test method called');
            }
        }
    },[])
    return <h1 ref={ref}>Test Component</h1>
}
const TestWrapper = React.forwardRef(Test)
// class Test extends React.Component {
//     method() {
//         console.log('Test method called');
//     }

//     render() {
//         return <h1>Test Component</h1>
//     }
// }

export default function App() {
    const testRef = useRef();
    return (
        <div>
            <TestWrapper ref={testRef} />
            <button
                onClick={() => {
                    console.log(testRef);
                    testRef.current.method();
                }}
            >点击调用Test组件的method方法</button>
        </div>
    )
}
