/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import {_add} from 'src/store/user/action'
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
        <section>
          <PullToRefreshView
            renderRow={row}
            isFooterLoading={false}/>
        </section>
        {/*﻿<NavLink to="/app" exact activeClassName="active">Home</NavLink>*/}
        <footer className="footer">
          <ul className="f-jc-ac">
            <li className="li-footer f-jc-ac-dc">
              <span className="span-icon icon-home"></span>
              ﻿<span className="span-text">主页</span>
            </li>
            <li className="li-footer f-jc-ac-dc">
              <span className="span-icon icon-me"></span>
              ﻿<span className="span-text">我的</span>
            </li>
          </ul>
        </footer>
      </section>
    )
  }
}

export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Home)