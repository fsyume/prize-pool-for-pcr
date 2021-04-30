import router from "@/router";
import Element, {Message} from 'element-ui'

// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    const token = sessionStorage.getItem('uid')// 暂时改成判断uid
    console.log(token)
    if (token) { // 判断当前的token是否存在 ； 登录存入的token
      if (to.path === '/login') {
      } else {
        next()
      }
    } else {
      next({
        Element: Message.error("请先登录"),
        path: '/login'
      })
    }
  } else {
    next()
  }
})
