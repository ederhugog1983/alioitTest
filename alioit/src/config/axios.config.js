import axios from 'axios'

export const axiosRequest = axios.create({
  baseURL: `${process.env.VUE_APP_CARBACKENDURL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true
  }
})

export function authHeader () {
  const token = JSON.parse(localStorage.getItem('user'))
  if (token) {
    return { 'x-access-token': token.accessToken }
  } else {
    return {}
  }
}

export function jsonTypeHeader () {
  return {
    'Content-Type': 'application/json'
  }
}
