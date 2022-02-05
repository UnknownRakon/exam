const state = () => ({
    text: '',
})

const getters = {
    ABOUT: (state) => {
        return state.text
    },
};

const mutations = {
    SET_ABOUT: (state, payload) => {
        state.text = payload;
    },
};

const actions = {
    GET_ABOUT: async (context) => {
        await fetch("https://demo-api.vsdev.space/api/brom/about_page", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then(
                (result) => {
                    context.commit("SET_ABOUT", result);
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
