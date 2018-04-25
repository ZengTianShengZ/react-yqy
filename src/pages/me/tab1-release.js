/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import PullToRefreshView from 'src/components/pullToRefresh'
import ListItemView from 'src/components/listItem'
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
          headImg: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
          name: '撒大声地',
          msg: '的圣诞节的到来的数量多考虑考虑',
          createTime: '3-23-12',
          listImg: []
        },
        {
          headImg: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
          name: '撒大声地',
          msg: '的圣诞节的到来的数量多考虑考虑',
          createTime: '3-23-12',
          listImg: [
            'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
            'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png'
          ]
        },
        {
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
        {
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
        {
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
        {
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
        {
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
export default Tab1Release