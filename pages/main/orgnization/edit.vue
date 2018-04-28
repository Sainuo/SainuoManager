<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="组织名称">
            <el-input v-model="displayName" placeholder="输入栏目名称200字以内" :max=200></el-input>
        </el-form-item>
        <div class="text-align-right">
        <el-button @click="$emit('cancel')">取消</el-button>
        <el-button @click="onConfirm" type="primary">保存</el-button>
        </div> 
    </el-form>
</template>
<script>
import axios from "axios";
import apiConifg from "~/static/apiConfig";
export default {
  data: () => ({
    id: 0,
    ruleForm: {
      parentId: 0,
      displayName: "string"
    }
  }),
  methods: {
    onConfirm() {
      var me = this;
      var url =
        me.id === 0
          ? apiConfig.organization_create
          : apiConfig.organization_update;
          
      axios.post(url, me.ruleForm).then(response => {
        me.$emit("confirm", me.ruleForm);
      });
    },
    loadData() {
      var me = this;
      axios.post(apiConfig.user_get, { id: me.id }).then(response => {
        me.ruleForm = response.data.result;
      });
    }
  },
  mounted() {
    var me = this;
    let q = me.$route.query;
    if (typeof q.id === "string" && q.id !== "0") {
      me.id = parseInt(q.id);
      me.loadData();
    }
    if (typeof q.parentId === "string" && q.parentId !== "0") {
      me.ruleForm.parentId = parseInt(me.$route.query.parentId);
    }
  }
};
</script>