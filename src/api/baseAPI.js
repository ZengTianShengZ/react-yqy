/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/5/2
 */
import AV from 'leancloud-storage';

class BaseApi {
  isCurrentUser() {
    const currentUser = AV.User.current();
    if (!currentUser) {
      // 跳转到首页
      return
    }
  }
  async tc(fun) {
    try {
      await fun
    } catch (err) {
      console.log(err)
      return {success: false, msg: '服务器错误，请稍后重试'}
    }
  }
}
export default BaseApi