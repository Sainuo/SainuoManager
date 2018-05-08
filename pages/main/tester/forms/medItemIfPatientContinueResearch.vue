<template>
    <div>
        <div>受试者是否继续本研究（肝纤维化检验）</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
            <div>
                <div>自上次访视以来，是否有新的合并用药？</div>
                <el-radio v-model="ruleForm.continueResearch" :label="false">否</el-radio>
                <el-radio v-model="ruleForm.continueResearch" :label="true">是</el-radio>
            </div>
            <div>
                <el-form-item label="下次随访时间">
                    <el-date-picker v-model="ruleForm.nextVisitTime" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
            </div>
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
            "continueResearch": true,
            "nextVisitTime": new Date()
        },
      rules: {}
    };
  },
  methods: {
    loadData() {
      var me = this;
      axios
        .get(apiConfig.medItemIfPatientContinueResearch_get, { params: { id: me.id } })
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
              apiConfig.medItemIfPatientContinueResearch_put,
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