// actions are functions that causes side effects and can involve
// asynchronous operations.
export const actions = {
  savedata: ({ commit },{data}) => {
  	
  	commit('savedata',{data:data})
  },
  changecolor: ({ commit },index) => {
  	commit('changecolor',index)
  }

}