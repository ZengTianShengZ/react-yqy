/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/27
 */
import ReactDOM from 'react-dom';
import React from "react";
import Toast from './toast';
const el = document.createElement('div')
document.body.appendChild(el)
const show = (props = {}) => {
  console.log(props)
  const component = React.createElement(Toast, Object.assign(props, {
    closeToast: () => {
      ReactDOM.unmountComponentAtNode(el)
    }
  }));
  ReactDOM.render(component, el);
}

export default show