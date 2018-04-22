/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
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
        <div>
          <Link to="/">homex</Link>
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