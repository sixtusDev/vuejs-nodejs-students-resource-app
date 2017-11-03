
import Vue from 'vue'

import Vuetify from 'vuetify'
import vueResource from 'vue-resource'

import App from './App'
import router from './router'
import EditResource from './components/StudentsResource/EditResource'
import Alert from './components/Alert.vue'

Vue.use(Vuetify)
Vue.use(vueResource)

// components
Vue.component('app-edit-resource', EditResource)
Vue.component('app-alert', Alert)

// filters
Vue.filter('snippet', value => {
  return value.slice(0, 500).concat('...')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
