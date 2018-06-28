
export default {
    state: () => ({}),
    getters: {
        user: state => state.modules.user
    },
    actions: {
        login({ dispatch }, model) {
            dispatch("modules/user/login", model);
        },
        logout({ dispatch }) {
            dispatch("modules/user/logout");
        }
    },
    mutations: {}
}