import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
Vue.prototype.$hostname = 'http://api.todolist.petermajor.a2hosted.com/api/';
new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
