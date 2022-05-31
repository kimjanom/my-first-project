import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'

import VueSession from 'vue-session'

import VueCookies from 'vue-cookies'

import uuid from '@estudioliver/vue-uuid-v4'
// import { AudioPlayerOption } from 'vue3-audio-player'
// import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
// import Chart from 'chart.js'
// Vue.use(Chart)

Vue.use(uuid)
// Vue.use(AudioPlayerOption)
Vue.use(VueCookies)
Vue.$cookies.config('1d')

var sessionOptions = {
  persist: true
}
Vue.use(VueSession, sessionOptions)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.prototype.$axios = axios
// if (this.$cookies.get('X-AUTH-TOKEN') != 1) {
//   this.$axios.defaults.headers.post['X-AUTH-TOKEN'] = this.$cookies.get('X-AUTH-TOKEN')
// }

Vue.config.productionTip = false

new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
