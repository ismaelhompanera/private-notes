import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { router } from './router/routes'
import store from './vuex/store'
import Notifications from 'vue-notification'
import EntryPoint from 'components/EntryPoint'

Vue.use(VueResource)
Vue.use(Notifications)

Vue.http.options.root = 'http://localhost:3306/api'

new Vue({
  el: '#app',
  template: '<EntryPoint/>',
  router: router,
  store,
  components: { EntryPoint }
})
