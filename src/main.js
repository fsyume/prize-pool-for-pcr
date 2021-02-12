import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'axios'
import './plugins/element.js'
import './assets/css/style.css'

Vue.config.productionTip = false

// Vue.use(VueAxios)
Vue.prototype.$http = VueAxios

// 自定义标签标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
