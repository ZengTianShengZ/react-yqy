/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/22
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import './style.less'

const BOTTOM_DIS = 100

class PullToRefresh extends Component{
  static propTypes = {
    footerMsg: PropTypes.string,
    isFooterLoading: PropTypes.bool,
    renderFooter: PropTypes.func,
    pullToRefresh: PropTypes.func,
    onEndReached: PropTypes.func,
  }
  static defaultProps = {
    isFooterLoading: false,
    footerMsg: '加载更多...'
  }
  state = {
    pullDownFlag: false // 下拉标志
  }
  // constructor(props) {
  //   super(props)
  // }
  scrollListener() {
    if (!this.props.isFooterLoading) {
      return
    }
    let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    const pullRefreshClientHeight = document.querySelector('#J_comp_pull_to_refresh').clientHeight
    const bodyHeight = document.querySelector('body').clientHeight
    console.log(pullRefreshClientHeight)
    if ((scroll + bodyHeight) > (pullRefreshClientHeight - BOTTOM_DIS)) {
      this.props.onEndReached()
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.scrollListener.bind(this))
  }
  render() {
    return (
      <div id="J_comp_pull_to_refresh" className="comp-pull-to-refresh">
        <div className="render-row">
          {
            this.props.renderRow()
          }
        </div>
        <div className="footer-loadding">{this.props.footerMsg}</div>
      </div>
    )
  }
}
export default PullToRefresh