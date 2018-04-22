/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/22
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.array
  }
  render() {
    return (
      <div className="comp-list-item">
        <div className="top">
          <img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt="avan"/>
          <div>
            <span className="name">name</span>
            <span className="time"></span>
          </div>
        </div>
        <div className="content">
          <ul>
            <li><img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/></li>
            <li><img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/></li>
            <li><img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default ListItem