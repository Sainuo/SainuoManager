<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="组织名称">
            <el-input v-model="name" placeholder="输入栏目名称200字以内" :max=200></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
  data:()=>({
      ruleForm:{
          name:""
      }
  }),
  methods:{
      onSave(){

      },
      loadData(){
          
      }
  }
}
</script>

