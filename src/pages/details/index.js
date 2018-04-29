/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {_add} from 'src/store/user/action'
import './style.less'

class Details extends Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
    item: PropTypes.object
  }
  static defaultProps = {
    item: {
      headImg: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      name: '撒大声地',
      msg: '的圣诞节的到来的数量多考虑考虑',
      createTime: '3-23-12',
      listImg: [
        'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png'
      ]
    },
  }
  state = {
    msg: '',
    comment: [1,2,3,4,3]
  }
  btnAddClick() {
    this.props._add(1)
  }
  render() {
    const data = this.props.item
    return (
      <div className="detail">
        <div className="detail-top">
          <div className="top f-jb-ac">
            <div className="f-js-ac">
              <img className="head-img" src={data.headImg} alt="avan"/>
              <div className="top-left f-js-as-dc">
                <span className="name">{data.name}</span>
                <span className="time">{data.createTime}</span>
              </div>
            </div>
            <div className="f-je-as-dc top-right">
              <span>福鼎家园·晓风院</span>
              <span>浏览：323233</span>
            </div>
          </div>
          <div className="content-text">{data.msg}</div>
          <div className="content-img clear">
            <ul className="clear">
              {
                data.listImg.map((item, index) => {
                  return (<li className="li-img clear" key={index}><img src={item} alt=""/></li>)
                })
              }
            </ul>
          </div>
        </div>
        <div className="comment">
          <p className="p-title">精彩评论</p>
          {
            this.state.comment.map((item, index) => {
              return (
                <div className="comment-content" key={index} >
                  <div className="comment-item">
                    <div className="item-top f-js-ac">
                      <img className="head-img" src="https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png" alt=""/>
                      <div className="top-left f-js-as-dc">
                        <span className="name">田生</span>
                        <span className="time">12.12</span>
                      </div>
                    </div>
                    <div className="item-content">
                      <p>电视里上课老师的上课老师的</p>
                      <p className="p-reply"><span className="span-reply-name">@咖啡店</span>说多了都是都是开说多了都离开的考虑离开</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="footer f-jb-as">
          <textarea className='textarea' rows="2" placeholder="写评论">ddsddsdsd</textarea>
          <div className="btn-submit">发送</div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Details)