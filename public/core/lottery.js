import axios from '_axios@0.21.1@axios'
// 获取角色数据
async function CharacterArray () {
  var a
  await axios.get('/data/pcr.json').then(function (res) {
    a = res.data
  })
  return a
}

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
  }
}

// 模块抛出
export {
  CharacterArray,
  Recruit
}
