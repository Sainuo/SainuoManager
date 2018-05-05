<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="CRF号" prop="crfNumber">
          <el-input-number v-model="ruleForm.crfNumber" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item label="检验阶段" prop="crfNumber">
          <biz-select v-model="ruleForm.crfNumber" :min="1"></biz-select>
        </el-form-item>
        <el-form-item label="访视日期" prop="visitTime">
            <el-date-picker v-model="ruleForm.visitTime" type="date" placeholder="选择访视日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="访视" prop="visitNumber">
          <el-select v-model="ruleForm.visitNumber" placeholder="访视" clearable>
              <el-option v-for="(i,index) of 10" :label="'V'+index" :key=index :value="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="患者姓名" prop="medProjectId">
          <span>{{tester.patientName}}</span>
        </el-form-item>
        <el-form-item label="手机号码" prop="medProjectId">
          <span>{{tester.phoneNumber}}</span>
        </el-form-item>
        <el-form-item label="性别" prop="medProjectId">
          <span>{{tester.gender?"男":"女"}}</span>
        </el-form-item>
        <el-form-item label="出生日期" prop="medProjectId">
          <span>{{tester.birthday}}</span>
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
  import utility from "~/static/javascript/utility"

  export default {
    components:{
        'biz-select':BizSelect
    },
    data() {
      return {
        id:0,
        crfNumber:1,
        tester:{
            "userId": 0,
            "patientName": "string",
            "medProjectId": 0,
            "gender": 0,
            "phoneNumber": "",
            "birthday": "2018-05-05T08:59:49.614Z",
            "nationality": "string",
            "quit": true,
            "notQualified": true,
            "crfNumber": 0
        },
        ruleForm: {
            "userId": 0,
            "medicalExamPhaseId": 0,
            "medicalExamProjectId": 0,
            "visitTime": "2018-05-05T08:59:49.608Z",
            "visitNumber": 0
        },
        rules: {
          medProjectId: [
            { required: true, message: '请选择检验项目', trigger: 'change' }
          ]
        }
      };
    },
    watch:{
      crfNumber(val,oldVal){
        this.getTestByCRF();
      }
    },
    methods: {
      loadData(){
        var me=this;
        axios.get(apiConfig.tester_read,{ params:{ demologyId:me.id}}).then(response=>{
            me.ruleForm = utility.toClientModel(response.data.result);
        });
      },
      getTestByCRF(){
        var me=this;
        axios.get(apiConfig.tester_read_by_crf,{ params:{ crfNumber:me.crfNumber}}).then(response=>{
            me.tester=response.data.result;
            me.ruleForm.userId=me.tester.userId;
            me.ruleForm.medProjectId=me.tester.medProjectId;
        });
      },
      onConfirm() {
        var me=this;
        me.$refs.ruleForm.validate((valid) => {
          if (valid) {
              var me = this;
              if(me.id===0){
                axios.post(apiConfig.tester_create,utility.toServerModel(me.ruleForm)).then(response=>{
                  me.$emit("confirm",me.ruleForm);
                });
              }
              else{
                axios.put(apiConfig.tester_update,utility.toServerModel(me.ruleForm)).then(response=>{
                  me.$emit("confirm",me.ruleForm);
                });
              }
          }
          return valid;
        });
      },
      onSendSMS(){
        let me=this;
        me.$refs.ruleForm.validateField("phoneNumber",(errorMessage)=>{
          if(errorMessage===""){
            axios.get(apiConfig.tester_sms_red,{params:{phoneNumber:me.ruleForm.phoneNumber}});
          }
        });
      }
    },
    mounted(){
        var me = this;
        if(typeof me.$route.query.id === "string" && me.$route.query.id!=="0"){
          me.id = parseInt(me.$route.query.id);
          me.loadData();
        }
    }
  }
</script>