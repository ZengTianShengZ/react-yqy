/**
 * @desc: 文件描述  Tab2Comment
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import API from 'src/api'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ListView from 'antd-mobile/lib/list-view';  // 加载 JS
import ListItemView from 'src/components/listItem'
import pullLoading from "../../components/pullLoading";
import toast from "../../components/toast";
import 'antd-mobile/lib/list-view/style/css';
import './tab2-comment.less'

class Tab2Comment extends  Component {
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
        pageNum: 10,
        pageSize: 0,
        userID: this.props.$GET_USER.id
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
    }
  }
  async getMoreData() {
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
    this.getMoreData()
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
      <section className="me-tab2">
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={footer}
          renderRow={row}
          className="list-me-tab"
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
export default connect(state => ({
  $GET_USER: state.$GET_USER
}), null)(Tab2Comment)