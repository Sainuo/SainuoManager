<template>
  <div id="index" class="page">
        <header class="main-head">
            <div class="logo">
                <logo></logo>
            </div>
            <el-tabs v-model="navIndex"  class="nav-menu">
                <el-tab-pane :name="index.toString()" v-for="(nav,index) in topNavigation" :key="index">
                    <span slot="label" class="padding-left-right-xl" @click="selectedNav = nav"><i :class="[nav.icon]" class="margin-right-m"></i>{{nav.name}}</span>
                </el-tab-pane>
                <!-- <el-tab-pane name="1">
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
                </el-tab-pane> -->
            </el-tabs>
            <nav class="color-white">
                <div class="padding-left-right-xl">
                    <el-dropdown @command="handleCommand" trigger="click">
                        <span class="el-dropdown-link color-white">
                            <span><img class="avatar margin-left-l" src="images/avatar.jpg" /><span v-if="user" class="margin-left-l color-blue">{{user.name}}</span></span>
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
                <el-menu :default-active="menuIndex" ref="elMenu" :collapse="isCollapse" background-color="#001529" text-color="#a5acb3" active-text-color="#ffd04b">
                    <template v-if="leftMenus.length" v-for="(menu,i) in leftMenus"  >
                        <el-submenu v-if="menu.items.length" :index="i.toString()" :key="i">
                            <template slot="title">
                                <i :class="[menu.icon]"></i>
                                <span slot="title">{{menu.name}}</span>
                            </template>
                            <el-menu-item v-for="(child,j) in menu.items" :index="i+'-'+j" :key="j" @click="nav(child)">
                                {{child.name}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="i.toString()" :key="i" @click="nav(menu)">
                            <i :class="[menu.icon]"></i>
                            <template slot="title">
                                <span slot="title">{{menu.name}}</span>
                            </template>
                        </el-menu-item>
                    </template>
                </el-menu>
                <!-- <el-menu :default-active="menuIndex" ref="elMenu"  background-color="#001529" text-color="#a5acb3" active-text-color="#ffd04b">
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
                </el-menu> -->
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
    computed:{
        user(){
            if(this.$store.getters.user.model.information){
                return this.$store.getters.user.model.information.user;
            }
            return null;
        },
        theme(){
            return this.$store.state.modules.user.model.theme;
        },
        menus(){
           return this.$store.getters.user.model.menus;
        },
        topNavigation(){
            if(this.menus.length){
                return this.menus[0].items;
            }
            return [];
        },
        leftMenus(){
            if(this.selectedNav){
                return this.selectedNav.items;
            }
            else{
                return [];
            }
        }
    },
    components:{
        logo:Logo
    },
    data() {
        return {
            isCollapse:false,
            navIndex:"0",    //顶部菜单默认选中
            menuIndex: "0-0",//左则菜单默认选中
            selectedNav:null
        };
        // return {
        //     activeName:"1",
        //     userName: "",
        //     menus: [],
        //     menuIndex: "",
        //     history: []
        // };
    },
    beforeMount(){
        let me=this;
        me.$store.dispatch("restore");
    },
    mounted() {
        this.defaultSelect();
    },
    methods: {
        defaultSelect(){
            let me = this;
            //直接进入主页面
            if(me.$route.path==="/main"){
                me.navToFirst();
            }else{//进入子页面
                me.navToSubPage();
            }
        },
        navToFirst(){
            let me = this;
            let path = me.getFirstPath(me.menus,0,"items");
            if(path.length>1){
                me.selectedNav = me.menus[0].items[0];
            }
            let last = path[path.length-1].menu;
            if(last && typeof last.url==="string" && last.url!=="#" && last.url!==""){
                me.nav(last);
            }
        },
        navToSubPage(){
            let me = this;
            var ps=me.$route.path.split('/');ps.pop();
            let ppath=ps.join('/');
            let path = me.getMenuPath(me.$route.path,me.menus,0,"url","items");
            path=path.length?path:me.getMenuPath(ppath,me.menus,0,"url","items");
            if(path.length){
                me.selectedNav = path[1].menu;
                me.navIndex = path[1].index.toString();//跳过第一层
                path.shift();path.shift();
                me.menuIndex = path.map(p=>p.index).join("-");
            }
        },
        nav(model){
            if(typeof model.url==="string" && model.url!=="#" && model.url!==""){
                this.$router.push(model.url);
            }
        },
        //递归菜单路径
        getMenuPath (url, menus,level,pathField,childrenField) {
            var me = this;
            var path = [];
            for (var i = 0, m; m = menus[i];i++) {
                
                if(me.testEqual(m[pathField],url)){
                    path.push({
                        index:i,
                        level:level,
                        menu:m,
                    });
                }

                if(m[childrenField].length){
                    let ps = me.getMenuPath(url,m[childrenField],level + 1,pathField,childrenField);
                    if(ps.length){
                        path = path.concat([
                            {
                                index:i,
                                level:level,
                                menu:m,
                            }
                        ],ps);
                    }
                }
            }
            return path;
        },
        //获取第一级的叶子路径
        getFirstPath(menus,level,childrenField){
            var me = this;
            var path = [];
            for(var i=0,menu;menu = menus[i];i++){
                if(i===0){
                    path.push({
                        index:i,
                        level:level,
                        menu:menu
                    });

                    if(menu[childrenField].length){
                        path = path.concat(me.getFirstPath(menu[childrenField],level+1,childrenField));
                    }
                }
            }
            return path;
        },
        testEqual(a,b){
            if(typeof a === "string" && typeof b==="string"){
                return this.removeLastSlash(a)===this.removeLastSlash(b);
            }
            return false;
        },
        removeLastSlash(txt){
            return txt[txt.length-1]==="/" ? txt.slice(0,-1):txt;
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
