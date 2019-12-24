import React,{useState,useRef,useEffect} from 'react'

export default function App() {
    const [n, setN] = useState(10)
    const nRef = useRef(n);
    useEffect(() => {
        
        const timer = setInterval(() => {
            nRef.current--
            setN(nRef.current);
            if(nRef.current === 0) {
                clearInterval(timer);
            }
        },1000)
        return () => {
            clearTimeout(timer)
        };
    }, [])

    return (
        <div>
            <h1>{n}</h1>
        </div>
    )
}
