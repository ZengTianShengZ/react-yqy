/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import { Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {_add} from "../../store/user/action";
import asyncComponent from "../../utils/asyncComponent";
import './style.less'

const Tab1Release = asyncComponent(() => import('./tab1-release'))
const Tab2Comment = asyncComponent(() => import('./tab2-comment'))

class Me extends  Component {
  static propTypes = {
    countTest: PropTypes.object,
    _add: PropTypes.func,
  }
  state = {
    sectionTopClientHeight: 0,
    fixedTopTabsFlag: false
  }
  listtenerTopTabs() {
    // window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    let scroll = document.documentElement.scrollTop
    if (scroll > this.state.sectionTopClientHeight) {
      this.setState({fixedTopTabsFlag: true})
    } else {
      this.setState({fixedTopTabsFlag: false})
    }
  }
﻿  componentDidMount(){
    setTimeout(() => {
      const sectionTopClientHeight = document.getElementById('J_section_top').clientHeight
      this.setState({sectionTopClientHeight})
      window.addEventListener('scroll', this.listtenerTopTabs.bind(this))
    }, 100)
  }
  render() {
    return (
      <section className="me">
        <section id="J_section_top" className="section-top">
          <div className="head f-jb-ac">
            <img className="head-img" src="https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png" alt=""/>
            <div className="btn-eid">编辑</div>
          </div>
          <div className="name">曾田生</div>
          <div className="text">
            <span>发布 23</span>
            <span className="span-divide">|</span>
            <span>评论 23</span>
          </div>
          <div className="label">
            <span>收款</span><span>两份</span><span>四大皆空</span><span>kkdkii</span>
          </div>
        </section>
        <section className="tabs">
          <div className={`link-tabs f-jc-ac ${this.state.fixedTopTabsFlag?'link-tabs-act':''}`}>
            <Link className="link-t"  to='/app/me/'><span className="link-span link-span-act">发布</span></Link>
            <Link className="link-t" to='/app/me/tab2'><span className="link-span">评论</span></Link>
          </div>
          <div className={`${this.state.fixedTopTabsFlag?'content':''}`}>
            <Switch>
              <Route path="/app/me/tab2/" component={Tab2Comment}></Route>
              <Route path="/app/me/" component={Tab1Release}></Route>
            </Switch>
          </div>
        </section>
      </section>
    )
  }
}
export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Me)