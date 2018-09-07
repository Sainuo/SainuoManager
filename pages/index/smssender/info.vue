<template>
    <div class="sms-record-info">
        <el-form :model="info" size="mini">
            <el-row :gutter="5" class="record-row">
                <el-col :span="12">
                    <el-form-item label="目标组织：">{{info.orgNames?info.orgNames.join(','):''}}</el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="目标角色：">{{info.roleNames?info.roleNames.join(','):''}}</el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="5" class="record-row">
                <el-col :span="6">
                    <el-form-item label="模板ID：">{{info.templateId}}</el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="发送总量：">{{info.sendNumber}}</el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="成功总量：">{{info.successNumber}}</el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="失败总量：">{{info.failNumber}}</el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="5" class="record-row">
                <el-col :span="24">
                    <el-form-item label="短信内容：">{{info.smsContent}}</el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <el-tabs v-model="activeTab">
            <el-tab-pane label="成功用户" name="1">
                <el-table :data="info.successUsers" border size="mini">
                    <el-table-column type="index" label="序号" width="55" />
                    <el-table-column prop="userName" label="用户姓名" />
                    <el-table-column prop="phoneNumber" label="电话号码" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="失败用户" name="2">
                <el-table :data="info.failUsers" border size="mini">
                    <el-table-column type="index" label="序号" width="55" />
                    <el-table-column prop="userName" label="用户姓名" />
                    <el-table-column prop="phoneNumber" label="电话号码" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="排除用户" name="3">
                <el-table :data="info.exceptUsers" border size="mini">
                    <el-table-column type="index" label="序号" width="55" />
                    <el-table-column prop="userName" label="用户姓名" />
                    <el-table-column prop="phoneNumber" label="电话号码" />
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import axios from "axios"
import apiConfig from "~/static/apiConfig"
export default {
    data(){
        return {
            id:0,
            loading:false,
            info:{},
            activeTab:'1'
        }
    },
    methods:{
        loadData(){
            var me=this;
            me.loading=true;
            axios.get(apiConfig.smsrecord_read,{
                params:{id:me.id}
            }).then(x=>{
                me.info=x.data.result;
            }).catch(x=>{
                me.loading=false;
            })
        }
    },
    mounted(){
        var me=this,q=me.$route.query;
        if(!q['id']||q['id']<1){return false;}
        me.id=parseInt(q['id']);
        me.loadData();
    }
}
</script>

<style>
.sms-record-info{
    padding:0 20px;
}
.record-row{border:1px solid #eee;}
.el-form-item--mini.el-form-item{
    margin:10px;
}
</style>
