/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {_add} from "../../store/user/action";
import './style.less'

class Me extends  Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
  }
  render() {
    return (
      <section className="home">
        <Link to='/'>home</Link>

        me
      </section>
    )
  }
}
export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Me)