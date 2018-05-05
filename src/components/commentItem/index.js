/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/22
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import './style.less'
class CommentItem extends Component {
  static propTypes = {
    item: PropTypes.object
  }
  static defaultProps = {
    item: {
      createdAt: '',
      attributes: {
        headImgUrl: '',
        nickName: '',
        commentMsg: '',
        reply: {}
      }
    }
  }
  render() {
    const {attributes, createdAt} = this.props.item
    let time =  new Date(createdAt).getTime()
    return (
      <div className="comp-comment-item comment-content">
        <div className="comment-item">
          <div className="item-top f-js-ac">
            <img className="head-img" src={attributes.headImgUrl} alt=""/>
            <div className="top-left f-js-as-dc">
              <span className="name">{attributes.nickName}</span>
              <span className="time">{time}</span>
            </div>
          </div>
          <div className="item-content">
            <p>{attributes.commentMsg}</p>
            {
              attributes.reply.nickName? (<p className="p-reply"><span className="span-reply-name">@{attributes.reply.nickName}</span>{attributes.reply.replyMsg}</p>): ''
            }
          </div>
        </div>
      </div>
    )
  }
}
export default CommentItem