/**
 * 获取角色数据
 * @returns {{upthreestar: *, 注释: string, threestar: *, twostar: *, onestar: *}}
 * @constructor
 */
function CharacterArray () {
  // 读取角色json
  var a = require('../../public/data/pcr.json')
  return a
}

/**
 * 随机角色图片方法
 * @type {{a: {upthreestar: *, 注释: string, threestar: *, twostar: *, onestar: *}, threeSelectImg: (function(): *), twoSelectImg: (function(): *), oneSelectImg: (function(): *), randomNum: (function(): number)}}
 */
var rand = {
  // 读取pcr角色json
  a: require('../../public/data/pcr.json'),
  // 随机数生成方法
  randomNum: function () {
    // [0.100]的随机数
    var x = Math.random() * (100 + 1)
    return x
  },
  // 三星角色图片数组随机挑选
  threeSelectImg: function () {
    // [0.32]的随机整数
    var x = Math.floor(Math.random() * (32 + 1))
    var b = this.a.threestar[x].url
    return b
  },
  // 二星角色图片数组随机挑选
  twoSelectImg: function () {
    // [0.20]的随机整数
    var x = Math.floor(Math.random() * (20 + 1))
    var b = this.a.twostar[x].url
    return b
  },
  // 一星角色图片数组随机挑选
  oneSelectImg: function () {
    // [0.18]的随机整数
    var x = Math.floor(Math.random() * (18 + 1))
    var b = this.a.onestar[x].url
    return b
  }
}

/**
 * 招募对象
 * @type {{Start: Recruit.Start, LastStart: Recruit.LastStart}}
 */
var Recruit = {
  // 前9发概率
  Start: function () {
    var x = rand.randomNum()
    // 三星角色概率为2.5%
    if (x <= 2.5) {
      console.log('3星')
      Recruit.threeRecord++
      return rand.threeSelectImg()
      // 二星角色概率为18%
    } else if (x <= 18 && x > 2.5) {
      console.log('2星')
      Recruit.twoRecord++
      return rand.twoSelectImg()
    } else {
      console.log('1星')
      Recruit.oneRecord++
      return rand.oneSelectImg()
    }
  },
  // 最后第10发的概率
  LastStart: function () {
    var x = rand.randomNum()
    if (x <= 2.5) {
      console.log('3星')
      Recruit.threeRecord++
      return rand.threeSelectImg()
    } else {
      console.log('2星')
      Recruit.twoRecord++
      return rand.twoSelectImg()
    }
  },
  // 记录出货情况
  oneRecord: 0,
  twoRecord: 0,
  threeRecord: 0
}

// 模块抛出
export {
  CharacterArray,
  Recruit,
  rand
}
