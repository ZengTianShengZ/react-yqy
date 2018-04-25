/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import {_add} from 'src/store/user/action'

class Details extends Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
  }
  state = {
    msg: ''
  }
  btnAddClick() {
    this.props._add(1)
  }
  render() {
    console.log(this.props)
    return (
      <div>Details
        ﻿<Switch>
          <Route exact path="/details" render={() => <h1>details/</h1>}/>
          <Route path="/details/c2" render={() => <h1>details/c2/</h1>}/>
        </Switch>
        <div>
          <Link to="/">homex</Link>
          <Link to="/details">/details</Link>
          <Link to="/details/c2">/details/c2</Link>
        </div>
        <p>{this.props.countTest.num}</p>
        <button onClick={this.btnAddClick.bind(this)}>_add</button>
      </div>
    )
  }
}

export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Details)