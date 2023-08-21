import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/element-ui'
import '@/utils/highlight'

import ShowCard from '@/components/ShowCard'
Vue.component('ShowCard', ShowCard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
