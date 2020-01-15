import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './components/Hello';
import SHello from './components/StatefulHello';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Hello name="Typescript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement,
);
//document.getElementById('root')! : bang(!) syntax. null 이거나 undefined가 아님이라고 명시하는 것.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
