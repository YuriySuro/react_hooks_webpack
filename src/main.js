import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import App2 from './functionalComponents/app2';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.querySelector("#app"));
ReactDOM.render(<App2 />, document.querySelector("#app2"));