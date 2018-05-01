/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import API from 'src/api'
import Dialog from 'src/components/dialog'
import ListView from 'antd-mobile/lib/list-view';  // 加载 JS
import 'antd-mobile/lib/list-view/style/css';  // 加载 JS
import './style.less'
import toast from "../../components/toast";

class Details extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      isDialogShow: false,
      resData: {
        id: '',
        createdAt: '',
        attributes: {
          listImg: []
        }
      },
      commentMsg: '',
      commentData: {
        pageNum: 10,
        pageSize: 0,
        totalCount: '',
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
    const res = await API.getCommentForId({
      pageNum: 10,
      pageSize: 0,
      newsID: this.props.match.params.id
    })
    if (res.success) {
      // this.mData =
      this.setState({commentData: res.data})
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.commentData.results),
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
    const res = await API.comment(newsID, commentMsg, replyData)
    if (res.success) {
      this.setState({commentMsg: ''})
      toast({msg: res.msg})
      this.getComment()
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
    if (this.state.isLoading) {
      return;
    }
    this.setState({ isLoading: true });
    // setTimeout(() => {
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows([...this.state.commentData.results, ...resultsData]),
    //     isLoading: false,
    //   });
    // }, 1000);
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
          <div className="footer f-jb-as">
            <textarea className='textarea' value={this.state.commentMsg} onChange={this.handleTextarea.bind(this)} rows="2" placeholder="写评论"></textarea>
            <div className="btn-submit" onClick={this.btnSubmitClick.bind(this)}>发送</div>
          </div>
          {
            this.state.isDialogShow?(<div onClick={() => {this.setState({isDialogShow: false})}}>
              <Dialog>
              <div className="detail-page-dialog-content">
                <p className="p-text1" onClick={this.dialogBtnReplyClick.bind(this)}>回复评论</p>
                <p>删除评论</p>
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
        <div key={rowID} className="comment-content" onClick={this.commentRowClick.bind(this, attributes)}>
          <div className="comment-item">
            <div className="item-top f-js-ac">
              <img className="head-img" src={attributes.headImgUrl} alt=""/>
              <div className="top-left f-js-as-dc">
                <span className="name">{attributes.nickName}</span>
                <span className="time">12221112</span>
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
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={header}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        className="detail"
        pageSize={8}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default Details