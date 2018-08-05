
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
        },
        save({ dispatch }) {
            dispatch("modules/user/save");
        },
        restore({ dispatch }) {
            dispatch("modules/user/restore");
        }
    },
    mutations: {}
}