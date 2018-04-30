/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import API from 'src/api'
import ListView from 'antd-mobile/lib/list-view';  // 加载 JS
import 'antd-mobile/lib/list-view/style/css';  // 加载 JS
import './style.less'
import toast from "../../components/toast";

const resultsData = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
]

class Details extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      resData: {
        id: '',
        createdAt: '',
        attributes: {
          listImg: []
        }
      },
      commentMsg: '',
      commentData: {
        results: [
          {
            img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            title: 'Meet hotel',
            des: '不是所有的兼职汪都需要风吹日晒',
          },
          {
            img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            title: 'McDonald\'s invites you',
            des: '不是所有的兼职汪都需要风吹日晒',
          },
          {
            img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            title: 'McDonald\'s invites you',
            des: '不是所有的兼职汪都需要风吹日晒',
          },
          {
            img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            title: 'McDonald\'s invites you',
            des: '不是所有的兼职汪都需要风吹日晒',
          },
          {
            img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            title: 'McDonald\'s invites you',
            des: '不是所有的兼职汪都需要风吹日晒',
          },
          {
            img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            title: 'McDonald\'s invites you',
            des: '不是所有的兼职汪都需要风吹日晒',
          },
          {
            img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            title: 'McDonald\'s invites you',
            des: '不是所有的兼职汪都需要风吹日晒',
          },
          {
            img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
            title: 'Eat the week',
            des: '不是所有的兼职汪都需要风吹日晒',
          },
        ]
      }
    };
  }
  handleTextarea(event) {
    let value = event.target.value;
    this.setState({commentMsg: value})
  }
  async getDetailData() {
    const res = await API.getNewsForId(this.props.match.params.id)
    if (res.success) {
      this.setState({resData: res.data})
    } else {
      toast({msg: res.msg})
    }
  }
  componentDidMount() {
    this.getDetailData()
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.commentData.results),
      isLoading: false,
    });
  }
  onEndReached = (event) => {
    if (this.state.isLoading) {
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([...this.state.commentData.results, ...resultsData]),
        isLoading: false,
      });
    }, 1000);
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
            <div className="btn-submit">发送</div>
          </div>
        </div>
      )
    }
    const row = (rowData, sectionID, rowID) => {
      return (
        <div key={rowID} className="comment-content">
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