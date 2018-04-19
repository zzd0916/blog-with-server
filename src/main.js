// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routers from  './routers'
import axios from 'axios'
import {store} from "./store/store";

Vue.config.productionTip = false;
//在Vue原型链上添加axios插件
Vue.prototype.$axios = axios;//使用this.$axios.get....
//使用引入的插件
// Vue.use(VueResource)
Vue.use(VueRouter)
//创建路由
const  router = new VueRouter({
  routes: Routers,
  mode: 'history'
})

//axios全局配置
/*
axios.defaults.baseURL = '/www';
axios.defaults.headers.common['authorization'] = 'token';
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Aceptes'] = 'application/json';
//针对多个不同配置的请求，实例化不同的axios,请参考axios.auth.js
*/

//自定义指令
Vue.directive('rainbow',{
  //添加彩虹色指令
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})
//带传值的指定，若是字符串，需要用单引号引起来-> v-theme="'wide'"，里面也可以传数组，对象
Vue.directive('theme',{
  bind(el, binding, vcode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1100px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "600px";
    }
    //获取带参数的 v-theme:column
    if(binding.arg == 'column'){
      el.style.background = "#ecdfe4";
    }
  }
})

//自定义过滤器
// Vue.filter("to-uppercase",function (value) {
//   //转化为大写
//   return value.toUpperCase();
// })
Vue.filter("snippet",function (value) {
  if(value){
    return value.slice(0,150) +"...";
  }
})
// Vue.filter("timeFilter",function (value) {
//   console.log(value)
//   if(value){
//     return value.slice(0,10);
//   }
// })

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
