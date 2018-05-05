<template>
  <div>
      <el-alert title="剔除病例将导致该受试者的所有CRF文档被标记为已剔除，但保留数据，请谨慎操作！"  type="warning" :closable="false"></el-alert>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <div v-for="(option,index) in options" :key="index" label="">
            <el-radio v-model="ruleForm.reasonId" name="reasonId" :label="option.reasonId">{{option.reasonName}}</el-radio>
        </div>
        <el-input type="textarea" v-model="ruleForm.otherReason"></el-input>
        <div class="text-align-right margin-top-xl">
            <el-button @click="$emit('cancel')">取消</el-button>
            <el-button @click="onConfirm" type="primary">保存</el-button>
        </div>
    </el-form>
  </div>
</template>
<script>
  import axios from "axios"
  import apiConfig from "~/static/apiConfig"
  import BizSelect from "~/components/BizSelect.vue"
  import ButtonCooldown from "~/components/ButtonCooldown.vue"

  export default {
    components:{
        'biz-select':BizSelect,
        "button-cooldown":ButtonCooldown
    },
    data() {
      return {
        id:0,
        options:[],
        ruleForm: {
          "demologyId": 0,
          "reasonId": 0,
          "otherReason": "string"
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
            { min: 11, max: 11, message: '长度在11个字符', trigger: 'blur' }
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
        axios.post(apiConfig.tester_not_qualified_reason_read,{ demologyId:me.id}).then(response=>{
            me.ruleForm = response.data.result;
        });
      },
      loadOptions(){
        let me=this;
        axios.get(apiConfig.tester_not_qualified_reasons_get).then(response=>{
            me.options = response.data.result;
        });
      },
      onConfirm() {
        var me=this;
        me.$refs.ruleForm.validate((valid) => {
          if (valid) {
            var me = this;
            if(me.id===0) {
              axios.post(apiConfig.tester_not_qualified_reason_create,me.ruleForm).then(response=>{  
                me.$emit("confirm",me.ruleForm);
              });
            }
            else{
              axios.put(apiConfig.apiConfig.tester_not_qualified_reason_update,me.ruleForm).then(response=>{  
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
          me.loadOptions();
          me.loadData();
        }
    }
  }
</script>

