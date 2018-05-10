<template>
  <div class="forms-main" v-loading="loading">
      <div class="forms-head padding-xl">
        <div class="title"><h1>病例详情</h1></div>
        <div class="info">
            <div><h3>CRF:{{crfInfo.crfNumber}}姓名:{{crfInfo.patientName}}</h3></div>
            <div><h3>访视日期：{{crfInfo.visitTime}}</h3></div>
        </div>
      </div>
      <div class="forms-content">
        <div class="forms-aside">
          <el-menu ref="elMenu" :default-active="active">
              <template v-for="(menu,i) in menus">
                  <el-menu-item :index="i.toString()" :key="i" @click="nav(menu)">{{menu.medItemName}}<i v-if="menu.validation" class="el-icon-success" style="color:green;"></i></el-menu-item>
              </template>
            </el-menu>
        </div>
        <div class="forms-form">
            <nuxt-child class="margin-xl" @confirm="onConfirm"/>
        </div>
      </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from "axios"
import apiConfig from "~/static/apiConfig"

export default {
    computed: {
    ...mapGetters({
      crfInfo: 'modules/crf/getCrfInfo'
    })
  },
  data() {
    return {
      id:0,
      loading:false,
      active:'0',
      menus:[]
    };
  },
  methods:{
    onConfirm(model){
      console.log(model);
       let me=this;
       let item= me.findMedItem(model.id);
       item.validation=true;
       me.$message({
            message: `${item.medItemName}保存成功`,
            type: 'success'
        })
    },
    findMedItem(id){
      let me=this;
      return me.menus.find(x=>x.medItemId===id);
    },
    loadMenu () {
      var me = this;
      me.loading=true;
      axios.get(apiConfig.crf_navigation_get,{params:{crfBaseId:me.id}}).then(response=> {
          me.loading=false;
          me.menus = response.data.result.items;
          me.openDefault(me.menus);
      });
    },
    nav(model){
        this.$router.push(`${model.path}?id=${model.medItemId}`);
    },
    openDefault(menus){
      let me=this;
      if(typeof menus[0] ==="object"){
        me.nav(menus[0]);
      }
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
<style scoped>
  .forms-main{
    position: absolute;
    display: flex;
    flex-direction: column;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  .forms-head{
      position: relative;
      display: flex;
      flex-direction: row;      
  }

  .forms-main .forms-head .title{
      flex: auto;
  }
  .forms-main .forms-head .info{    
    width: 300px;
    text-align: right;
    vertical-align: middle;
  }

  .forms-content{
    position: relative;
    flex: auto;
  }
  .forms-aside{
    position: absolute;
    left: 0;
    top:0;
    width: 450px;
    bottom: 0;
    overflow:auto;
  }
  .forms-form{
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 450px;
    overflow:auto;
  }
  .el-menu{
    border:none;
  }
</style>