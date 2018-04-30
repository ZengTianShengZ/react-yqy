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
      createdAt: '',
      attributes: {
        headImgUrl: '',
        nickName: '',
        newsMsg: '',
        createdAt: '',
        listImg: []
      }
    }
  }
  goDetailsPage(id) {
    this.props.history.push('/details/' + id);
  }
  render() {
    const {attributes, createdAt, id} = this.props.item
    let time = ''
    if (createdAt) {
      time = new Date(createdAt).getTime()
    }
    const liImg = () => {
      if (attributes.listImg.length > 3) {
        return (
          <ul className="f-js-ac">
            <li className="li-img"><img src={attributes.listImg[0]} alt=""/></li>
            <li className="li-img"><img src={attributes.listImg[1]} alt=""/></li>
            <li className="li-img">
              <div className="more-img">+{attributes.listImg.length-3}</div>
              <img src={attributes.listImg[2]} alt=""/>
            </li>
          </ul>
        )
      } else {
        return (
          <ul className="f-js-ac">
            {
              attributes.listImg.map((item, index) => {
                return (<li className="li-img" key={index}><img src={item} alt=""/></li>)
              })
            }
          </ul>
        )
      }
    }
    return (
      <div className="comp-list-item" onClick={this.goDetailsPage.bind(this, id)}>
        <div className="top f-js-ac">
          <img className="head-img" src={attributes.headImgUrl} alt=''/>
          <div className="top-left f-js-as-dc">
            <span className="name">{attributes.nickName}</span>
            <span className="time">{time}</span>
          </div>
        </div>
        <div className="content-text">{attributes.newsMsg}</div>
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