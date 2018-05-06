/**
 * @desc: action
 * @author: zengtiansheng
 * @update: 2018/4/22
 */
import * as user from './action-type';

export const ACTION_SET_USER = (value) => {
  return {
    type: user.SETUSER,
    value
  }
}