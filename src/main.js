import Vue from 'vue'
import App from './App.vue'

//防止表单重复提交指令
import throttle from "@/utils/throttle";
import permission from "@/utils/permission";
import router from './router'

//

Vue.config.productionTip = false
Vue.use(throttle);
Vue.use(permission);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
