/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import ImagePicker from 'antd-mobile/lib/image-picker';  // 加载 JS
import AV from 'leancloud-storage';
import PropTypes from 'prop-types';
import toast from 'src/components/toast'
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
    const newsMsg = this.state.newsMsg
    if (!newsMsg) {
      return
    }
    const files = this.state.files
    const listImg = []
    try {
      for (let i = 0, len = files.length; i < len; i++) {
        let data = {base64: files[i].url};
        let file = new AV.File(`PUBLISH_IMG_${new Date().getTime()}.png`, data);
        const res = await file.save()
        if (!res.url()) {
          toast({msg: '网络请求出错'})
          return
        }
        listImg.push(res.url())
      }
      const News = AV.Object.extend('News')
      const news = new News();
      const rd = parseInt((Math.random() * 10), 10);
      news.set('userID', '1768244236' + rd);
      news.set('nickName', '曾田生' + rd);
      news.set('headImgUrl', 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png');
      news.set('show', '1');
      news.set('type', '1');
      news.set('newsMsg', newsMsg);
      news.set('listImg', listImg);
      const resNews = await news.save()
      if (resNews.id) {
        toast({msg: '分享成功！'})
      } else {
        toast({msg: '网络请求出错'})
      }
    } catch (err) {
      console.log(err)
      toast({msg: '服务器错误，请稍后重试'})
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
  countTest: state.countTest
}), {
  _add
})(Pubilsh)