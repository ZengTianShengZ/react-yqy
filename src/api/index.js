/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/30
 */
import AV from 'leancloud-storage';
import BaseApi from './baseAPI'
import getUserDefault from 'src/utils/getUserDefault'

const DB_NEWS = 'News'
const DB_COMMENT = 'Comment'
const DB_USER = '_User'

class API extends BaseApi{
  setDefaultUserInfo = async (data) => {
    try {
      const user = AV.Object.createWithoutData(DB_USER, data.userId);
      const {headImgUrl, nickName} = getUserDefault(data.sex)
      user.set('headImgUrl', headImgUrl);
      user.set('nickName', nickName);
      user.set('userName', nickName);
      user.set('sex', data.sex);
      user.set('isFullInfo', 1);
      const res= await user.save();
      if (res.id) {
        return {success: true, msg: ''}
      } else {
        return {success: false, msg: '网络请求出错'}
      }
    } catch (err) {
      console.log(err)
      return {success: false, msg: '服务器错误，请稍后重试'}
    }
  }
  getUserForId = async (id) => {
    try {
      const query = new AV.Query(DB_USER);
      const res = await query.get(id)
      return {success: true, msg: '', data: res}
    } catch (err) {
      console.log(err)
      return {success: false, msg: '服务器错误，请稍后重试'}
    }
  }
  getCommentForId = async (option) => {
    const {pageNum, pageSize, newsID} = option
    try {
      const query = new AV.Query(DB_COMMENT);
      query.equalTo('newsID', newsID);
      query.descending('createdAt');
      query.equalTo('show', 1);
      const resCount = await query.count()
      query.limit(pageNum);// 最多返回 20 条结果
      query.skip(pageNum * pageSize);// 跳过 20 条结果
      const res = await query.find()
      return {
        success: true,
        msg: '',
        data: {
          pageNum,
          pageSize,
          totalCount: resCount,
          results: res
        }
      }
    } catch (err) {
      console.log(err)
      return {success: false, msg: '服务器错误，请稍后重试'}
    }
  }
  comment = async (newsID, commentMsg, reply = {}, user) => {
    //this.isCurrentUser();
    try{
      const Comment = AV.Object.extend(DB_COMMENT)
      const comment = new Comment();
      comment.set('newsID', newsID);
      comment.set('userID', user.id);
      comment.set('nickName', user.nickName);
      comment.set('headImgUrl', user.headImgUrl);
      comment.set('show', 1);
      comment.set('commentMsg', commentMsg);
      comment.set('reply', {
        userID: reply.userID,
        nickName: reply.nickName,
        headImgUrl: reply.headImgUrl,
        replyMsg: reply.replyMsg
      });
      const res= await comment.save()
      if (res.id) {
        return {success: true, msg: '评论成功!'}
      } else {
        return {success: false, msg: '网络请求出错'}
      }
    } catch (err) {
      console.log(err)
      return {success: false, msg: '服务器错误，请稍后重试'}
    }
  }
  getNewsForId = async (id) => {
    try {
      const query = new AV.Query(DB_NEWS);
      const res = await query.get(id)
      return {success: true, msg: '', data: res}
    } catch (err) {
      console.log(err)
      return {success: false, msg: '服务器错误，请稍后重试'}
    }
  }
  getNowNews = async (option) => {
    const {pageNum, pageSize, userID} = option
    try {
      const query = new AV.Query(DB_NEWS);
      // const now = new Date();
      // query.lessThanOrEqualTo('createdAt', now);//查询当前时间之前创建的
      query.descending('createdAt');
      query.equalTo('show', 1);
      if (userID) {
        query.equalTo('userID', userID);
      }
      const resCount = await query.count()
      query.limit(pageNum);// 最多返回 20 条结果
      query.skip(pageNum * pageSize);// 跳过 20 条结果
      const res = await query.find()
      return {
        success: true,
        msg: '',
        data: {
          pageNum,
          pageSize,
          totalCount: resCount,
          results: res
        }
      }
    } catch (err) {
      console.log(err)
      return {success: false, msg: '服务器错误，请稍后重试'}
    }
  }
  publishNews = async (data, user)  => {
    const {files, newsMsg} = data
    const listImg = []
    try {
      for (let i = 0, len = files.length; i < len; i++) {
        let data = {base64: files[i].url};
        let file = new AV.File(`PUBLISH_IMG_${new Date().getTime()}.png`, data);
        const res = await file.save()
        if (!res.url()) {
          return {success: false, msg: '网络请求出错'}
        }
        listImg.push(res.url())
      }
      const News = AV.Object.extend(DB_NEWS)
      const news = new News();
      news.set('userID', user.id);
      news.set('nickName', user.nickName);
      news.set('headImgUrl', user.headImgUrl);
      news.set('show', 1);
      news.set('type', 1);
      news.set('newsMsg', newsMsg);
      news.set('listImg', listImg);
      const resNews = await news.save()
      if (resNews.id) {
        return {success: true, msg: '分享成功!'}
      } else {
        return {success: false, msg: '网络请求出错'}
      }
    } catch (err) {
      console.log(err)
      return {success: false, msg: '服务器错误，请稍后重试'}
    }
  }
}
export default new API();