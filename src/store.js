import Vue from 'vue'
import Vuex from 'vuex'
import logo from '../public/logo-nna.png'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgb(228, 226, 226, 9), rgb(105, 105, 105)',
    barImage: logo,
    drawer: null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    visible: false,
    message: '',
    type: 'success',
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    // Auth mutations
    SET_USER (state, user) {
      state.user = user
    },
    SET_TOKEN (state, token) {
      state.token = token
      state.isAuthenticated = !!token
    },
    LOGOUT (state) {
      state.user = null
      state.token = null
      state.isAuthenticated = false
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    },
  },
  actions: {
    // Action to log in
    login({ commit }, { token, user }) {
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      commit('SET_USER', user)
      commit('SET_TOKEN', token)
    },
    // Action to log out
    logout({ commit }) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      commit('LOGOUT')
    },
    // Action to check authentication
    checkAuth({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        commit('SET_TOKEN', token)
      }
    },
    showLoading({ commit }) {
      commit('SET_LOADING', true)
    },
    hideLoading({ commit }) {
      commit('SET_LOADING', false)
    },
  },
  getters: {
    getUser: (state) => state.user,
    getLoading: (state) => state.loading,
  },
})
