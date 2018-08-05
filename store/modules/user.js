/**
 * @author:zhy
 * @date :20180628
 * @description 用户业务状态
 */
import axios from "axios"
import apiConfig from "~/static/apiConfig"
import utility from "~/static/javascript/utility"

//https://github.com/axios/axios
//加载用户的权限
const loadPermission = () => {
    return axios.get(apiConfig.user_permission_get);
};

// 加载用户的菜单
const loadMenu = () => {
    return axios.get(apiConfig.menu_my_tree_get);
}

//加载用户信息
const loadUser = () => {
    return axios.post(apiConfig.session_get);
}

const state = () => ({
    model:{
        information: null,//用户信息
        menus: [],        //菜单
        permissions: [],  //权限
        timer: 0,       //时钟id
        authorization: ""
    }
})

// getters
const getters = {
    information: state => state.model.information,
    menus: state => state.model.menus,
    permissions: state => state.model.permissions,
    permissionsContains: state => value => {
        return !!state.model.permissions.find(permission => permission === value);
    }
}

// actions
const actions = {
    login({ commit }, model) {
        axios.post(apiConfig.user_login, model.data)
            .then(response => {
                commit("onOnline");  //让客户端保持在线
                //修改全局请求头
                let authorization = `Bearer ${response.data.result}`;
                axios.defaults.headers.common["authorization"] = authorization;
                commit("setAuthorization", authorization)
                //axios.defaults.headers.common["authorization"] = `Bearer ${response.data.result}`;
                //同步用户、菜单、权限到客户端
                axios.all([loadUser(), loadMenu(), loadPermission()])
                    .then(axios.spread((user, menus, permissons) => {
                        commit("setInformation", user.data.result);
                        commit("setMenus", menus.data.result);
                        commit("setPermissions", permissons.data.result);
                        commit("onSaveToSession");
                        model.callback(true);
                    }))
                    .catch(response => {
                        model.callback(false);
                    });
            })
            .catch(response => {
                model.callback(false);
            });
    },
    logout({ commit }) {
        commit("onLogout");
        commit("onOffline");
    },
    save({ commit }) {
        commit("onSave");
    },
    restore({ commit, state }) {
        if (sessionStorage["user"] === undefined) {
            let vm = window.$nuxt;
            vm.$alert('会话过期，请重新登录！', {
                type: "error",
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                confirmButtonText: '确定',
                callback: action => {
                    vm.$router.replace({ path: "/", query: { returnUrl: vm.$route.path } });
                }
            });
        }
        else if (state.model.information === null) {
            let model = JSON.parse(sessionStorage["user"]);
            commit("onRestore", model);
            commit("onOffline");
            commit("onOnline");
        }
    },
}

// mutations
const mutations = {
    //保持在线
    onOnline(state) {
        if (state.model.timer === null) {
            state.model.timer = setInterval(() => {
                axios.get(apiConfig.ping);
            }, 10 * 60 * 1000);
        }
    },
    //退出在线
    onOffline(state) {
        clearInterval(state.model.timer);
        state.model.timer = 0;
    },
    setInformation(state, information) {
        state.model.information = information;
    },
    setMenus(state, menus) {
        state.model.menus = menus;
    },
    setPermissions(state, permissions) {
        state.model.permissions = permissions;
    },
    setAuthorization(state, authorization) {
        state.model.authorization = authorization;
    },
    onSaveToSession(state) {
        sessionStorage["user"] = JSON.stringify(utility.toServerModel(state.model));
    },
    onRestore(state, model) {
        state.model = model;
        axios.defaults.headers.common["authorization"] = model.authorization;
    },
    /**
     * 用户退出登录
     * @param {object} state 
     */
    onLogout(state) {
        axios.defaults.headers.common["authorization"] = "";
        state.commit("/moduels/menu/clear");
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}