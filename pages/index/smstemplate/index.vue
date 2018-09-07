<template>
<div class="padding-xl">
        <div class="padding-m"><h1>短信模板管理</h1></div>
        <div style="padding:16px;">
            <el-button type="primary" @click="onAdd">添加</el-button>
        </div>
        <el-table :data="list.tableData"
            border size="mini" highlight-current-row
            v-loading="list.loading"
            class="col-12">
            <el-table-column type="index" label="序号" width="80" fixed />
            <el-table-column prop="sms_title" label="标题" width="180" />
            <el-table-column prop="sms_signature" label="签名" width="180" />
            <el-table-column prop="sms_content" label="内容" width="300" />
            <el-table-column prop="add_date" label="创建时间" width="150" />
            <el-table-column prop="edit_date" label="修改时间" width="150" />
            <el-table-column prop="template_status_description" label="状态描述" width="100" />
            <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="{row}">
                    <el-button type="danger" size="mini" icon="el-icon-delete" @click="onDelete(row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import axios from "axios"
import apiConfig from "~/static/apiConfig"
export default{
    data:() =>({
        list: {
            tableData: [],
            loading: false
        }
    }),
    methods: {
        onAdd() {
            var me = this;
            me.$loaderwindow({
                path:"/smstemplate/edit?id=0",
                title:"创建短信模板"
            }).then( model => {
                me.$message({ type: "success", message: "创建成功！" });
                me.loadData();
            }).catch(x=>{});
        },
        onDelete(model) {
            var me = this;
            if (model) {
                me.$confirm('是否永久删除[' + model.sms_title + ']?', '询问', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.delete(apiConfig.smstp_delete,{
                        params:{templateId:model.template_id}
                    }).then(x=>{
                        me.$message({ type: "success", message: "删除成功！" });
                        me.loadData();
                    }).catch(x=>{});
                }).catch(x=>{});
            } else {
                me.$alert("请勾中要删除的项");
            }
        },
        loadData () {
            var me=this;
            let s=me.search;
            me.list.loading = true;
            axios.get(apiConfig.smstp_list)
            .then(response => {
                me.list.tableData = response.data.result.templates;
            }).finally(response=>{
                me.list.loading=false;
            });
        }
    },
    mounted () {
        var me = this;
        me.loadData();
    }
};
</script>