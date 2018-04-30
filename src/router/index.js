/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from 'src/utils/asyncComponent'
import App from 'src/App'
const Details = asyncComponent(() => import('src/pages/details'))
const Publish = asyncComponent(() => import('src/pages/publish'))
const Login = asyncComponent(() => import('src/pages/login'))

export default class RouteConfig extends Component{
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