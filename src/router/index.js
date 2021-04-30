import Vue from 'vue'
import VueRouter from 'vue-router'
import pcr from '../views/Pcr/Pcr'
import arknights from '../views/Ark/Arknights'
import about from '../views/About'
import PcrDrawCard from '../components/PcrComponents/PcrDrawCard'
// import index from '../views/Index'
import notfound from '../views/NotFound'
import login from '../views/Login.vue'
import workbench from '../views/Workbench/Workbench.vue'
import register from '../views/Register'
import Element from 'element-ui'
import CommentArea from '../views/Comment/CommentArea'

Vue.use(VueRouter, Element)

const routes = [
  // 公主连结蛋池模拟
  {
    path: '/',
    component: pcr,
    meta: { title: '公主连结蛋池模拟' },
    children: [
      // { path: '/', component: index, meta: { title: '公主连结蛋池模拟' } },
      { path: '/', component: PcrDrawCard, meta: { title: '公主连结蛋池模拟' } },
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
    meta: { title: '后台管理', requireAuth: true },
    component: workbench
  },
  // 明日方舟蛋池模拟
  {
    path: '/arknights',
    component: arknights,
    meta: {
      title: '明日方舟蛋池模拟'
    }
  },
  // 评论区
  {
    path: '/commentarea',
    component: CommentArea,
    meta: {
      title: '评论区',
      requireAuth: true
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


export default router
