<template>
 <div id="login" class="loginBody">
        <div class="login">
            <el-form :model="form" :rules="rules" ref="form" label-position="top">
                <header class="text-align-center">
                    <logo/>
                </header>
                <div>
                   <el-tabs v-model="activeTab">
                    <el-tab-pane  label="账户密码登录" name="account">
                      <el-form-item label="帐号" prop="username">
                          <el-input v-model="form.username"></el-input>
                      </el-form-item>
                      <el-form-item label="密码" prop="passwords">
                          <el-input type="password" v-model="form.passwords" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item>
                          <el-checkbox v-model="form.isRemember">记住密码</el-checkbox>
                      </el-form-item>
                    </el-tab-pane>
                    <el-tab-pane label="手机号登录" name="phone">
                       <el-form-item label="手机号" prop="username">
                          <el-input v-model="form.username"></el-input>
                      </el-form-item>
                      <el-form-item label="验证码" prop="passwords">
                          <el-input type="password" v-model="form.passwords" auto-complete="off"></el-input>
                      </el-form-item>
                    </el-tab-pane>
                  </el-tabs>
                </div>
                <div>
                  <el-button type="primary" @keydown.13="login" @click="login" class="col-12" :loading="loading">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import webConfig from "~/static/webConfig"
import apiConfig from "~/static/apiConfig"
import md5 from "~/static/javascript/md5"
import logo from "~/components/Logo.vue"
export default {
  components:{
    'logo':logo
  },
  data:()=>({
      activeTab:"account",
      loading: false,
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        passwords: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ]
      },
      form: {
        username: "admin",
        passwords: "123qwe",
        isRemember: true
      }
  }),
  methods: {
    login() {
      var me = this;
      me.$refs.form.validate(valid => {
        if (valid) {
          me.authUser();
          return true;
        } else {
          return false;
        }
      });
    },
    authUser() {
      var me = this;
      var postData = {
          "tenancyName": "default",
          "usernameOrEmailAddress": me.form.username,
          "password": me.form.passwords
      };
      me.loading=true;
      axios.post(apiConfig.user_login,postData).then(response => {
        me.loading=false;
        axios.defaults.headers.common['authorization'] =`Bearer ${response.data.result}`;
        me.$router.push("/main");
      })
      .catch(response=>{
        me.loading = false;
      });
    }
  },
  mounted() {
    document.title = webConfig.systemName;
  }
}
</script>