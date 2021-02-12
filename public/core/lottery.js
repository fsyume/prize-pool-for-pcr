// 获取角色数据
function CharacterArray () {
  // 读取角色json
  var a = require('../../public/data/pcr.json')
  return a
}

// 随机数方法
function randomNum () {
  // [0.100]的随机数
  var x = Math.random() * (100 + 1)
  return x
}

// 招募对象
var Recruit = {
  // 前9发概率
  Start: function () {
    var x = randomNum()
    if (x <= 2.5) {
      console.log('3星')
    } else if (x <= 18 && x > 2.5) {
      console.log('2星')
    } else {
      console.log('1星')
    }
    console.log(x)
  },
  // 最后第10发的概率
  LastStart: function () {
    var x = randomNum()
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
