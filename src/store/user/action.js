/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/22
 */
import * as user from './action-type';

export const _add = (value) => {
  return {
    type: '_ADD',
    value
  }
}
export const ACTION_SET_USER = (value) => {
  return {
    type: user.SETUSER,
    value
  }
}