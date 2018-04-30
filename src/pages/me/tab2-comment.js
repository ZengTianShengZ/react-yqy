/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import PullToRefreshView from 'src/components/pullToRefresh'
import ListItemView from 'src/components/listItem'
import './tab2-comment.less'

class Tab2Comment extends  Component {
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
export default Tab2Comment