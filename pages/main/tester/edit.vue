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
        <el-form-item label="民族" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
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
        ruleForm: {
            "medProjectId": 0,
            "patientName": "",
            "gender": 0,
            "phoneNumber": "",
            "birthday": new Date(),
            "nationality": "",
            "smsCode": "",
            "organizationId": 0
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>