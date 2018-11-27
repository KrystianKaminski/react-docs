import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Josh Perez'
const element = <h1>Hello, {name}</h1>

ReactDOM.render(
    element, document.getElementById('root'));