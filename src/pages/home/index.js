/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
// import { NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import {_add} from 'src/store/user/action'
// import pullLoading from 'src/components/pullLoading'
import toast from 'src/components/toast'
import PullToRefreshView from 'src/components/pullToRefresh'
import ListItemView from 'src/components/listItem'
import './style.less'

class Home extends Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
  }
  state = {
    refreshing: true,
    isFooterLoading: true,
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
  onEndReached() {
    this.setState({isFooterLoading: false})
    console.log('---onEndReached--')
  }
  testClick() {
    // toast({msg: '网络请求出错', duration: 5000})
    toast({msg: '网络请求出错'})
  }
  componentDidMount() {
  }
  componentDidUpdate() {
    document.body.style.overflow = 'auto';
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
        <div onClick={this.testClick.bind(this)}>test click</div>
        <PullToRefreshView
          renderRow={row}
          onEndReached={this.onEndReached.bind(this)}
          isFooterLoading={this.state.isFooterLoading}/>
      </section>
    )
  }
}

export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Home)