import pokesService from '../services/pokes-services.js'
const state = {
  containers: [],
  containerSelected: {},
  pokesApi: [],
  pokesSavedOnContainer: [],
  showContainer: false,
  showPokeLoaded: false,
  showPokeApi: false,
  showAddContainer:false,
  showPokesSavedOnContainer:false
}
const getters = {
  containers: state => state.containers,
  containerSelected: state => state.containerSelected,
  pokesApi: state => state.pokesApi,
  showContainer: state => state.showContainer,
  showPokeLoaded: state => state.showPokeLoaded,
  showPokeApi: state => state.showPokeApi,
  pokesSavedOnContainer: state => state.pokesSavedOnContainer
}
const mutations = {
  SET_CONTAINERS: (state, containers) => {
    state.containers = containers
  },
  SET_CONTAINERSELECTED: (state, containerSelected) => {
    state.containerSelected = containerSelected
  },
  SET_POKESAPI: (state, pokesApi) => {
    state.pokesApi = pokesApi
  },
  SET_SHOWCONTAINER: (state, showContainer) => {
    state.showContainer = showContainer
  },
  SET_SHOWPOKEAPI: (state, showPokeApi) => {
    state.showPokeApi = showPokeApi
  },
  SET_POKESAVEDONCONTAINER: (state, pokesSavedOnContainer) => {
    state.pokesSavedOnContainer = pokesSavedOnContainer
  },
  SET_SHOWPOKESAVEDONCONTAINER: (state, showPokesSavedOnContainer) => {
    state.showPokesSavedOnContainer = showPokesSavedOnContainer
  },
  SET_SHOWADDCONTAINER: (state, showAddContainer) => {
    state.showAddContainer = showAddContainer
  },
}
const actions = {
  showContainers:async ({ commit }, data) => {
    commit('SET_SHOWCONTAINER', data)
    return 
  },
  showPokeApi:async ({ commit }, data) => {
    commit('SET_SHOWPOKEAPI', data)
    return 
  },
  showAddContainer:async ({ commit }, data) => {
    commit('SET_SHOWADDCONTAINER', data)
    return 
  },
  getContainers: ({ commit }, data) => {      
      pokesService.getContainers(data).then((r) => {        
        commit('SET_CONTAINERS', r)
      })
      return 
  },
  getPokesAPI: async ({ commit }, data) => {    
    await pokesService.getPokesAPI(data).then((r) => {        
      commit('SET_POKESAPI', r.results)
      commit('SET_SHOWCONTAINER', false)
      commit('SET_SHOWPOKEAPI', true)
      
    })
    return 
  },
  savePokesToContainer: ({ commit }, data) => {    
      pokesService.savePokesToContainer(data).then(async () => {        
      commit('SET_SHOWCONTAINER', true)
      commit('SET_SHOWPOKEAPI', false)      
    })
    return 
  },
  saveContainer: ({ commit }, data) => {
      pokesService.saveContainer(data).then(async (c) => { 
        commit('SET_CONTAINERSELECTED',c)
        await pokesService.getPokesAPI().then((r) => {        
          commit('SET_POKESAPI', r.results)
          commit('SET_SHOWCONTAINER', false)
          commit('SET_SHOWPOKEAPI', true)          
        })
        return
    })
    return 
  },
  setStatusPokeContainer: ({commit}, data) => {
    console.log('?????', data)
    pokesService.setStatusPokeContainer(data).then(() => { 
      commit('',{})
    })
  return 
},
  getContainerPokes: async ({ commit }, data) => {
    await pokesService.getContainerPokes(data).then((r) => {        
      commit('SET_POKESAVEDONCONTAINER', r)
      commit('SET_SHOWCONTAINER', false)
      commit('SET_SHOWPOKESAVEDONCONTAINER', true)
    })
    return 
  },
  setShowSavedPokes: async ({ commit }, data) => {
    commit('SET_SHOWPOKESAVEDONCONTAINER', data)
    return 
  }
}
const pokesCRUD = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
export default pokesCRUD