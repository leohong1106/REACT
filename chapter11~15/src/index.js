import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SignupForm />, document.getElementById('root'));

// If you want your LoginForm to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
