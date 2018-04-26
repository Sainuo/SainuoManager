<template>
  <div>
    <el-tabs v-model="activeName">
    <el-tab-pane label="用户管理" name="basic">
      <el-form ref="userForm" status-icon :model="ruleForm" :rules="rules" label-width="80px">
        <el-form-item label="用户名" props="userName">
          <el-input v-model="ruleForm.userName" clearable :max="50" placeholder="输入50字以内"></el-input>
        </el-form-item>
        <el-form-item label="姓名" props="name">
          <el-input v-model="ruleForm.name" clearable :max="50" placeholder="输入50字以内"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" props="emailAddress">
          <el-input v-model="ruleForm.emailAddress" clearable placeholder="输入电子邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" props="phoneNumber">
          <el-input v-model="ruleForm.phoneNumber" clearable :max="11" placeholder="输入11位手机号码"></el-input>
        </el-form-item>
        <el-form-item label="" props="isActive">
          <el-checkbox v-model="ruleForm.isActive">启用</el-checkbox>
        </el-form-item>
        <el-form-item label="" props="canBindWechat">
          <el-checkbox v-model="ruleForm.canBindWechat">允许绑定微信</el-checkbox>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="角色" name="role">
        <el-form :model="ruleForm" label-width="80px">
            <el-checkbox-group v-model="ruleForm.roles">
                <el-checkbox v-for="role in rolescheck" :key="role.id" :label="role.id" :checked="ruleForm.roles.includes(role.id)" >{{role.name}}</el-checkbox>
            </el-checkbox-group>
        </el-form>
    </el-tab-pane>
    <el-tab-pane label="组织机构" name="orgnization">
          <el-select v-model="ruleForm.organizationId" filterable placeholder="Select">
            <el-option v-for="orgnization in orgnizationList" :key="orgnization.id" :label="orgnization.displayName" :value="orgnization.id"></el-option>
          </el-select>
    </el-tab-pane>
    <div class="text-align-right">
      <el-button @click="onConfirm" type="primary">保存</el-button>
      <el-button @click="onCancel">取消</el-button>
    </div> 
  </el-tabs>
  </div>
</template>
<script>
import apiConfig from "~/static/apiConfig"
import axios from "axios"

export default {
  data: () => ({
    id:0,
    activeName:"basic",
    rolescheck:[],
    orgnizationList:[],
    props:{
      label:"displayName",
      children:"children"
    },
    ruleForm: {
      userName: "",
      name: "",
      surname: "",
      emailAddress: "",
      isActive: true,
      fullName: "",
      roles: [],
      organizationId: null,
      id: 0
    },
    rules: {
      userName: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur" }
      ],
      name: [
        { required: true, message: "请输入姓名", trigger: "change" },
        { min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur" }
      ],
      emailAddress:[
        { required: true, message: "请输入电子邮箱", trigger: "change" },
        { min: 2, max: 50, message: "长度在 2 到 50 个字符", trigger: "blur" }
      ],
      phoneNumber:[
        { required: true, message: "请输入手机号码", trigger: "change" },
        { min: 11, max: 11, message: "长度在 2 到 50 个字符", trigger: "blur" }
      ]
    }
  }),
  methods: {
      treeToList(nodes,level){
          var me=this;
          var list=[];
          for(var i=0,node;node=nodes[i];i++){
            list.push(node);
            if(node.children.length){
              list = list.concat(me.treeToList(node.children,level++));
            }
          }
          return list;
      },
      onConfirm(){
        var me = this;
        var url= me.id===0 ?apiConfig.user_create : apiConfig.user_update;
        axios.post(url,me.ruleForm).then(response=>{  
          me.$emit("confirm",me.ruleForm);
        });
      },
      onCancel(){
        this.$emit("cancel");
      },
      loadData(){
        var me=this;
        axios.post(apiConfig.user_get,{ id:me.id}).then(response=>{
            me.ruleForm = response.data;
        });
      },
      loadOrgnizationtree(){
        var me=this;
        axios.get(apiConfig.organization_get_by_name,{params: 
          {organizationName:'赛诺多中心'}
          }).then(response=>{
            me.orgnizationList = me.treeToList(response.data.result.items,0);
        });
      },
      loadRoles(){
        var me=this;
        axios.post(apiConfig.role_all_get,{
          skipCount:0,
          maxResultCount:65536
          }).then(response=>{
            me.rolescheck = response.data.result.items;
        });
      }
  },
  mounted(){
    var me = this;
    if(typeof me.$route.query.id > 0){
      me.id = me.$route.query.id;
      me.loadData();
    }
    me.loadOrgnizationtree();
    me.loadRoles();
    window.vm=me;
  }
};
</script>
