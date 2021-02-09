import Vue from 'vue'
import VueRouter from 'vue-router'
import pcr from '../views/pcr'
import arknights from '../views/arknights'
import about from '../views/about'
import PcrDrawCard from '../components/PcrDrawCard'
import pcrrole from '../components/pcrrole'
import index from '../views/index'
import notfound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: pcr,
    meta: { title: '公主连结蛋池模拟' },
    children: [
      { path: '/', component: index, meta: { title: '公主连结蛋池模拟' } },
      { path: 'pcrrole', component: pcrrole, meta: { title: '公主连结蛋池模拟' } },
      { path: 'pcrdrawcard', component: PcrDrawCard, meta: { title: '公主连结蛋池模拟' } },
      { path: 'about', component: about, meta: { title: '公主连结蛋池模拟' } }
    ]
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
