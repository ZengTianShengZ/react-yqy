/**
 * @desc: 用户页面
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import { Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from 'src/components/dialog'
import asyncComponent from "../../utils/asyncComponent";
import './style.less'

const Tab1Release = asyncComponent(() => import('./tab1-release'))
const Tab2Comment = asyncComponent(() => import('./tab2-comment'))

class Me extends  Component {
  static propTypes = {
    $GET_USER: PropTypes.object
  }
  state = {
    isDialogShow: false,
    tab1Act: true,
    tab2Act: false,
    sectionTopClientHeight: 0,
    fixedTopTabsFlag: false
  }
  listenerTopTabs() {
    let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scroll > this.state.sectionTopClientHeight) {
      this.setState({fixedTopTabsFlag: true})
    } else {
      this.setState({fixedTopTabsFlag: false})
    }
  }
﻿  componentWillMount() {
    if (!this.props.$GET_USER.id) {
      this.props.history.push('/login/');
    }
    this.setTabAct()
  }
  setTabAct() {
    let pathname = window.location.pathname
    if (pathname.indexOf('/app/me/tab2') >=0) {
      this.setState({
        tab1Act: false,
        tab2Act: true
      })
    } else {
      this.setState({
        tab1Act: true,
        tab2Act: false
      })
    }
  }
  btnEditClick() {
   this.setState({isDialogShow: true})
  }
  componentWillReceiveProps() {
    this.setTabAct()
  }
﻿  componentDidMount(){
    setTimeout(() => {
      const J_section_top = document.getElementById('J_section_top')
      if (!J_section_top) {
        return
      }
      const sectionTopClientHeight = J_section_top.clientHeight;
      this.setState({sectionTopClientHeight});
      window.addEventListener('scroll', this.listenerTopTabs.bind(this))
    }, 100)
  }
  render() {
    return (
      <section className="me">
        <section id="J_section_top" className="section-top">
          <div className="bg"></div>
          <div className="content">
            <div className="head f-jb-ac">
              <img className="head-img" src={this.props.$GET_USER.headImgUrl} alt=""/>
              <div className="btn-eid" onClick={this.btnEditClick.bind(this)}>编辑</div>
            </div>
            <div className="name">{this.props.$GET_USER.nickName}</div>
            <div className="text">
              <span>发布 23</span>
              <span className="span-divide">|</span>
              <span>评论 23</span>
            </div>
            <div className="label">
              <span><i className={`i-icon ${this.props.$GET_USER.sex===1?'icon-boy':'icon-girl'}`}></i></span><span>一枝花</span><span>佛系</span><span>四大皆空</span>
            </div>
          </div>
        </section>
        <section className="tabs">
          <div className={`link-tabs f-jc-ac ${this.state.fixedTopTabsFlag?'link-tabs-act':''}`}>
            <Link className="link-t"  to='/app/me/'><span className={`link-span ${this.state.tab1Act?'link-span-act': ''}`}>发布</span></Link>
            <Link className="link-t" to='/app/me/tab2'><span className={`link-span ${this.state.tab2Act?'link-span-act': ''}`}>评论</span></Link>
          </div>
          <div className={`${this.state.fixedTopTabsFlag?'content':''}`}>
            <Switch>
              <Route path="/app/me/tab2/" component={Tab2Comment}></Route>
              <Route path="/app/me/" component={Tab1Release}></Route>
            </Switch>
          </div>
        </section>
        {
          this.state.isDialogShow?(<div onClick={() => {this.setState({isDialogShow: false})}}>
            <Dialog>
              <div className="detail-page-dialog-content">
                <p className="p-text1">功能开发中...</p>
                <p className="p-text1">欢迎提 issue 或 PR 一起完成开发</p>
                <p className="p-text1">如果你是个UI妹子，对该项目感兴趣的话欢迎提供UI，这边全力配合</p>
                <p className="p-text1">如果你是个 Front End Engineer，咱们可以一起探讨项目中遇到的技术问题</p>
                <p className="p-text1">如果你是个 PM ,欢迎对产品提出你宝贵的建议</p>
                <p className="p-text1">项目地址 github：<a href="https://github.com/ZengTianShengZ/react-yqy">react-yqy</a></p>
              </div>
            </Dialog>
          </div>): null
        }
      </section>
    )
  }
}
export default connect(state => ({
  $GET_USER: state.$GET_USER
}), null)(Me)