<template>
    <div>
        <div>合并用药（肝纤维化检验）</div>
        <div>
            <div>自上次访视以来，是否有新的合并用药？</div>
            <el-radio class="radio" v-model="ruleForm.hadPastYearDiseaseHistory" :label="0">否</el-radio>
            <el-radio class="radio" v-model="ruleForm.hadPastYearDiseaseHistory" :label="1">是</el-radio>
            <span>如果“是”请在下面详述</span>
        </div>
        <el-form label-width="120px">
            <div v-for="(item,index) in ruleForm.pastDiseaseHistoryFromJson" :key="index">
                <el-form-item label="药物名称">
                    <el-input v-model="item.dieaseName" placeholder="请输入药物名称"></el-input>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button size="small" type="danger" icon="el-icon-delete"  @click="onDelete(item,index)">删除</el-button>
                </el-form-item>
            </div>
            <div>
                <el-button icon="el-icon-plus" @click="onAdd" class="col-12">添加合并用药记录</el-button>
            </div>
        </el-form>
        <div class="text-align-right">
            <el-button @click="$emit('cancel')">取消</el-button>
            <el-button @click="onConfirm" type="primary">保存</el-button>
        </div>
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
        hadPastYearDiseaseHistory: 0,
        pastDiseaseHistoryFromJson: [
            {
                "drugName": "string",
                "quantityUse": "string",
                "startUseTime": "2018-05-08T09:18:55.862Z",
                "endUseTime": "2018-05-08T09:18:55.862Z",
                "otherNote": "string"
            }
        ]
      },
      rules: {}
    };
  },
  methods: {
    onAdd() {
      let me = this;
      me.ruleForm.pastDiseaseHistoryFromJson.push({
        dieaseName: "",
        isTreating: false
      });
    },
    onDelete(item,index){
        let me=this;
        me.$confirm(`确定删除${item.dieaseName}?`).then(response=>{
            me.ruleForm.pastDiseaseHistoryFromJson.splice(index,1);
        });
    },
    loadData() {
      var me = this;
      axios
        .get(apiConfig.medItemDrugCombinationRecord_get, { params: { id: me.id } })
        .then(response => {
          me.ruleForm = utility.toClientModel(response.data.result);
        });
    },
    onConfirm() {
      var me = this;
      axios
        .put(
          apiConfig.medItemDrugCombinationRecord_put,
          utility.toServerModel(me.ruleForm)
        )
        .then(response => {
          me.$emit("confirm", me.ruleForm);
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