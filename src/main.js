import Vue from 'vue'
import App from './App'
import router from './router'

// Offline support
if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require */
  const runtime = require('offline-plugin/runtime')

  runtime.install({
    onUpdateReady() {
      runtime.applyUpdate()
    },
    onUpdated() {
      window.location.reload()
    },
  })
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
})
