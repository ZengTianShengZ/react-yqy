/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.less'

class Toast extends Component {
  static propTypes = {
    msg: PropTypes.string,
    duration: PropTypes.number,
  }
  render() {
    setTimeout(() => {
      console.log('----setTimeout---')
      this.props.closeToast()
    }, this.props.duration || 2000)
    return (
      <div className="comp-toast">
        <ReactCSSTransitionGroup
          transitionName="comp-toast-animaition"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <span className="comp-toast-span">{this.props.msg}</span>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
export default Toast