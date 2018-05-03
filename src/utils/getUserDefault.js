/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/30
 */
const defAva = [
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-1.png',
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-2.png',
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-3.png',
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-4.png',
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-5.png',
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-6.png',
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-3.png',
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-4.png',
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-5.png',
  'http://oyn5he3v2.bkt.clouddn.com/ava/ava-6.png'
]
const defBoyName = ['刘备', '玄德', '诸葛亮', '孔明', '关羽', '云长', '张飞', '益德', '赵云', '子龙', '孙乾', '公佑', '糜竺', '马谡', '幼常',
  '蒋琬', '公琰', '刘禅', '公嗣', '孙权', '仲谋', '孙坚', '文台', '孙策', '伯符', '程普', '德谋', '黄盖', '公覆', '韩当', '义公', '祖茂',
  '曹操', '孟德', '乐进', '文谦', '李典', '曼成', '曹仁', '子孝', '曹洪', '子廉', '夏侯敦', '元让', '夏侯渊']
const defGirlName = ['林黛玉', '薛宝钗', '贾元春', '贾迎春', '贾探春', '贾惜春', '李纨', '妙玉', '史湘云', '王熙凤', '贾巧姐', '秦可卿', '晴雯', '麝月',
  '袭人', '鸳鸯', '雪雁', '紫鹃', '碧痕', '平儿', '香菱', '金钏', '司棋', '抱琴', '刘姥姥']
const getDef = (sex = 1) => {
  let nickName = ''
  const headImgUrl = defAva[parseInt(Math.random() * 10, 10)]
  if (sex === 1) { // boy
    nickName = defBoyName[parseInt(Math.random() * 45, 10)]
  } else { // girl
    nickName = defGirlName[parseInt(Math.random() * 25, 10)]
  }
  return {headImgUrl, nickName}
}

export default getDef