/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import API from 'src/api'
import Dialog from 'src/components/dialog'
import ListView from 'antd-mobile/lib/list-view';  // 加载 JS
import CommentItem from 'src/components/commentItem';  // 加载 JS
import 'antd-mobile/lib/list-view/style/css';
import './style.less'
import toast from "../../components/toast";

class Details extends Component {
  static propTypes = {
    $GET_USER: PropTypes.object
  }
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 === row2,
    });
    this.state = {
      dataSource,
      isLoading: true,
      isDialogShow: false,
      sendData: {
        pageNum: 7,
        pageSize: 0,
        newsID: this.props.match.params.id
      },
      resData: {
        id: '',
        createdAt: '',
        attributes: {
          listImg: []
        }
      },
      commentMsg: '',
      replyCommentData: [],
      commentData: {
        pageNum: 10,
        pageSize: 0,
        totalCount: 0,
        results: [
          {
            createdAt: '',
            attributes: {
              reply: {}
            }
          }
        ]
      },
      replyData: {}
    };
  }
  async getDetailData() {
    const res = await API.getNewsForId(this.props.match.params.id)
    if (res.success) {
      this.setState({resData: res.data})
    } else {
      toast({msg: res.msg})
    }
  }
  async getComment() {
    const res = await API.getCommentForId(this.state.sendData)
    if (res.success) {
      this.setState({commentData: res.data})
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.commentData.results),
        isLoading: false,
      });
    } else {
      toast({msg: res.msg})
    }
  }
  async getMoreComment() {
    const sendData = this.state.sendData
    sendData.pageSize += 1
    const res = await API.getCommentForId(sendData)
    if (res.success) {
      const commentData = {
        pageNum: 10,
        pageSize: res.data.pageSize,
        totalCount: res.data.totalCount,
        results: [...this.state.commentData.results, ...res.data.results]
      }
      this.setState({commentData})
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([...this.state.commentData.results]),
        isLoading: false,
      });
    } else {
      toast({msg: res.msg})
    }
  }
  handleTextarea(event) {
    let value = event.target.value;
    this.setState({commentMsg: value})
  }
  async btnSubmitClick() {
    if (!this.props.$GET_USER.id) {
      this.props.history.push('/login/')
      return
    }
    const newsID = this.props.match.params.id
    let commentMsg = this.state.commentMsg
    const replyData = this.state.replyData
    if (!commentMsg) {
      return
    }
    if (commentMsg.indexOf(`@${replyData.nickName}:`) === 0) {
      replyData.replyMsg = replyData.commentMsg
      commentMsg = commentMsg.substring(commentMsg.indexOf(':') + 1)
    }
    const res = await API.comment(newsID, commentMsg, replyData, this.props.$GET_USER)
    if (res.success) {
      console.log(res.data)
      toast({msg: res.msg})
      this.setState({commentMsg: ''})
      this.setState({replyCommentData: [...res.data, ...this.state.replyCommentData]})
    } else {
      toast({msg: res.msg})
    }
  }
  commentRowClick(replyData) {
    this.setState({replyData})
    this.setState({isDialogShow: true})
  }
  dialogBtnReplyClick() {
    const {nickName} = this.state.replyData
    this.setState({commentMsg: `@${nickName}:`})
    this.setState({isDialogShow: false})
  }
  onEndReached = (event) => {
    const {pageNum, pageSize, totalCount} = this.state.commentData
    if (totalCount <= (pageNum * pageSize) || this.state.isLoading) {
      return;
    }
    this.setState({ isLoading: true });
    this.getMoreComment()
  }
  componentDidMount() {
    this.getDetailData()
    this.getComment()
  }
  render() {
    const {attributes, createdAt} = this.state.resData
    const header = () => {
      return (
        <div>
          <div className="detail-top">
            <div className="top f-jb-ac">
              <div className="f-js-ac">
                <img className="head-img" src={attributes.headImgUrl} alt=''/>
                <div className="top-left f-js-as-dc">
                  <span className="name">{attributes.nickName}</span>
                  <span className="time">221212</span>
                </div>
              </div>
              <div className="f-je-as-dc top-right">
                <span>福鼎家园·晓风院</span>
                <span>浏览：323233</span>
              </div>
            </div>
            <div className="content-text">{attributes.newsMsg}</div>
            <div className="content-img clear">
              <ul className="clear">
                {
                  attributes.listImg.map((item, index) => {
                    return (<li className="li-img clear" key={index}><img src={item} alt=""/></li>)
                  })
                }
              </ul>
            </div>
          </div>
          <p className="p-title">精彩评论</p>
          {
            this.state.replyCommentData.map((item, index) => {
              return (<CommentItem key={index} item={item}/>)
            })
          }
          <div className="footer f-jb-as">
            <textarea className='textarea' value={this.state.commentMsg} onChange={this.handleTextarea.bind(this)} rows="2" placeholder="写评论"></textarea>
            <div className="btn-submit" onClick={this.btnSubmitClick.bind(this)}>发送</div>
          </div>
          {
            this.state.isDialogShow?(<div onClick={() => {this.setState({isDialogShow: false})}}>
              <Dialog>
              <div className="detail-page-dialog-content">
                <p className="p-text1" onClick={this.dialogBtnReplyClick.bind(this)}>回复评论</p>
                {/*<p>删除评论</p>*/}
              </div>
            </Dialog>
            </div>): null
          }
        </div>
      )
    }
    const row = (rowData, sectionID, rowID) => {
      const {attributes, createdAt} = rowData
      return (
        <div key={rowID} onClick={this.commentRowClick.bind(this, attributes)}>
          <CommentItem item={rowData}/>
        </div>
      );
    };
    const footer = () => {
      const {pageNum, pageSize, totalCount} = this.state.commentData
      if (totalCount <= (pageNum * pageSize)) {
        return null
      } else {
        return (
          <div style={{ padding: 20,marginBottom:40,textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>
        )
      }
    }
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={header}
        renderFooter={footer}
        renderRow={row}
        className="detail"
        pageSize={8}
        useBodyScroll
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
export default connect(state => ({
  $GET_USER: state.$GET_USER
}), null)(Details)