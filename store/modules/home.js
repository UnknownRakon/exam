const state = () => ({
    text: '',
    image: ''
})

const getters = {
    HOME: (state) => {
        const home = { text: state.text, image: state.image }
        return home
    },
};

const mutations = {
    SET_HOME: (state, payload) => {
        state.text = payload.text;
        state.image = payload.image;
    },
};

const actions = {
    GET_HOME: async (context) => {
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
