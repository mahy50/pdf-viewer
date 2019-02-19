import Vue from 'vue'
import App from './App'
import PdfViewer from '../src'

Vue.component('pdf-viewer', PdfViewer)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

