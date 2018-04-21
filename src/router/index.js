/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from 'src/utils/asyncComponent'
import Home from 'src/pages/home'
const Me = asyncComponent(() => import('src/pages/me'))

export default class RouteConfig extends Component{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/me" component={Me}></Route>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    )
  }
}