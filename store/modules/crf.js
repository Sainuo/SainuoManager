// initial state
// shape: [{ id, quantity }]
const state = () => ({
    crf: null,
})

// getters
const getters = {
    getCrfInfo: (state) => state.crf
}

// actions
const actions = {
    updateCrfInfo({ commit }, crf) {
        commit('setCrfInfo', crf);
    },
    restore({ commit }) {
        let crf = localStorage["crf"];
        if (crf) {
            commit("handleRestore", JSON.parse(crf));
        }
    }
}

// mutations
const mutations = {
    setCrfInfo(state, crf) {
        localStorage["crf"] = JSON.stringify(crf);
        state.crf = crf;
    },
    handleRestore(state, crf) {
        state.crf = crf;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}