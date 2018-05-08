<template>
    <div>
        <div>心肌酶谱检查（肝纤维化检验）</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
            <div>
                <el-form-item label="检查日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.testDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
            </div>
            <div>
               <table>
                   <thead>
                       <tr><th>检查项目</th><th>检查</th><th>结果</th><th>单位</th><th>临床意义（如超出正常值范围）</th></tr>
                   </thead>
                    <tbody>
                        <tr>
                            <td>肌酸激酶（CK）</td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.ckCheck" :label="false">未查</el-radio>
                                <el-radio class="radio" v-model="ruleForm.ckCheck" :label="true">已查</el-radio>
                            </td>
                            <td>
                                <el-input-number v-model="ruleForm.ckResult"></el-input-number>
                            </td>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.ckMeaning" :label="false">无</el-radio>
                                <el-radio class="radio" v-model="ruleForm.ckMeaning" :label="true">有</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>乳酸脱氢酶（LDH）</td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.ldhCheck" :label="false">未查</el-radio>
                                <el-radio class="radio" v-model="ruleForm.ldhCheck" :label="true">已查</el-radio>
                            </td>
                            <td>
                                <el-input-number v-model="ruleForm.ldhResult"></el-input-number>
                            </td>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.ldhMeaning" :label="false">无</el-radio>
                                <el-radio class="radio" v-model="ruleForm.ldhMeaning" :label="true">有</el-radio>
                            </td>
                        </tr>
                    </tbody>
               </table>
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
        "testDate": new Date(),
        "hb1ACCheck": true,
        "hb1ACMeaning": true,
        "hb1ACResult": 0
      },
      rules: {}
    };
  },
  methods: {
    loadData() {
      var me = this;
      axios
        .get(apiConfig.medItemCKMBTest_get, { params: { id: me.id } })
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
              apiConfig.medItemCKMBTest_put,
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