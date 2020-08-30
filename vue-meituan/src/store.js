import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    position: {},
    userName: ''
  },
  mutations: {
    setPosition (state, val) {
      state.position = val
    },
    setUsername(state, val) {
      state.userName = val
    }
  },
  actions: {
    setPosition ({ commit }, val) {
      commit('setPosition', val)
    },
    setUsername({ commit }, val) {
      commit('setUsername', val)
    }
  }
})

export default store
