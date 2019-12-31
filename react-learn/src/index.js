import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {searchStudents,getAllStudents} from './services/student'

ReactDOM.render(<App/>, document.getElementById('root'));

searchStudents({
   
}).then(resp => console.log(resp));
