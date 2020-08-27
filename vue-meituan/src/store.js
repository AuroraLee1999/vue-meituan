import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    position: {}
  },
  mutations: {
    setPosition (state, val) {
      state.position = val
    }
  },
  actions: {
    setPosition ({ commit }, val) {
      commit('setPosition', val)
    }
  }
})

export default store
