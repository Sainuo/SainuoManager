<template>
  <div>
    <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="用户管理" name="basic">
      <el-form ref="userForm" :model="ruleForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="ruleForm.userName" clearable :max="50" placeholder="输入50字以内"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="ruleForm.name" clearable :max="50" placeholder="输入50字以内"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="ruleForm.emailAddress" clearable placeholder="输入11位手机号码"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="ruleForm.phoneNumber" clearable :max="11" placeholder="输入11位手机号码"></el-input>
        </el-form-item>
        <el-form-item label="初始密码">
          <el-input v-model="ruleForm.name" clearable placeholder="不输入默认为gl123456"></el-input>
        </el-form-item>
        <el-form-item label="是否启用">
          <el-checkbox v-model="ruleForm.isActive"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否允许绑定微信">
          <el-checkbox v-model="ruleForm.canBindWechat"></el-checkbox>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="角色" name="role">
        <el-form ref="roleForm" :model="ruleForm" label-width="80px">
          <el-form-item label="">
            <el-checkbox-group v-model="form.roles">
              <el-checkbox label="音乐"></el-checkbox>
              <el-checkbox label="足球"></el-checkbox>
              <el-checkbox label="篮球"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
    </el-tab-pane>
    <el-tab-pane label="组织机构" name="orgnization">
        <el-tree :props="props"  show-checkbox :data="data"></el-tree>
    </el-tab-pane>
    <div class="text-algin-right">
      <el-button @click="onConfirm">保存</el-button>
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
    ruleForm: {
      userName: "string",
      name: "string",
      surname: "string",
      emailAddress: "string",
      isActive: true,
      fullName: "string",
      roles: ["string"],
      organizationId: 0,
      id: 0
    },
    rules: {
      userName: [
        { required: true, message: "请输入活动名称", trigger: "blur" },
        { min: 3, max: 50, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ],
      name: [
        { required: true, message: "请选择活动区域", trigger: "change" }
      ],
    }
  }),
  methods: {
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
      }
  },
  mounted(){
    var me = this;
    if(typeof me.$route.query.id > 0){
      me.id = me.$route.query.id;
      me.loadData();
    }
  }
};
</script>
