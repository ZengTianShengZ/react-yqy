/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import {_add} from 'src/store/user/action'
import PullToRefreshView from 'src/components/pullToRefresh'
import ListItemView from 'src/components/listItem'
import './style.less'

class Home extends Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
    }
  }
  componentDidMount() {
  }
  componentDidUpdate() {
    document.body.style.overflow = 'auto';
  }
  render() {
    const row = () => {
      return (
       <div>
         <ListItemView/>
         <ListItemView/>
       </div>
      )
    }
    return (
      <section className="home">
        <section>
          <PullToRefreshView
            renderRow={row}
            isFooterLoading={false}/>
        </section>
        <footer className="footer">
          <ul className="f-jc-ac">
            <li className="li-footer f-jc-ac-dc">
              <span className="span-icon"></span>
              ﻿ <NavLink to="/" exact activeClassName="active">home</NavLink>
            </li>
            <li className="li-footer f-jc-ac-dc">
              <span className="span-icon"></span>
              ﻿ <NavLink to="/me" exact activeClassName="active">me</NavLink>
            </li>
          </ul>
        </footer>
      </section>
    )
  }
}

export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Home)