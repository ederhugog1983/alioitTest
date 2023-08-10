const state = {  
  alert: false,
  container: '',
}
const getters = {
  alert: state => state.alert,
  container: state => state.container  
}
const mutations = {
  SET_ALERT: (state, alert) => {
    state.alert = alert
  },
  SET_CONTAINER: (state, container) => {
    state.container = container
  }
}
const actions = {
  showAlert:async ({ commit }, data) => {
    commit('SET_ALERT', data)
    return 
  },
  setContainerName:async ({ commit }, data) => {
    commit('SET_CONTAINER', data)
    return 
  }
}
const notificationPush = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
export default notificationPush