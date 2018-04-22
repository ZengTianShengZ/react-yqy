/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/22
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import './style.less'

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.array
  }
  render() {
    return (
      <div className="comp-list-item">
        <div className="top f-js-ac">
          <img className="head-img" src="https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png" alt="avan"/>
          <div className="top-left f-js-as-dc">
            <span className="name">name</span>
            <span className="time">今天 23：23</span>
          </div>
        </div>
        <div className="content-text">萨克斯经济萨加上扣扣空间</div>
        <div className="content-img clear">
          <ul className="f-jc-ac">
            <li className="li-img"><img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/></li>
            <li className="li-img"><img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/></li>
            <li className="li-img">
              <div className="more-img">+3</div>
              <img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default ListItem