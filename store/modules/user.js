/**
 * @author:zhy
 * @date :20180628
 * @description 用户业务状态
 */
import axios from "axios"
import apiConfig from "~/static/apiConfig"

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
    information: null,//用户信息
    menus: null,        //菜单
    permissions: null,  //权限
    timer: null       //时钟id
})

// getters
const getters = {
    information: state => state.information,
    menus: state => state.menus,
    permissions: state => state.permissions,
    permissionsContains: state => value => {
        return !!state.list.find(x => x === value);
    }
}

// actions
const actions = {
    login({ commit }, model) {
        console.log(arguments);
        axios.post(apiConfig.user_login, model.data)
            .then(response => {
                commit("onOnline");  //让客户端保持在线
                //修改全局请求头
                axios.defaults.headers.common["authorization"] = `Bearer ${response.data.result}`;
                //同步用户、菜单、权限到客户端
                axios.all([loadUser(), loadMenu(), loadPermission()])
                    .then(axios.spread((user, menus, permissons) => {
                        commit("setInformation", user.data.result);
                        commit("setMenus", menus.data.result);
                        commit("setPermissions", permissons.data.result);
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
    }
}

// mutations
const mutations = {
    //保持在线
    onOnline(state) {
        if (state.timer === null) {
            state.timer = setInterval(() => {
                axios.get(apiConfig.ping);
            }, 15 * 60 * 1000);
        }
    },
    //退出在线
    onOffline(state) {
        clearInterval(state.timer);
        state.timer = null;
    },
    setInformation(state, information) {
        state.information = information;
    },
    setMenus(state, menus) {
        state.menus = menus;
    },
    setPermissions(state, permissions) {
        state.permissions = permissions;
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