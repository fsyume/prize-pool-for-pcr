import Vue from 'vue'
import VueRouter from 'vue-router'
import pcr from '../views/Pcr/Pcr'
import arknights from '../views/Ark/Arknights'
import about from '../views/About'
import PcrDrawCard from '../components/PcrComponents/PcrDrawCard'
import index from '../views/index'
import notfound from '../views/NotFound'
import login from '../views/login.vue'
import workbench from '../views/Workbench/Workbench.vue'
import register from '../views/register'
import Element from 'element-ui'

Vue.use(VueRouter, Element)

const routes = [
  // 公主连结蛋池模拟
  {
    path: '/',
    component: pcr,
    meta: { title: '公主连结蛋池模拟' },
    children: [
      { path: '/', component: index, meta: { title: '公主连结蛋池模拟' } },
      // { path: 'pcrrole', component: pcrrole, meta: { title: '公主连结角色列表' } },
      { path: 'pcrdrawcard', component: PcrDrawCard, meta: { title: '公主连结蛋池模拟' } },
      { path: 'about', component: about, meta: { title: '关于|公主连结蛋池模拟' } }
    ]
  },
  // 登录页面
  {
    path: '/login',
    meta: { title: '管理员登录' },
    component: login
  },
  // 注册页面
  {
    path: '/register',
    meta: { title: '新用户注册' },
    component: register
  },
  // 后台管理页面
  {
    path: '/workbench',
    meta: { title: '后台管理' },
    component: workbench,
    beforeEnter: (to, from, next) => {
      let islogin = localStorage.getItem('islogin')
      islogin = Boolean(Number(islogin))

      if (to.path === '/login') {
        if (islogin) {
          next('/workbench')
        } else {
          next()
        }
      } else {
        // requireAuth:可以在路由元信息指定哪些页面需要登录权限
        if (to.meta.requireAuth && islogin) {
          next()
        } else {
          next('/login')
        }
      }
    },
    requireAuth: true
  },
  // 明日方舟蛋池模拟
  {
    path: '/arknights',
    component: arknights,
    meta: {
      title: '明日方舟蛋池模拟'
    }
  },
  // 404路由
  {
    path: '*',
    component: notfound,
    meta: { title: '页面走丢了~' }
  }
]

// 将路由模式改成history模式
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/workbench') {
    const jwt = localStorage.getItem('jwt')
    if (jwt != null) {
      next()
    } else {
      Vue.prototype.$message({
        type: 'error',
        message: '请先登录'
      })
      next('/login')
    }
  } else {
    next()
  }
})
export default router
