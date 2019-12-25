import React, { useState } from 'react'
import uuid from 'uuid'

import { CSSTransition,SwitchTransition,TransitionGroup } from 'react-transition-group';
import './App.css'
import 'animate.css'

export default function App() {
    const [tasksList, setTasksList] = useState([
        { id: uuid(),name:'任务1'},
        { id:uuid(),name:'任务2' },
    ]);
    console.log(uuid())
    return (
      <div>
            <TransitionGroup appear component='ul' className="dsd">
                {
                    tasksList.map(t => (
                        <CSSTransition key={t.id} timeout={500}>
                            <li>{t.name}<button
                                onClick={() => {
                                    var newTasks = tasksList.filter(it => it.id !== t.id)
                                    setTasksList(newTasks);
                                }}
                            >删除</button></li>
                        </CSSTransition>
                    ))
                }
                
            </TransitionGroup>
            <button onClick={() => {
                var name = window.prompt("请输入任务名称");
                setTasksList([...tasksList,{id:uuid(),name}])
            }}>
                添加任务
            </button>
      </div>
    );
  }
