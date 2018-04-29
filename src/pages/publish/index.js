/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import ImagePicker from 'antd-mobile/lib/image-picker';  // 加载 JS
import PropTypes from 'prop-types';
import {_add} from 'src/store/user/action'
import 'antd-mobile/lib/image-picker/style/css';  // 加载 JS
import './style.less'

class Pubilsh extends Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
  }
  state = {
    msg: '',
    commentMsg: '',
    files: [{
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    }, {
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '2122',
    }],
    multiple: false,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  handleTextarea(event) {
    let value = event.target.value;
    this.setState({commentMsg: value})
  }
  render() {
    const { files } = this.state;
    return (
      <section className="publish">
        <textarea className='textarea' value={this.state.commentMsg} onChange={this.handleTextarea.bind(this)} rows="6" placeholder="方圆两公里，分享身边事"></textarea>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 9}
          multiple={this.state.multiple}
        />
        <div className="btn-submit">分享</div>
      </section>
    )
  }
}

export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Pubilsh)