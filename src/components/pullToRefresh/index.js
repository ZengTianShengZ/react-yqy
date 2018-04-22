/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/22
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import './style.less'

class PullToRefresh extends Component{
  static propTypes = {
    isFooterLoading: PropTypes.bool,
    renderFooter: PropTypes.func,
    pullToRefresh: PropTypes.func,
    onEndReached: PropTypes.func,
  }
  state = {
  }
  onTouchMove(e) {
    // e.preventDefault()
    console.log(e.touches[0].pageY)
  }
  render() {
    return (
      <div className="comp-pull-to-refresh" onTouchMove={this.onTouchMove.bind(this)}>
        <div className="heard-loadding">
          <svg viewBox="0 0 32 32" width="32" height="32">
            <circle id="spinner" cx="16" cy="16" r="10" fill="none"></circle>
          </svg>
        </div>
        <div className="render-row">
          {
            this.props.renderRow()
          }
        </div>
        {
          this.props.isFooterLoading ? (
            <div className="footer-loadding">Loading ...</div>
          ) : null
        }
      </div>
    )
  }
}
export default PullToRefresh