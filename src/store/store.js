/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as user from './user/reducer'
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({...user}),
  applyMiddleware(thunk)
)
export default  store