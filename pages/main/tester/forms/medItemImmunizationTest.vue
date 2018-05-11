<template>
    <div>
        <div><h2>免疫学和特殊化学检查 （肝纤维化检验）</h2></div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
            <div>
                <span>检查日期</span>
                <el-date-picker v-model="ruleForm.testDate" type="date" placeholder="选择日期"></el-date-picker>
            </div>
            <div>
               <table>
                   <thead>
                       <tr><th>检查项目</th><th>检查</th><th>结果</th><th>单位</th><th>临床意义（如超出正常值范围）</th></tr>
                   </thead>
                    <tbody>
                        <tr>
                            <td>抗-HIV</td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.hivCheck" :label="false">未查</el-radio>
                                <el-radio class="radio" v-model="ruleForm.hivCheck" :label="true">已查</el-radio>
                            </td>
                            <td>
                                <el-input-number v-model="ruleForm.hivResult"></el-input-number>
                            </td>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.hivMeaning" :label="null">未填写</el-radio>
                                <el-radio class="radio" v-model="ruleForm.hivMeaning" :label="false">无</el-radio>
                                <el-radio class="radio" v-model="ruleForm.hivMeaning" :label="true">有</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>抗核抗体（ANA）</td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.anaCheck" :label="false">未查</el-radio>
                                <el-radio class="radio" v-model="ruleForm.anaCheck" :label="true">已查</el-radio>
                            </td>
                            <td>
                                <el-input-number v-model="ruleForm.anaResult"></el-input-number>
                            </td>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.anaMeaning" :label="null">未填写</el-radio>
                                <el-radio class="radio" v-model="ruleForm.anaMeaning" :label="false">无</el-radio>
                                <el-radio class="radio" v-model="ruleForm.anaMeaning" :label="true">有</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>甲胎蛋白（AFP）</td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.afpCheck" :label="false">未查</el-radio>
                                <el-radio class="radio" v-model="ruleForm.afpCheck" :label="true">已查</el-radio>
                            </td>
                            <td>
                                <el-input-number v-model="ruleForm.afpResult"></el-input-number>
                            </td>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.afpMeaning" :label="null">未填写</el-radio>
                                <el-radio class="radio" v-model="ruleForm.afpMeaning" :label="false">无</el-radio>
                                <el-radio class="radio" v-model="ruleForm.afpMeaning" :label="true">有</el-radio>
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
            "hivCheck": true,
            "hivMeaning": true,
            "hivResult": 0,
            "anaCheck": true,
            "anaMeaning": true,
            "anaResult": 0,
            "afpCheck": true,
            "afpMeaning": true,
            "afpResult": 0
        },
        rules: {}
    };
  },
  methods: {
    loadData() {
      var me = this;
      axios
        .get(apiConfig.medItemImmunizationTest_get, { params: { id: me.id } })
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
              apiConfig.medItemImmunizationTest_put,
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