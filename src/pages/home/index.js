/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {_add} from 'src/store/user/action'
import API from 'src/api'
import pullLoading from 'src/components/pullLoading'
import toast from 'src/components/toast'
import PullToRefreshView from 'src/components/pullToRefresh'
import ListItemView from 'src/components/listItem'
import './style.less'

class Home extends Component {
  static propTypes = {
    countTest: PropTypes.object.isRequired,
    _add: PropTypes.func.isRequired,
  }
  state = {
    refreshing: true,
    isFooterLoading: false,
    height: document.documentElement.clientHeight,
    useBodyScroll: false,
    resData: {
      results: [
        {
          id: '',
          createdAt: '',
          attributes: {
            listImg: []
          }
        }
      ]
    }
  }
  onEndReached() {
    this.setState({isFooterLoading: false})
    console.log('---onEndReached--')
  }
  testClick() {
    // toast({msg: '网络请求出错', duration: 5000})
    toast({msg: '网络请求出错'})
  }
  async getData() {
    pullLoading.loading()
    const res = await API.getNowNews({
      pageNum: 10,
      pageSize: 0
    })
    pullLoading.close()
    if (res.success) {
      this.setState({resData: res.data})
    } else {
      toast({msg: res.msg})
    }
  }
  componentDidMount() {
    this.getData()
  }
  componentDidUpdate() {
    //document.body.style.overflow = 'auto';
  }
  render() {
    const row = () => {
      return (
        <div>
          {
            this.state.resData.results.map((item, index) => {
              return <ListItemView key={index} item={item}/>
            })
          }
        </div>
      )
    }
    return (
      <section className="home">
        <Link to="/publish" className="btn-publish"><img src="btn-publish-icon.png" alt=""/></Link>
        <PullToRefreshView
          renderRow={row}
          onEndReached={this.onEndReached.bind(this)}
          isFooterLoading={this.state.isFooterLoading}/>
      </section>
    )
  }
}

export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Home)