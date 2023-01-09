import "./public-path.js"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

interface microProps {
  onGlobalStateChange: Function,
  setGlobalState: Function,
  name: string,
  container: Element,
}
export async function bootstrap() {
  console.log('react app bootstraped');
}

const state = {
  name: 'csc'
}
export async function mount(props: microProps) {
  props.onGlobalStateChange((state: boolean, prev: boolean) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  props.setGlobalState(state);
  ReactDOM.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/micro-react-app' : '/'}>
      <App />
    </BrowserRouter>,
    props.container
    ? props.container.querySelector("#root")
    : document.getElementById("#root")
  );
}
export async function unmount(props: microProps) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') as Element : document.querySelector('#root') as Element);
}
// @ts-ignore
export async function update(props) {
  console.log("update props", props)
}
if (!window.__POWERED_BY_QIANKUN__) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
reportWebVitals();
