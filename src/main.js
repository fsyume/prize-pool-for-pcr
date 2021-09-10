import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'axios'
import './plugins/element.js'
import './assets/css/style.css'
import store from './store'
import '@/utils/permission'
import * as echarts from 'echarts';


Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// Vue.use(VueAxios)
Vue.prototype.$http = VueAxios

// 默认请求地址，这里设置了代理用于解决跨域问题
VueAxios.defaults.baseURL = '/a'

// 登录请求预处理（Cookie）
// VueAxios.defaults.withCredentials = true

// 自定义标签标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
