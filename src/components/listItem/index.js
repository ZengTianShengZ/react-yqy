/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/22
 */
import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import PropTypes from 'prop-types';
import './style.less'

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object
  }
  static defaultProps = {
    item: {
      headImg: '',
      name: '',
      msg: '',
      createTime: '',
      listImg: []
    }
  }
  goDetailsPage() {
    this.props.history.push('/details/');
  }
  render() {
    const data = this.props.item
    const liImg = () => {
      if (data.listImg.length > 3) {
        return (
          <ul className="f-js-ac">
            <li className="li-img"><img src={data.listImg[0]} alt=""/></li>
            <li className="li-img"><img src={data.listImg[1]} alt=""/></li>
            <li className="li-img">
              <div className="more-img">+{data.listImg.length-3}</div>
              <img src={data.listImg[2]} alt=""/>
            </li>
          </ul>
        )
      } else {
        return (
          <ul className="f-js-ac">
            {
              data.listImg.map((item, index) => {
                return (<li className="li-img" key={index}><img src={item} alt=""/></li>)
              })
            }
          </ul>
        )
      }
    }
    return (
      <div className="comp-list-item" onClick={this.goDetailsPage.bind(this)}>
        <div className="top f-js-ac">
          <img className="head-img" src={data.headImg} alt="avan"/>
          <div className="top-left f-js-as-dc">
            <span className="name">{data.name}</span>
            <span className="time">{data.createTime}</span>
          </div>
        </div>
        <div className="content-text">{data.msg}</div>
        <div className="content-img clear">
          {
            liImg()
          }
        </div>
      </div>
    )
  }
}
export default withRouter(ListItem)