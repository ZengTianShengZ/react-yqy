/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import ImagePicker from 'antd-mobile/lib/image-picker';  // 加载 JS
import PropTypes from 'prop-types';
import {_add} from 'src/store/user/action'
import 'antd-mobile/lib/image-picker/style/css';  // 加载 JS

class Pubilsh extends Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
  }
  state = {
    msg: '',
    files: [{
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    }, {
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '2122',
    }],
    multiple: false,
  }
  btnAddClick() {
    this.props._add(1)
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  render() {
    console.log(this.props)
    const { files } = this.state;
    return (
      <div>Pubilsh
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
          multiple={this.state.multiple}
        />
        <div>
          <Link to="/">home</Link>
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
})(Pubilsh)