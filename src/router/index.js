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
    children: [
      { path: '/', component: index },
      { path: 'pcrrole', component: pcrrole },
      { path: 'pcrdrawcard', component: PcrDrawCard },
      { path: 'about', component: about }
    ]
  },
  {
    path: '/arknights',
    component: arknights
  }, {
    // 404路由
    path: '*',
    component: notfound
  }
]

const router = new VueRouter({
  routes
})

export default router
