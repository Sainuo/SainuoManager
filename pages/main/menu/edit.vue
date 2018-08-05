<template>
    <el-form ref="ruleForm" :rules="rules" :model="ruleForm" v-loading="loading" label-width="80px">
        <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="输入组织名称200字以内" :max=200 autofocus></el-input>
        </el-form-item>
        <el-form-item label="路径" prop="url">
            <el-input v-model="ruleForm.url" placeholder="页面路径" ></el-input>
        </el-form-item>
        <el-form-item label="图标" prop="icon">
            <icon-select v-model="ruleForm.icon" :width="400"></icon-select>
        </el-form-item>
        <el-form-item label="权限" prop="perm">
            <biz-select-tree :src="urls.permission_get" v-model="ruleForm.perm" placeholder="选择权限" value-field="name" display-field="displayName" :show-columns="['displayName']" children-field="_children" :modelMap="m=>m.result"/>
        </el-form-item>
        <div class="text-align-right">
          <el-button @click="$emit('cancel')">取消</el-button>
          <el-button @click="onConfirm" type="primary">保存</el-button>
        </div> 
    </el-form>
</template>
<script>
import axios from "axios"
import apiConfig from "~/static/apiConfig"
import BizSelect from "~/components/BizSelect.vue"
import IconSelectIcon from "~/components/IconSelect.vue"
import BizSelectTree from "~/components/BizSelectTree.vue"

export default {
  components:{
    'biz-select':BizSelect,
    'icon-select':IconSelectIcon,
    'biz-select-tree':BizSelectTree
  },
  data: () => ({
    id: 0,
    loading:false,
    urls:apiConfig,
    ruleForm: {
      "parentId": 0,
      "name": "",
      "icon": "",
      "perm": "",
      "url": "",
      "order":0
    },
    rules:{
          name: [
            { required: true, message: '请输入菜单名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          perm: [
            { required: true, message: '请选择对应权限', trigger: 'change' }
          ]
    }
  }),
  methods: {
    onConfirm() {
      var me = this;
      me.$refs.ruleForm.validate((valid) => {
        if(valid){
          me.onSubmit();
        }
        else{
          me.$message.error("请检查数据完整性");
        }
        return valid;
      });
    },
    onSubmit(){
      var me=this;
      if(me.id === 0){
        axios.post(apiConfig.menu_create, me.ruleForm).then(response => {
          me.$emit("confirm", response.data.result);
        });
      }
      else{
        delete me.ruleForm.order;
        axios.put(apiConfig.menu_update, me.ruleForm).then(response => {
          me.$emit("confirm", me.ruleForm);
        });
      }
    },
    loadData() {
      var me = this;
      me.loading=true
      axios.get(apiConfig.menu_read, { params:{ id: me.id }})
      .then(response => {
        me.ruleForm = response.data.result;
      })
      .finally(()=>{
        me.loading=false;
      });
    }
  },
  mounted() {
    var me = this;
    let q = me.$route.query;
    if (typeof q.id === "string" && q.id !== "0") {
      me.id = parseInt(q.id);
      me.loadData();
    }
    if (typeof q.parentId === "string" && q.parentId !== "0") {
      me.ruleForm.parentId = parseInt(me.$route.query.parentId);
    }
    if (typeof q.maxorder === "string" && q.maxorder !== "0") {
      me.ruleForm.order = parseInt(me.$route.query.maxorder)+1;
    }
  }
};
</script>