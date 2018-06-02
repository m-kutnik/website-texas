import Vue from "vue"
import { VueHammer } from "vue2-hammer"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"

Vue.config.productionTip = false

Vue.use(VueHammer)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
