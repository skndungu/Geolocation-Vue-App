import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = null

//Wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {

  //init app if not created
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }

})