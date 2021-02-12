import axios from '_axios@0.21.1@axios'
// 获取角色数据
async function CharacterArray () {
  await axios.get('/data/pcr.json').then(function (res) {
    console.log(res.data)
  })
}

function randomNum () {
  // [0.100]的随机数
  var x = Math.random() * (100 + 1)
  return x
}

function Start () {
  var x = randomNum()
  if (x <= 2.5) {
    console.log('3星')
  } else if (x <= 18 && x > 2.5) {
    console.log('2星')
  } else {
    console.log('1星')
  }
  console.log(x)
}
// 模块抛出
export {
  CharacterArray,
  Start
}
