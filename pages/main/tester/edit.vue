<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="检验项目" prop="medProjectId">
            <el-input v-model="ruleForm.medProjectId"></el-input>
        </el-form-item>
        <el-form-item label="CRF号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="患者姓名" prop="patientName">
            <el-input v-model="ruleForm.patientName"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="短信验证码" prop="smsCode">
            <el-input v-model="ruleForm.smsCode"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthday">
            <el-date-picker v-model="ruleForm.birthday" type="date" placeholder="选择出生日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="gender">
            <el-radio-button :value="0" label="女性"></el-radio-button>
            <el-radio-button :value="1" label="男性"></el-radio-button>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="民族" prop="nationality">
            <el-input v-model="ruleForm.nationality"></el-input>
        </el-form-item>
        <div class="text-align-right">
            <el-button @click="$emit('cancel')">取消</el-button>
            <el-button @click="onConfirm" type="primary">保存</el-button>
        </div>
    </el-form>
</template>
<script>
  import axios from "axios"
  import BizSelect from "~/components/BizSelect.vue"
  export default {
    components:{
        'biz-select':BizSelect
    },
    data() {
      return {
        id:0,
        ruleForm: {
            "medProjectId": null,
            "patientName": "",
            "gender": 0,
            "phoneNumber": "",
            "birthday": new Date(),
            "nationality": null,
            "smsCode": "",
            "organizationId": 0
        },
        rules: {
          medProjectId: [
            { required: true, message: '请选择检验项目', trigger: 'change' }
          ],
          patientName: [
            { required: true, message: '请输入患者姓名', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          phoneNumber: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          birthday: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          nationality: [
            { required: true, message: '请选择检验项目', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      loadData(){
        var me=this;
        axios.post(apiConfig.user_get,{ id:me.id}).then(response=>{
            me.ruleForm = response.data.result;
        });
      },
      onConfirm() {
        var me=this;
        me.$refs.ruleForm.validate((valid) => {
          if (valid) {
              var me = this;
              var url= me.id===0 ?apiConfig.tester_create : apiConfig.tester_update;
              axios.post(url,me.ruleForm).then(response=>{  
                me.$emit("confirm",me.ruleForm);
              });
          }
          return valid;
        });
      },
      mounted(){
        var me = this;
        if(typeof me.$route.query.id === "string" && me.$route.query.id!=="0"){
          me.id = parseInt(me.$route.query.id);
          me.loadData();
        }
      }
    }
  }
</script>