<template>
    <div>
        <div>备份血样（肝纤维化检验）（血清管5ml、抗凝管5ml）</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
            <div>留取备份血样</div>
            <div>
                <el-radio v-model="ruleForm.collected" :label="false">否</el-radio>
            </div>
            <div>
                <el-radio v-model="ruleForm.collected" :label="true">是</el-radio>
            </div>
            <el-form-item label="采样日期">
                <el-date-picker v-model="ruleForm.collectedDate" type="date" placeholder="选择日期"></el-date-picker>
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
        "collected": true,
        "collectedDate": "2018-05-08T09:18:55.700Z"
    },
      rules: {}
    };
  },
  methods: {
    loadData() {
      var me = this;
      axios
        .get(apiConfig.medItemBloodSampleBackup_get, { params: { id: me.id } })
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
              apiConfig.medItemBloodSampleBackup_put,
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