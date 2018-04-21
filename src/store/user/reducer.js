/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
const defaultState = {
  num: 0
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