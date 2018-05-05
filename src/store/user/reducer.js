/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import AV from 'leancloud-storage';
import * as user from './action-type';

const defaultState = {
  id: '',
  headImgUrl: '',
  isFullInfo: '',
  mobilePhoneNumber: '',
  mobilePhoneVerified: '',
  nickName: '',
  sex: '',
  userName: '',
  username: ''
}
export const countTest = (state = defaultState, action = {}) => {
  switch (action.type) {
    case '_ADD':
      console.log(state)
      console.log(action)
      const num = state.num +  action.value
      return {...state, ...{num}}
    default:
      return state
  }
}

export const $GET_USER = (state = defaultState, action ={}) => {
  switch (action.type) {
    case user.SETUSER:
      console.log('---$GET_USER---')
      if (AV.User.current()) {
        const {id, attributes} = AV.User.current();
        return {...state, ...attributes, ...{id}};
      } else {
        return state
      }
    default:
      return state
  }
}
