/**
 * @desc: 页面路由
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import asyncComponent from 'src/utils/asyncComponent'
import App from 'src/App'
import {ACTION_SET_USER} from "../store/user/action";
const Details = asyncComponent(() => import('src/pages/details'))
const Publish = asyncComponent(() => import('src/pages/publish'))
const Login = asyncComponent(() => import('src/pages/login'))

class RouteConfig extends Component{
  static propTypes = {
    ACTION_SET_USER: PropTypes.func.isRequired,
  }
﻿  componentWillMount() {
    this.props.ACTION_SET_USER()
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/app" component={App}></Route>
          <Route path="/details/:id" component={Details}></Route>
          <Route path="/publish" component={Publish}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/app"/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default connect(null, {
  ACTION_SET_USER
})(RouteConfig)
