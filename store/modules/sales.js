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
        state.text = payload.text;
        state.image = payload.image;
    },
};

const actions = {
    GET_SALES: async (context) => {
        await fetch("https://demo-api.vsdev.space/api/brom/home_page", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then(
                (result) => {
                    context.commit("SET_HOME", result);
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
