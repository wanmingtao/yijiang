import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from './actions'
import {mutations} from './mutations'

Vue.use(Vuex)
// root state object.
// each Vuex instance is just a single state tree.
const state = {
  list:[],
  index:1
}

// getters are functions
const getters = {
  // evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
