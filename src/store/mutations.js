// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
export const mutations = {
  savedata (state, {data}) {
    state.list.push(data)
  },
  changecolor (state, index) {
    state.index = index;
  }
}