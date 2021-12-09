import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'; /* 引入axios进行地址访问*/
// import router from '@/router/mainRoutes.js'
axios.defaults.baseURL = "http://localhost:3000/"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //设置全局数据发送格式
Vue.config.productionTip = false;
Vue.prototype.$addr = axios;


Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
	router,
    render: h => h(App),
}).$mount('#app')