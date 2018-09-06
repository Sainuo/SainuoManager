<template>
    <div class="smstemplate">
        <el-form ref="form" :model="form" status-icon :rules="rules" label-width="100px">
            <el-form-item label="短信标题" prop="title" >
                <el-input v-model="form.title" />
            </el-form-item>
            <el-form-item label="短信内容" prop="content" >
                <el-input type="textarea" v-model="form.content" :rows="5" />
            </el-form-item>
            <el-form-item label="短信签名" prop="postSmSSignature" >
                <el-input v-model.number="form.postSmSSignature" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button @click="onReset()">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from "axios"
import apiConfig from "~/static/apiConfig"
export default {
    data(){
        return{
            loading:false,
            form:{
                title:"",
                content:"",
                postSmSSignature:""
            },
            rules:{
                title:[{required:true,message:'短信标题不能为空！',trigger: 'blur'}],
                content:[{required:true,message:'短信内容不能为空！',trigger: 'blur'}],
                postSmSSignature:[{required:true,message:'短信签名不能为空！',trigger: 'blur'}]
            }
        }
    },
    methods:{
        onSubmit(){
            var me=this,form=me.$refs.form;
            me.loading=true;
            form.validate(x=>{
                if(!x){return false;}
                axios.post(apiConfig.smstp_create,me.form).then(x=>{
                    me.loading=false;
                    me.$emit('confirm',true);
                }).catch(x=>{me.loading=false;});
            });
        },
        onReset(){
            var me=this;
            me.form={title:"",content:"",postSmSSignature:""};
        }
    }
}
</script>

<style>
.smstemplate{
    padding:20px;
}
</style>
