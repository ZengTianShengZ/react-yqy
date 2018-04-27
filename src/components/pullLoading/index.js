/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/27
 */
import ReactDOM from 'react-dom';
import React from "react";
import PullLoading from './pullLoading';
const el = document.createElement('div')
document.body.appendChild(el)
const loading = () => {
  const component = React.createElement(PullLoading, null);
  ReactDOM.render(component, el);
}
const close = () => {
  ReactDOM.unmountComponentAtNode(el)
}
export default {
  loading,
  close
}