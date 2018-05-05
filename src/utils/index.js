/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/5/5
 */
export const formatDate = (createdAt) => {
  const time = new Date(createdAt)
  const month = time.getMonth() + 1
  const dd = time.getDate()
  const hh = time.getHours()
  const mm = time.getMinutes()
  return `${month}月${dd}号 ${hh}:${mm}`
}