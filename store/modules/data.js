const state = () => ({
  data: null,
})

const getters = {
  DATA: (state) => {
    return state.categories;
  },
};

const mutations = {
  SET_DATA: (state, payload) => {
    state.data = payload;
  },
};

const actions = {
  GET_DATA: async (context) => {

  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
