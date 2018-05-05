/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import { Link} from 'react-router-dom'
import API from 'src/api'
import pullLoading from 'src/components/pullLoading'
import toast from 'src/components/toast'
import ListView from 'antd-mobile/lib/list-view';  // 加载 JS
import ListItemView from 'src/components/listItem'
import 'antd-mobile/lib/list-view/style/css';
import './style.less'

class Home extends Component {
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
        pageNum: 10,
        pageSize: 0,
        newsID: this.props.match.params.id
      },
      resData: {
        pageNum: 10,
        pageSize: 0,
        totalCount: 0,
        results: [
          {
            id: '',
            createdAt: '',
            attributes: {
              listImg: []
            }
          }
        ]
      }
    }
  }
  async getData() {
    pullLoading.loading()
    const res = await API.getNowNews(this.state.sendData)
    pullLoading.close()
    if (res.success) {
      this.setState({resData: res.data})
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.resData.results),
        isLoading: false,
      });
    } else {
      toast({msg: res.msg})
    }
  }
  async getMoreNews() {
    const sendData = this.state.sendData
    sendData.pageSize += 1
    const res = await API.getNowNews(sendData)
    if (res.success) {
      const resData = {
        pageNum: 10,
        pageSize: res.data.pageSize,
        totalCount: res.data.totalCount,
        results: [...this.state.resData.results, ...res.data.results]
      }
      this.setState({resData})
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.resData.results),
        isLoading: false,
      });
    } else {
      toast({msg: res.msg})
    }
  }
  onEndReached = (event) => {
    const {pageNum, pageSize, totalCount} = this.state.resData
    if (totalCount <= (pageNum * pageSize) || this.state.isLoading) {
      return;
    }
    this.setState({ isLoading: true });
    this.getMoreNews()
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    const row = (rowData, sectionID, rowID) => {
      return (
        <ListItemView key={rowID} item={rowData}/>
      );
    };
    const footer = () => {
      const {pageNum, pageSize, totalCount} = this.state.resData
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
      <section className="home">
        <Link to="/publish" className="btn-publish"><img src="http://oyn5he3v2.bkt.clouddn.com/add_icon_1121.png" alt=""/></Link>
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={footer}
          renderRow={row}
          className="list-home"
          pageSize={8}
          useBodyScroll
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </section>
    )
  }
}

export default Home