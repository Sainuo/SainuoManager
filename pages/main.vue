<template>
  <div id="index" class="page">
        <header class="main-head">
            <div class="logo">
                <logo></logo>
            </div>
            <el-tabs v-model="activeName"  class="nav-menu">
                <el-tab-pane name="1">
                    <span slot="label"><i class="fa fa-medkit"></i> 肝多龙中心</span>
                </el-tab-pane>
                <el-tab-pane name="2">
                    <span slot="label"><i class="fa fa-heartbeat"></i> 大健康</span>
                </el-tab-pane>
                <el-tab-pane name="3">
                    <span slot="label"><i class="fa fa-building"></i> 社区服务</span>
                </el-tab-pane>
                <el-tab-pane name="4">
                    <span slot="label"><i class="fa fa-folder"></i> 健康档案管理</span>
                </el-tab-pane>
                <el-tab-pane name="5">
                    <span slot="label"><i class="fa fa-handshake-o"></i> 合作伙伴</span>
                </el-tab-pane>
                <el-tab-pane name="6">
                    <span slot="label"><i class="fa fa-group"></i> 专家资源库</span>
                </el-tab-pane>
            </el-tabs>
            <nav class="color-white">
                <div class="padding-left-right-xl">
                    <el-dropdown @command="handleCommand" trigger="click">
                        <span class="el-dropdown-link color-white">
                            <span>{{userName}}<img class="avatar margin-left-l" src="images/avatar.jpg" /></span>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="ChangePassword">修改密码</el-dropdown-item>
                            <el-dropdown-item command="a">修改资料</el-dropdown-item>
                            <el-dropdown-item command="Exit">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </nav>
        </header>
        <aside class="menu">
            <el-col :span="24">
                <el-menu :default-active="menuIndex" ref="elMenu"  background-color="#001529" text-color="#a5acb3" active-text-color="#ffd04b">
                    <template v-if="menus.length" v-for="(menu,i) in menus">
                        <el-submenu v-if="menu.ChildrenModels.length" :index="i.toString()" :key="i">
                            <template slot="title">
                                <i :class="[menu.Icon]"></i>{{menu.DisplayName}}
                            </template>
                            <el-menu-item v-for="(child,j) in menu.ChildrenModels" :index="i+'-'+j" :key="j" @click="nav(child)">
                                {{child.DisplayName}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="i.toString()" :key="i"><i :class="[menu.Icon]"></i>{{menu.DisplayName}}</el-menu-item>
                    </template>
                </el-menu>
            </el-col>
        </aside>
        <div class="subPage">
            <nuxt-child/>
        </div>
    </div>
</template>
<script>
import webConfig from "~/static/webConfig"
import apiConfig from "~/static/apiConfig"
import Logo from "~/components/Logo.vue"
import axios from "axios"

export default {
    components:{
        logo:Logo
    },
    data() {
        return {
            activeName:"1",
            userName: "",
            menus: [],
            menuIndex: "",
            history: []
        };
    },
    mounted() {
        this.loadMenu();
    },
    methods: {
        loadMenu () {
            var me = this;
            axios.get("/data/userinfo.json").then(response=> {
                me.menus = response.data.Data.UserMenuModels;
                me.selectMenuByUrl(me.$route.path);
            });
        },
        nav(model){
            this.$router.push(model.ActionUrl);
        },
        getMenuIndexByUrl (url, menus,index) {
            var me = this;
            for (var i = 0, m; m = menus[i];i++) {
                var idx= index.length=== 0 ? `${i}` : `${index}-${i}`;
                if(url===m.ActionUrl)return idx;
                if (m.ChildrenModels.length) {
                   var path= me.getMenuIndexByUrl(url, m.ChildrenModels,idx);
                   if(path!=="") return path;
                }
            }
            return "";
        },
        selectMenuByUrl (url) {
            var index=this.getMenuIndexByUrl(url,this.menus,"");
            this.menuIndex=index;
        },
        handleCommand (command) {
            var me=this;
            switch (command) {
                case "ChangePassword":
                    this.loadPage("/wwwroot/Account/ChangePassword.html");
                    break;
                case "Exit":
                    this.$confirm('确定退出登录？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(()=> {
                        me.$router.push("/");
                    }).catch( ()=> {

                    });
                    break;
                default:
                    break;
            }
        }
    }
}
</script>
<style scoped>
.el-menu{
    border-right: 0;
}
</style>
