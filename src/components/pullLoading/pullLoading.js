/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import './pullLoading.less'

class PullLoading extends Component {
  render() {
    return (
      <div className="pull-loading">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <circle id="spinner" cx="16" cy="16" r="10" fill="none"></circle>
        </svg>
      </div>
    )
  }
}
export default PullLoading