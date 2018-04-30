/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import {User} from 'leancloud-storage';
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
    formData: {
      phone: '',
      verifyCode: '',
      sex: '12'
    }
  }
  handleInput = (type, event) => {
    let value = event.target.value;
    console.log(value)
    switch(type){
      case 'phone':
        this.setState({formData:{phone:value}})
        break;
      case 'verifyCode':
        this.setState({formData:{verifyCode:value}})
        break;
      case 'sex':
        this.setState({formData:{sex:value}})
        break;
      default:;
    }
  }
  render() {
    return (
      <section className="login">
        <div className="top">
          <img className="logo" src="https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png" alt=""/>
        </div>
        <div className="content">
          <div className="form-tiem f-js-as">
            <span className="span-icon ion-android-phone-portrait"></span>
            <input className="input input-phone" type="text" maxLength="11" placeholder="手机号（新号码将自动注册）" value={this.state.formData.phone}
                   onChange={this.handleInput.bind(this, 'phone')}/>
          </div>
          <div className="form-tiem f-js-as">
            <span className="span-icon ion-android-mail"></span>
            <input className="input input-verify-code" type="text" maxLength="8" placeholder="请输入验证码" value={this.state.formData.verifyCode}
                   onChange={this.handleInput.bind(this, 'verifyCode')}/>
            <span>获取验证码</span>
          </div>
          <div className='form-tiem'>
            新用户注册请选择性别，将为您分配花名
            <div className="f-js-as form-radio">
              <div className="form-radio-part1">
                <input type="radio" name="sex" value={this.state.formData.sex} onChange={this.handleInput.bind(this, 'sex')} checked/>
                <span className="form-radio-icon ion-android-person"></span>
              </div>
              <div>
                <input type="radio" name="sex" value={this.state.formData.sex} onChange={this.handleInput.bind(this, 'sex')}/>
                <span className="form-radio-icon ion-android-contact"></span>
              </div>
            </div>
          </div>
          <div className="btn-login">登录</div>
        </div>
        <p className="p-agreement">登录注册代表您已同意 <span>《用户协议》</span></p>
      </section>
    )
  }
}

export default connect(state => ({
  countTest: state.countTest
}), {
  _add
})(Login)