import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from "./utils/asyncComponent";
import './App.less'
const Home = asyncComponent(() => import('./pages/home'))
const Me = asyncComponent(() => import('./pages/me'))

class App extends Component {
    state = {
      tab1Act: true,
      tab2Act: false,
    }
    changeRouter(url) {
      this.props.history.push(url);
    }
    setTabAct() {
      let pathname = window.location.pathname
      if (pathname.indexOf('/app/me/') >=0) {
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
﻿    componentWillMount() {
      this.setTabAct()
    }
    componentWillReceiveProps() {
      this.setTabAct()
    }
    render() {
        return (
          <section className="section-app">
            <Switch>
              <Route path="/app/me/" component={Me}></Route>
              <Route path="/app/" component={Home}></Route>
            </Switch>
            <footer className="footer">
              <ul className="f-jc-ac">
                <li className={`li-footer f-jc-ac-dc ${this.state.tab1Act?'active-router':''}`} onClick={this.changeRouter.bind(this, '/app/')}>
                  <span className="span-icon icon-home"></span>
                  ﻿<span className="span-text">主页</span>
                </li>
                <li className={`li-footer f-jc-ac-dc ${this.state.tab2Act?'active-router':''}`} onClick={this.changeRouter.bind(this, '/app/me/')}>
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
