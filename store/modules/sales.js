const state = () => ({
    sales: []
})

const getters = {
    SALES: (state) => {
        return state.sales
    },
};

const mutations = {
    SET_SALES: (state, payload) => {
        state.sales = payload
    },
};

const actions = {
    GET_SALES: async (context) => {
        await fetch("https://demo-api.vsdev.space/api/brom/sales", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then(
                (result) => {
                    context.commit("SET_SALES", result);
                },
                (error) => {
                    console.log(error);
                }
            );
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
