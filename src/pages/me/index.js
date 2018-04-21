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

class Me extends  Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div>me
        <div>
          <Link to="/">home</Link>
          <p>{this.props.countTest.num}</p>
        </div>
      </div>
    )
  }
}
export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Me)