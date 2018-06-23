import axios from "axios"
import apiConfig from "~/static/apiConfig"
// state
const state = () => ({
    timerId:0
})

// getters
const getters = {
    timerId: state => state.timerId
}

// actions
const actions = {
    start({ commit }) {
        commit('startPing');
    },
    stop({ commit }){
        commit('stopPint');
    }
}

// mutations
const mutations = {
    startPing(state) {
       state.timerId=setInterval(() => {
            axios.get(apiConfig.ping);
        }, 15 * 60 * 1000);
    },
    stopPint(state){
        clearInterval(state.timerId);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}