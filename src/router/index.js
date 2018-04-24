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

export default class RouteConfig extends Component{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/publish" component={Publish}></Route>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    )
  }
}