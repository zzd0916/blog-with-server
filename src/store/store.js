import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const  store = new Vuex.Store({
  state:{
    //存放数据的地方
    blogs:[],
  }
})

