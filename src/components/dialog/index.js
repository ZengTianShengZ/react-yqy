/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/27
 */
import ReactDOM from 'react-dom';
import React, {Component} from "react";
import './style.less'
const modalRoot = document.querySelector('body')

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="comp-dialog">
        {
          this.props.children
        }
        </div>,
      this.el,
    );
  }
}
export default Modal