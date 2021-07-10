import Vue from 'vue'
import VueRouter from 'vue-router'
import pcr from '../views/Pcr/Pcr'
import arknights from '../views/Ark/Arknights'
import about from '../views/About'
import PcrDrawCard from '../components/PcrComponents/PcrDrawCard'
import notfound from '../views/NotFound'
import Element from 'element-ui'


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


export default router
