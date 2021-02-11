// 获取蛋池角色数据
function CharacterArray () {
  // 简化Promise对象
  var { data: res } = await this.$http.get('/data/pcr.json')
  console.log(res)
}
