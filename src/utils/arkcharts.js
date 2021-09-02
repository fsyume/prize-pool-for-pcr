import axios from "axios";

var httpurl = "api/inquiry/gacha?"

var token = "f4LPXHr4rhpucWlfe8CX4t73"

var page = 1

export function atest(){
  axios.get(httpurl+"page="+page+"&token="+token)
    .then((res)=>{

      console.log("抽卡总次数" + res.data.pagination.total)
      console.log(res.data.list)

    })
}

