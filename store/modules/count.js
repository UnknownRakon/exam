const state = () => ({
    cars: 0,
    apartments: 0
})

const getters = {
    COUNT: (state) => {
        const count = { cars: state.cars, apartments: state.apartments }
        return count
    },
};

const mutations = {
    SET_COUNT: (state, payload) => {
        state.cars = payload.cars;
        state.apartments = payload.apartments;
    },
};

const actions = {
    GET_COUNT: async (context) => {
        await fetch("https://demo-api.vsdev.space/api/brom/left_widget", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then(
                (result) => {
                    context.commit("SET_COUNT", result);
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
