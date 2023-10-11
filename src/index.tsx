import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import {App} from './App1';
import {App} from './App';
import { Fn } from './types/interfaces';
import { readBuilderProgram } from 'typescript';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const testFn = (a: number, b: number) => {
  return a > b
}

// testFn.defaultV = 3
testFn.displayName = 'testFnName'

const fn: Fn<number> = testFn



const result = fn(1, 2)
console.log(result)
console.log(fn.defaultProp)
console.log(fn.displayName)
