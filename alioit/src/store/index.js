import Vue from 'vue'
import Vuex from 'vuex'
import pokesCRUD from './modules/pokes.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pokesCRUD
  }
})