/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import API from 'src/api'
import PullToRefreshView from 'src/components/pullToRefresh'
import ListItemView from 'src/components/listItem'
import pullLoading from "../../components/pullLoading";
import './tab1-release.less'

class Tab1Release extends  Component {
  state = {
    refreshing: true,
    isLoading: true,
    height: document.documentElement.clientHeight,
    useBodyScroll: false,
    resData: {
      results: [
        {
          createdAt: '',
          attributes: {
            listImg: []
          }
        }
      ]
    }
  }
  async getData() {
    pullLoading.loading()
    const res = await API.getNowNews({
      pageNum: 10,
      pageSize: 0,
      userID: '17682442366'
    })
    pullLoading.close()
    if (res.success) {
      this.setState({resData: res.data})
    }
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    const row = () => {
      return (
        <div>
          {
            this.state.resData.results.map((item, index) => {
              return <ListItemView key={index} item={item}/>
            })
          }
        </div>
      )
    }
    return (
      <section className="home">
        <PullToRefreshView
          renderRow={row}
          isFooterLoading={false}/>
      </section>
    )
  }
}
export default Tab1Release