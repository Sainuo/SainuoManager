<template>
    <div>
        <div><h2>肝硬度检测 （肝纤维化检验）用Fibro-Touch或肝组织活检检测患者肝脏硬度状态</h2></div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
            <el-form-item label="检查">
                <el-radio class="radio" v-model="ruleForm.checked" :label="true">已查</el-radio>
                <el-radio class="radio" v-model="ruleForm.checked" :label="false">未查</el-radio>
                <el-input v-if="!ruleForm.checked" v-model="ruleForm.notCheckReason" placeholder="请填写未查原因"></el-input>
            </el-form-item>
            <el-form-item label="检查日期">
                <el-date-picker v-model="ruleForm.testDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="检查结果">
                <el-input v-if="ruleForm.checked"  v-model="ruleForm.testResult" type="textarea" :rows="2" :autosize="{ minRows: 2}" placeholder="请输入检查的结果"></el-input>
                <template v-else>
                    &nbsp;
                </template>
            </el-form-item>
            <div class="text-align-right">
                <el-button @click="$emit('cancel')">取消</el-button>
                <el-button @click="onConfirm" type="primary">保存</el-button>
            </div>
        </el-form>
    </div>
</template>
<script>
import axios from "axios";
import apiConfig from "~/static/apiConfig";
import utility from "~/static/javascript/utility";

export default {
  data() {
    return {
        id: 0,
        ruleForm:{
            "id": 0,
            "crfBasicId": 0,
            "checked": true,
            "notCheckReason": "",
            "testDate": new Date(),
            "testResult": ""
        },
        rules: {}
    };
  },
  methods: {
    loadData() {
      var me = this;
      axios
        .get(apiConfig.medItemHepatocirrhosisTest_get, { params: { id: me.id } })
        .then(response => {
          me.ruleForm = utility.toClientModel(response.data.result);
        });
    },
    onConfirm() {
      var me = this;
      me.$refs.ruleForm.validate(valid => {
        if (valid) {
          var me = this;
          axios
            .put(
              apiConfig.medItemHepatocirrhosisTest_put,
              utility.toServerModel(me.ruleForm)
            )
            .then(response => {
              me.$emit("confirm", me.ruleForm);
            });
        }
        return valid;
      });
    }
  },
  mounted() {
    var me = this;
    if (typeof me.$route.query.id === "string" && me.$route.query.id !== "0") {
      me.id = parseInt(me.$route.query.id);
      me.loadData();
    }
  }
};
</script>