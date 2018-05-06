/**
 * @desc: 登录页面
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import AV from 'leancloud-storage';
import PropTypes from 'prop-types';
import API from 'src/api'
import toast from 'src/components/toast'
import {ACTION_SET_USER} from 'src/store/user/action'
import './style.less'

class Login extends Component {
  static propTypes = {
    ACTION_SET_USER: PropTypes.func.isRequired
  }
  state = {
    msg: '',
    isFullInfo: true,
    formData: {
      phone: '17682442366',
      verifyCode: '793550',
      sex: 0
    }
  }
  handleInput = (type, event) => {
    let value = event.target.value;
    let formData = {...this.state.formData};
    switch(type){
      case 'phone':
        formData.phone = value
        break;
      case 'verifyCode':
        formData.verifyCode = value
        break;
      case 'sex':
        formData.sex = parseInt(value, 10)
        break;
      default:
        return;
    }
    this.setState({formData})
  }
  btnGetVerifyCode() {
    const {phone} = this.state.formData
    AV.Cloud.requestSmsCode(phone).then(function (success) {
      console.log(success)
    }, function (error) {
      console.log(error)
    });
  }
  async btnLoginClick() {
    const {phone, verifyCode, sex} = this.state.formData
    let userId = ''
    if (!this.state.isFullInfo) {
      if (sex === 0) {
        toast({msg: '首次登陆，请选择性别'})
      } else {
        this.fullInfomation(userId, sex)
      }
      return
    }
    try {
      const res = await AV.User.signUpOrlogInWithMobilePhone(phone, verifyCode)
      userId = res.id
      if (!userId) {
        toast({msg: '登录出错'})
        return
      }
      const resUser = await API.getUserForId(userId)
      if (resUser.success) {
        if (resUser.data.attributes.isFullInfo) {
          toast({msg: '登录成功'})
          this.props.ACTION_SET_USER()
          this.props.history.goBack();
        } else {
          if (sex === 0) {
            this.setState({isFullInfo: false})
            toast({msg: '首次登陆，请选择性别'})
          } else {
            this.fullInfomation(userId, sex)
          }
        }
      } else {
        toast({msg: '登录出错'})
      }
    } catch (err) {
      console.log(err)
      toast({msg: '登录失败,请验证手机号或验证码是否正确'})
    }
  }
  async fullInfomation(userId, sex) {
    const res = await API.setDefaultUserInfo({userId, sex})
    if (res.success) {
      this.props.ACTION_SET_USER()
      this.props.history.goBack()
    } else {
      toast({msg: res.msg || '登录出错'})
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
            <span onClick={this.btnGetVerifyCode.bind(this)}>获取验证码</span>
          </div>
          <div className='form-tiem'>
            新用户注册请选择性别，将为您分配花名
            <div className="f-js-as form-radio" onChange={this.handleInput.bind(this, 'sex')}>
              <div className="form-radio-part1">
                <input type="radio" name="sex" value="1"/>
                <span className="form-radio-icon ion-android-person"></span>
              </div>
              <div>
                <input type="radio" name="sex" value="2"/>
                <span className="form-radio-icon ion-android-contact"></span>
              </div>
            </div>
          </div>
          <div className="btn-login" onClick={this.btnLoginClick.bind(this)}>登录</div>
        </div>
        <p className="p-agreement">登录注册代表您已同意 <span>《用户协议》</span></p>
      </section>
    )
  }
}

export default connect(null, {
  ACTION_SET_USER
})(Login)
