import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmile,faArrowRight,faCopyright,faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook,faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook,faGithub)
library.add(faSmile,faArrowRight,faCopyright,faCloudSun)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
