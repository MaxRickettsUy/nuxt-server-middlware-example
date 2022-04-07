export const state = () => ({
  data: null
})

export const mutations = {
  setData (state, values) {
    state.data = values
  }
}

export const actions = {
  setData (context, payload) {
    context.commit('setData', payload)
  }
}

export const getters = ({
  data: state => state.data
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
