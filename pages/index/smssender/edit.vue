<template>
    <div class="sms-sender">
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="title"><strong>请选择要发送的角色（多选）：</strong></div>
                <div class="data-box">
                    <el-table :data="roles" @selection-change="onCheckRole" border size="mini" style="clear:both;">
                        <el-table-column type="selection" width="55" />
                        <el-table-column type="index" label="序号" width="55" />
                        <el-table-column prop="displayName" label="角色名称" />
                        <el-table-column prop="description" label="角色备注" />
                    </el-table>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="title"><strong>请选择要发送的组织机构（多选）：</strong></div>
                <div class="data-box">
                    <el-tree ref="tree" :data="orgs" @check="onCheckOrg($refs.tree)" show-checkbox node-key="id" :default-expand-all="true" :props="{children:'children',label:'displayName'}" />
                </div>
            </el-col>
            <el-col :span="8">
                <div class="title"><strong>请选择要发送的短信（单选）：</strong></div>
                <div class="data-box">
                    <el-table :data="temps" border size="mini" style="clear:both;">
                        <el-table-column width="55">
                            <template slot-scope="{row}">
                                <el-checkbox v-model="row['checked']" @change="x=>onCheckTemp(x,row)"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column prop="sms_content" label="短信内容" />
                    </el-table>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10" v-if="parm">
            <el-col>
                <div class="title"><strong>请选择要排除的用户：</strong></div>
                <div class="data-box">
                    <el-table :data="users" @selection-change="onCheckUser" border size="mini" style="clear:both;">
                        <el-table-column type="selection" width="55" />
                        <el-table-column type="index" label="序号" width="55" />
                        <el-table-column prop="userName" label="用户名" />
                        <el-table-column prop="name" label="用户姓名" />
                        <el-table-column prop="phoneNumber" label="电话号码" />
                    </el-table>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div style="text-align:right;padding-right:50px;">
                    <el-button type="primary" @click="onSubmit()" :disabled="disabled" :loading="sending">发送</el-button>
                    <el-button @click="$emit('cancel')">取消</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from "axios"
import apiConfig from "~/static/apiConfig"
export default {
    data(){
        return{
            loading:false,
            parm:false,
            disabled:true,
            sending:false,
            orgs:[],
            roles:[],
            users:[],
            temps:[],
            checkedOrgIds:[],
            checkedRoleIds:[],
            checkedUserIds:[],
            checkedTempId:''
        }
    },
    watch:{
        checkedOrgIds(){this.onChangeParms();},
        checkedRoleIds(){this.onChangeParms();},
        checkedTempId(){this.onChangeParms();}
    },
    methods:{
        onChangeParms(){
            var me=this,orgs=me.checkedOrgIds,roles=me.checkedRoleIds;
            if(orgs&&orgs.length&&roles&&roles.length){
                me.loadUsers();
            }else{
                me.users=me.checkedUserIds=[];
                me.parm=false;
                me.disabled=true;
            }
        },
        onCheckRole(items){
            var me=this;
            me.checkedRoleIds=items.map(x=>x.id);
        },
        onCheckOrg(tree){
            var me=this;
            var list=tree.getCheckedKeys();
            me.checkedOrgIds=list.concat(tree.getHalfCheckedKeys());
        },
        onCheckTemp(status,item){
            var me=this,temps=me.temps,id=status?item.template_id:'';
            var list=temps.map(x=>{
                x.checked=id==x.template_id?status:false;
                return x;
            });
            me.temps=list;
            me.checkedTempId=id;
        },
        onCheckUser(items){
            var me=this,list=me.users.legth;
            me.checkedUserIds=items.map(x=>x.id);
            me.disabled=me.users.length==me.checkedUserIds.length?true:false;
        },
        onSubmit(){
            var me=this;
            this.$confirm('此操作将按照选择的条件发送短信, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(me.sendSms).catch(x=>{});
        },
        sendSms(){
            var me=this;
            var orgs=me.checkedOrgIds,roles=me.checkedRoleIds;
            var users=me.checkedUserIds,temp=me.checkedTempId;
            me.sending=true;
            axios.post(apiConfig.smsmaner_send,{
                orgIds:orgs,roleIds:roles,exceptUserIds:users,templateId:temp
            }).then(x=>{
                me.sending=false;
                me.$emit('confirm');
            }).catch(x=>{
                me.sending=false;
            });
        },
        loadOrgs(){
            var me=this;
            return new Promise((resolve,reject)=>{
                axios.get(apiConfig.smsmaner_org_tree).then(x=>{
                    resolve(x.data.result.items);
                }).catch(x=>{reject(x);});
            });
        },
        loadRoles(){
            var me=this;
            return new Promise((resolve,reject)=>{
                axios.get(apiConfig.smsmaner_role_list).then(x=>{
                    resolve(x.data.result.items);
                }).catch(x=>{reject(x);});
            });
        },
        loadTemps(){
            var me=this;
            return new Promise((resolve,reject)=>{
                axios.get(apiConfig.smsmaner_tmp_list).then(x=>{
                    resolve(x.data.result.templates.map(x=>{x.checked=false;return x;}));
                }).catch(x=>{reject(x);});
            });
        },
        loadUsers(){
            var me=this,orgs=me.checkedOrgIds,roles=me.checkedRoleIds;
            axios.get(apiConfig.smsmaner_user_list,{
                params:{orgIds:orgs,roleIds:roles}
            }).then(x=>{
                me.users=x.data.result.items;
                me.parm=true;
                me.disabled=me.checkedTempId?false:true;
            }).catch(x=>{me.uloading=true;});
        },
        async loadData(){
            var me=this;
            me.loading=true;
            try{
                me.orgs=await me.loadOrgs();
                me.roles=await me.loadRoles();
                me.temps=await me.loadTemps();
                me.loading=false;
            }catch(x){
                me.loading=false;
            }
        }
    },
    mounted(){
        var me=this;
        me.loadData();
    }
}
</script>

<style lang="scss">
.sms-sender{
    padding:0 20px;
    .title{padding:10px 5px;}
    .data-box{
        height:300px;
        overflow-x: hidden;
        overflow-y: auto;
    }
}
</style>
