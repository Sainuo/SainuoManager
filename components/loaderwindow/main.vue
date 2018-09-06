<template>
  <el-dialog :title="title" :visible.sync="visible" :top="top" :width="width" :fullscreen="fullscreen" :modal="true" @close="onClose" @closed="onClosed">
    <nuxt-loader ref="nl" :path="path" @confirm="onConfirm" @cancel="onCancel"></nuxt-loader>
  </el-dialog>
</template>
<script>
import nuxtloader from "../nuxt-loader"

export default {
  data:()=>({
      title:"window",
      visible:false,
      fullscreen:false,
      width:"50%",
      top:"15vh",
      path:""
  }),
  methods:{
    onClose(){
      this.$emit("cancel",{target:this,model:this.$refs.nl.$data})
    },
    onClosed(){
      this.$el.innerHTML='';
      this.$destroy();
    },
    onConfirm(evt){
        this.$emit("confirm",evt)
        this.visible=false
    },
    onCancel(evt){
        this.$emit("cancel",evt)
        this.visible=false
    }
  },
  components:{
    'nuxt-loader':nuxtloader
  },
  mounted(){
    this.$nextTick(()=>{
      this.visible=true
    })
  }
}
</script>
<style>
.el-dialog__header{
  border-bottom:1px solid #ebeef5;
}
</style>
