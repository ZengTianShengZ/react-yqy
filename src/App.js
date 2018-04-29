import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from "./utils/asyncComponent";
import './App.less'
const Home = asyncComponent(() => import('./pages/home'))
const Me = asyncComponent(() => import('./pages/me'))

class App extends Component {
    static = {
      pathname: '123'
    }
    changeRouter(url) {
      this.props.history.push(url);
    }
    componentWillMount() {
      this.setState({
        pathname: '223232' // window.location.pathname
      })
    }
    render() {
        const isRouterMate = (name) => (window.location.pathname.indexOf(name) > -1)
        console.log(window.location.pathname)
        return (
          <section className="section-app">
            <Switch>
              <Route path="/app/me/" component={Me}></Route>
              <Route path="/app/" component={Home}></Route>
            </Switch>
            <footer className="footer">
              <ul className="f-jc-ac">
                <li className={`li-footer f-jc-ac-dc ${this.static.pathname}`} onClick={this.changeRouter.bind(this, '/app/')}>
                  <span className="span-icon icon-home"></span>
                  ﻿<span className="span-text">主页</span>
                </li>
                <li className={`li-footer f-jc-ac-dc ${isRouterMate('/me')?'active-router':''}`} onClick={this.changeRouter.bind(this, '/app/me/')}>
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
