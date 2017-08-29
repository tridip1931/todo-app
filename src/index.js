import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';


const TODOS = [
  { id: 1503999071258, text: "Help Dave with Project", completed: false },
  { id: 1503999071268, text: "Make important phone call", completed: false },
  { id: 1503999071278, text: "Email Jason", completed: false },
  { id: 1503999071288, text: "Drop by mail center", completed: true },
  { id: 1503999071298, text: "Pay credit card bill", completed: true },
];

ReactDOM.render(<App todos={TODOS} />, document.getElementById('root'));
