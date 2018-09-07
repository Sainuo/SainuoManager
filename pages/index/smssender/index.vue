<template>
<div class="padding-xl">
        <div class="padding-m"><h1>短信群发</h1></div>
        <div style="padding:16px;">
            <el-button type="primary" @click="onAdd">群发短信</el-button>
        </div>
        <el-table :data="list.tableData"
                  border highlight-current-row
                  v-loading="list.loading"
                  class="col-12">
            <el-table-column type="index" label="序号" width="55" fixed />
            <el-table-column prop="templateId" label="模板ID" width="100" />
            <el-table-column prop="smsContent" label="短信内容" width="500" />
            <el-table-column prop="creatorName" label="发送人" width="150" />
            <el-table-column prop="creationTime" label="发送时间" width="500">
                <template slot-scope="{row}">{{row.creationTime|time}}</template>
            </el-table-column>
            <el-table-column prop="sendNumber" label="发送总量" width="100" />
            <el-table-column prop="successNumber" label="成功总量" width="100" />
            <el-table-column prop="failNumber" label="失败总量" width="100" />
            <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="{row}">
                    <el-button type="primary" size="mini" icon="el-icon-view" @click="onShow(row)">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="clear"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="list.currentPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="list.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="list.total">
        </el-pagination>
    </div>
</template>
<script>
import axios from "axios"
import apiConfig from "~/static/apiConfig"
export default{
    data:() =>({
        list: {
            tableData: [],
            multipleSelection: [],
            loading: false,
            currentPage: 1,
            pageSize: 20,
            total: 0
        }
    }),
    methods: {
        getSkip () {
            var me = this;
            return (me.list.currentPage - 1) * me.list.pageSize;
        },
        handleSizeChange(val) {
            this.list.pageSize = val;
            this.loadData();
        },
        handleCurrentChange (val) {
            this.list.currentPage = val;
            this.loadData();
        },
        onAdd() {
            var me = this;
            me.$loaderwindow({
                path:"/smssender/edit",
                title:"群发短信",
                width:'90%',
                top:'50px'
            }).then( model => {
                me.$message({ type: "success", message: "发送成功！" });
                me.loadData();
            }).catch(x=>{});
        },
        onShow(model) {
            var me = this;
            me.$loaderwindow({
                path:`/smssender/info?id=${model.id}`,
                title:"查看发送记录",
                width:'70%'
            }).catch(x => {});
        },
        loadData () {
            var me=this;
            let s=me.search;
            me.list.loading = true;
            axios.get(apiConfig.smsrecord_list,{
                params:{skipCount: me.getSkip(),maxResultCount: me.list.pageSize}
            }).then(response => {
                me.list.tableData = response.data.result.items;
                me.list.total = response.data.result.totalCount;
                me.list.loading=false;
            }).catch(x=>{
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
    