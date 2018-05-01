/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/27
 */
import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('body')

class Modal extends React.Component {
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
      <div style={{color:red}}>sdjsdk</div>,
      this.el,
    );
  }
}