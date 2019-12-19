import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { getStudents } from './services/student'


ReactDOM.render(<App/>, document.getElementById('root'));

getStudents().then(data => console.log(data));