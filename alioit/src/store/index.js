import Vue from 'vue'
import Vuex from 'vuex'
import pokesCRUD from './modules/pokes.module'
import notificationPush from './modules/notification.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pokesCRUD,
    notificationPush
  }
})