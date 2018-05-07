<template>
    <div>
        <div>血常规检查（肝纤维化检验）</div>
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
                            <td>白细胞总数WBC</td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.whiteBloodCellCheck" :label="false">未查</el-radio>
                                <el-radio class="radio" v-model="ruleForm.whiteBloodCellCheck" :label="true">已查</el-radio>
                            </td>
                            <td>
                                <el-input-number v-model="ruleForm.whiteBloodCell"></el-input-number>
                            </td>
                            <td>
                                ×109 /L
                            </td>
                            <td>
                                <el-radio class="radio" v-model="ruleForm.whiteBloodCellMeaning" :label="false">无</el-radio>
                                <el-radio class="radio" v-model="ruleForm.whiteBloodCellMeaning" :label="true">有</el-radio>
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
      ruleForm: {
        id: 0,
        crfBasicId: 0,
        whiteBloodCellCheck: true,
        whiteBloodCellMeaning: true,
        whiteBloodCell: 0,
        redBloodCellCheck: true,
        redBloodCellMeaning: true,
        redBloodCell: 0,
        hemoglobinBloodCheck: true,
        hemoglobinBloodMeaning: true,
        hemoglobinBlood: 0,
        neutCheck: true,
        neutMeaning: true,
        neut: 0,
        lymphCheck: true,
        lymphMeaning: true,
        lymph: 0,
        monoCheck: true,
        monoMeaning: true,
        mono: 0,
        eoCheck: true,
        eoMeaning: true,
        eo: 0,
        basoCheck: true,
        basoMeaning: true,
        baso: 0,
        pltCheck: true,
        pltMeaning: true,
        plt: 0,
        testDate: "2018-05-07T12:51:57.559Z"
      },
      rules: {}
    };
  },
  methods: {
    loadData() {
      var me = this;
      axios
        .get(apiConfig.medItemBloodRoutineTest_get, { params: { id: me.id } })
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
              apiConfig.medItemBloodRoutineTest_put,
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