/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import Toast from 'antd-mobile/lib/toast';
import ImagePicker from 'antd-mobile/lib/image-picker';  // 加载 JS
import PropTypes from 'prop-types';
import toast from 'src/components/toast'
import API from 'src/api'
import 'antd-mobile/lib/image-picker/style/css';
import 'antd-mobile/lib/toast/style/css';
import './style.less'

class Pubilsh extends Component {
  static propTypes = {
    $GET_USER: PropTypes.object
  }
  state = {
    msg: '',
    newsMsg: '',
    files: [],
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
    this.setState({newsMsg: value})
  }
  async btnShareClick() {
    if (!this.props.$GET_USER.id) {
      this.props.history.push('/login/')
      return
    }
    const newsMsg = this.state.newsMsg
    if (!newsMsg) {
      return
    }
    Toast.loading('发布中...', 50, null, true)
    const files = this.state.files
    const res = await API.publishNews({newsMsg, files}, this.props.$GET_USER)
    if (res.success) {
      Toast.hide();
      toast({msg: res.msg})
      this.props.history.push('/app/');
    }
  }
  render() {
    const {files} = this.state;
    return (
      <section className="publish">
        <textarea className='textarea' value={this.state.newsMsg} onChange={this.handleTextarea.bind(this)} rows="6" placeholder="方圆两公里，分享身边事"></textarea>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 9}
          multiple={this.state.multiple}
        />
        <div className="btn-submit" onClick={this.btnShareClick.bind(this)}>分享</div>
      </section>
    )
  }
}

export default connect(state => ({
  $GET_USER: state.$GET_USER
}), null)(Pubilsh)