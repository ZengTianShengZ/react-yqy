import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from "./utils/asyncComponent";
import './App.less'
const Home = asyncComponent(() => import('./pages/home'))
const Me = asyncComponent(() => import('./pages/me'))

class App extends Component {
    changeRouter(url) {
      this.props.history.push(url);
    }
    render() {
        const isRouterMate = (name) => (window.location.pathname.indexOf(name) > -1)
        return (
          <section className="section-app">
            <BrowserRouter>
              <Switch>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/me" component={Me}></Route>
                <Redirect to="/home"/>
              </Switch>
            </BrowserRouter>
            <footer className="footer">
              <ul className="f-jc-ac">
                <li className={`li-footer f-jc-ac-dc ${isRouterMate('/home')?'active-router':''}`} onClick={this.changeRouter.bind(this, '/home')}>
                  <span className="span-icon icon-home"></span>
                  ﻿<span className="span-text">主页</span>
                </li>
                <li className={`li-footer f-jc-ac-dc ${isRouterMate('/me')?'active-router':''}`} onClick={this.changeRouter.bind(this, '/me')}>
                  <span className="span-icon icon-me"></span>
                  ﻿<span className="span-text">我的</span>
                </li>
              </ul>
            </footer>
          </section>
        );
    }
}
export default App;
