<template>
  <el-container>
      <el-header>病例详情</el-header>
      <el-container direction="horizontal">
        <el-aside width="450px" style="background-color: rgb(238, 241, 246)" v-loading="loading">
          <el-menu ref="elMenu">
              <template v-for="(menu,i) in menus">
                  <el-menu-item :index="i.toString()" :key="i" @click="nav(menu)">{{menu.medItemName}}<i v-if="menu.validation" class="el-icon-success" style="color:green;"></i></el-menu-item>
              </template>
            </el-menu>
        </el-aside>
        <el-main>
            <nuxt-child/>
        </el-main>
      </el-container>
  </el-container>
</template>
<script>
import axios from "axios"
import apiConfig from "~/static/apiConfig"

export default {
  data() {
    return {
      id:0,
      loading:false,
      menus:[]
    };
  },
  methods:{
    loadMenu () {
      var me = this;
      me.loading=true;
      axios.get(apiConfig.crf_navigation_get,{params:{crfBaseId:me.id}}).then(response=> {
          me.loading=false;
          me.menus = response.data.result.items;
      });
    },
    nav(model){
        this.$router.push(`${model.path}?id=${model.medItemId}`);
    }
  },
  mounted () {
    var me = this;
    if(typeof me.$route.query.id === "string" && me.$route.query.id!=="0"){
      me.id = parseInt(me.$route.query.id);
      me.loadMenu();
    }
    window.vm=me;
  }
}
</script>

