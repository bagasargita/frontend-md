// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import 'leaflet/dist/leaflet.css';
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import moment from 'moment'
import 'moment/locale/id'
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import Toast from 'vue-toastification'
import Swal from 'sweetalert2'
import 'vue-toastification/dist/index.css'
moment.locale('id')

Vue.filter('formatDate', function(value, format = 'dddd, DD MMM YYYY') {
  if (value) {
    return moment(value).format(format)
  }
  return ''
})
const toastOptions = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
}

Vue.use(Toast, toastOptions)
Vue.prototype.$swal = Swal;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
