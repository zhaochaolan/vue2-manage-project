import Vue from 'vue'
import App from './App.vue'

import throttle from "@/utils/throttle";

Vue.config.productionTip = false
Vue.use(throttle);
new Vue({
  render: h => h(App),
}).$mount('#app')
