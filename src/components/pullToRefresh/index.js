/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/22
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import './style.less'

const PULL_DOWN_DIS = 100
const PULL_DOWN_DIS_DEF = -20

class PullToRefresh extends Component{
  static propTypes = {
    isFooterLoading: PropTypes.bool,
    renderFooter: PropTypes.func,
    pullToRefresh: PropTypes.func,
    onEndReached: PropTypes.func,
  }
  state = {
    pullDownFlag: false // 下拉标志
  }
  constructor(props) {
    super(props)
    this.touchStartPayeY = 0
  }
  onTouchMove = (e) => {
    let scroll = document.documentElement.scrollTop
    //e.touches[0].pageY
  }
  onTouchStart = (e) => {
  }
  onTouchEnd = (e) => {
  }
  scrollListener() {
    let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    const sectionTopClientHeight = document.querySelector('#J_comp_pull_to_refresh').clientHeight
    const bodyClientHeight = document.querySelector('body').clientHeight

    console.log('---scroll--', scroll + bodyClientHeight)
    console.log('---sectionTopClientHeight--', sectionTopClientHeight)

  }
  componentDidMount(){
    window.addEventListener('scroll', this.scrollListener.bind(this))
  }
  render() {
    return (
      <div id="J_comp_pull_to_refresh" className="comp-pull-to-refresh" onTouchMove={this.onTouchMove} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
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