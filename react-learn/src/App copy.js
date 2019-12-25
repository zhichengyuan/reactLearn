import React, { useState } from 'react'

import { CSSTransition } from 'react-transition-group';
import './App.css'

export default function App() {
    const [visible, setVisible] = useState(true);
    return (
      <div>
        <CSSTransition 
        appear       
        classNames="test" 
        timeout={2000} 
        in={visible}>
            <h1>一个标题</h1>
        </CSSTransition>
        <button onClick={() => setVisible(!visible)}>
          Click to Toggle
        </button>
      </div>
    );
  }
