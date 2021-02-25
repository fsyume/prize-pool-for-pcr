import Vue from 'vue'
import VueRouter from 'vue-router'
import pcr from '../views/Pcr/Pcr'
import arknights from '../views/Ark/Arknights'
import about from '../views/About'
import PcrDrawCard from '../components/PcrComponents/PcrDrawCard'
// import pcrrole from '../components/pcrrole'
import index from '../views/index'
import notfound from '../views/NotFound'
import login from '../views/login.vue'
import workbench from '../views/Workbench/Workbench.vue'

Vue.use(VueRouter)

const routes = [
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
  {
    // 登录页面
    path: '/login',
    meta: { title: '管理员登录' },
    component: login
  },
  {
    path: '/workbench',
    meta: { title: '后台管理' },
    component: workbench
  },
  {
    path: '/arknights',
    component: arknights,
    meta: {
      title: '明日方舟蛋池模拟'
    }
  }, {
    // 404路由
    path: '*',
    component: notfound,
    meta: { title: '页面走丢了~' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
