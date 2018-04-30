/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/30
 */
import AV from 'leancloud-storage';

const DB_NEWS = 'News'

class API {
  getNowNews = async(option) => {
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
  publishNews = async (data)  => {
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
      const rd = parseInt((Math.random() * 10), 10);
      news.set('userID', '1768244236' + rd);
      news.set('nickName', '曾田生' + rd);
      news.set('headImgUrl', 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png');
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