// 获取角色数据
function CharacterArray () {
  // 读取角色json
  var a = require('../../public/data/pcr.json')
  return a
}

// 随机数方法
var rand = {
  randomNum: function () {
    // [0.100]的随机数
    var x = Math.random() * (100 + 1)
    return x
  },
  threeSelectImg: function () {
    // [0.1]的随机整数
    var x = Math.floor(Math.random() * (1 + 1))
    return x
  }
}

// 招募对象
var Recruit = {
  // 前9发概率
  Start: function () {
    var x = rand.randomNum()
    if (x <= 2.5) {
      console.log('3星')
      return rand.threeSelectImg()
    } else if (x <= 18 && x > 2.5) {
      console.log('2星')
      return rand.threeSelectImg()
    } else {
      console.log('1星')
      return rand.threeSelectImg()
    }
  },
  // 最后第10发的概率
  LastStart: function () {
    var x = rand.randomNum()
    if (x <= 2.5) {
      console.log('3星')
    } else {
      console.log('2星')
    }
    console.log('第10次', x)
    console.log(CharacterArray())
  }
}

// 模块抛出
export {
  CharacterArray,
  Recruit
}
