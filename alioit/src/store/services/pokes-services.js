import { axiosRequest, authHeader } from '../../config/axios.config'
import axios from 'axios'
function getContainers () {
  return axiosRequest.get('/poke/getContainer',  { headers: authHeader() }).then(response => {
    return response.data
  }, error => { console.log(error) })
}
function getPokesAPI () {
  return axios.get('https://pokeapi.co/api/v2/pokemon-species?offset=5&limit=1000').then(response => {
    return response.data
  }, error => { console.log(error) })
}
function savePokesToContainer (data) {
  return axiosRequest.post('/poke/setPokeList',data).then(response => {
    return response.data
  }, error => { console.log(error) })
}

function setStatusPokeContainer (data) {
  console.log('>>>>>>', data)
  return axiosRequest.post('/poke/setStatusPokeContainer',data).then(response => {
    return response.data
  }, error => { console.log(error) })
}
function saveContainer (data) {
  return axiosRequest.post('/poke/setPokeContainer',data).then(response => {
    return response.data
  }, error => { console.log(error) })
}
function getContainerPokes (data) {
  return axiosRequest.get('/poke/getPokes?containerId=' + data).then(response => {
    return response.data
  }, error => { console.log(error) })
}

export default {
  getContainers,
  getPokesAPI,
  savePokesToContainer,
  saveContainer,
  getContainerPokes,
  setStatusPokeContainer
}