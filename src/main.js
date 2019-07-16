import Vue from 'vue'
import App from './App.vue'
import router from './router'
// googleMap使用のパッケージをimport
import * as googleMap from 'vue2-google-maps'

Vue.config.productionTip = false

// googleMap
Vue.use(googleMap, {
  load: {
    key: 'AIzaSyDrKleBCoIh2eQPgNjVpwpmWXC2bdc_lYE',
    libraries: 'places'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
