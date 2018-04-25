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
  render() {
    return (
      <section className="me">
        <section className="section-top">
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
          <div className="link-tabs f-jc-ac">
            <Link className="link-t"  to='/app/me/'><span className="link-span link-span-act">发布</span></Link>
            <Link className="link-t" to='/app/me/tab2'><span className="link-span">评论</span></Link>
          </div>
          <Switch>
            <Route path="/app/me/tab2/" component={Tab2Comment}></Route>
            <Route path="/app/me/" component={Tab1Release}></Route>
          </Switch>
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