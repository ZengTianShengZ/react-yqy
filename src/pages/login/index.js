/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {_add} from 'src/store/user/action'
import './style.less'

class Login extends Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
  }
  state = {
    msg: '',
  }
  render() {
    return (
      <section className="login">
      </section>
    )
  }
}

export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Login)