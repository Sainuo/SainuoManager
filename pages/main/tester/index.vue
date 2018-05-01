<template>
<div class="padding-l">
        <el-row class="padding-l">
            <el-col :span="12">
                <span class="font-weight-blder">审计日志</span>
            </el-col>
        </el-row>
        <el-form :inline="true" v-model="search" class="background-color-minor margin-bottom-m padding-m">
            <el-form-item label="" prop="crfNumber">
                <el-input placeholder="CRF号" v-model="search.crfNumber"></el-input>
            </el-form-item>
            <el-form-item label="" prop="crfNumber">
                <el-input placeholder="CRF号" v-model="search.crfNumber"></el-input>
            </el-form-item>
            <el-form-item label="" prop="date">
                    <el-date-picker
                        placeholder="生日区间"
                        v-model="search.date"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-date-picker>
            </el-form-item>
            <el-form-item label="" prop="serviceName">
                <el-select v-model="search.gender" placeholder="性别">
                    <el-option label="全部" :value=null>全部</el-option>
                    <el-option label="男" :value=1>成功</el-option>
                    <el-option label="女" :value=2>失败</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="" prop="serviceName">
                <el-input placeholder="服务名称" v-model="search.serviceName"></el-input>
            </el-form-item>
            <el-form-item label=""  prop="serviceName">
                <el-input placeholder="方法名称" v-model="search.methodName"></el-input>
            </el-form-item>
            <el-form-item label=""  prop="userName">
                  <el-input placeholder="用户名" v-model="search.userName"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="loadData">查询</el-button>
                <el-button type="primary" icon="el-icon-plus" @click="onAdd">添加受试者</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="list.tableData"
                  border highlight-current-row
                  v-loading="list.loading"
                  @sort-change="handleSortChange"
                  :default-sort="{prop: 'name', order: 'descending'}"
                  class="col-12">
            <el-table-column prop="exception"
                             label="状态"
                             sortable
                             width="80">
            <template slot-scope="scope">
                <el-tag
                :type="scope.row.exception === null ? 'success' : 'danger'"
                disable-transitions>{{scope.row.exception === null ? '成功' : '失败'}}</el-tag>
            </template>
            </el-table-column>
            <el-table-column prop="nationality"
                             label="中心号"
                             sortable
                             width="120">
            </el-table-column>
            <el-table-column prop="crfNumber"
                             label="CRF号"
                             sortable
                             width="120">
            </el-table-column>
            <el-table-column prop="patientName"
                             width="200"
                             label="受试者姓名">
            </el-table-column>
            <el-table-column prop="birthday"
                             width="120"
                             label="出生日期">
            </el-table-column>
            <el-table-column prop="gender"
                             label="性别"
                             width="200">
            </el-table-column>
            <el-table-column prop="medProjectName"
                             label="受试项目"
                             width="200">
            </el-table-column>
            <el-table-column prop="phoneNumber"
                             label="手机号码"
                             width="200">
            </el-table-column>
            <el-table-column prop="quit"
                             label="剔除"
                             width="200">
            </el-table-column>
            <el-table-column prop="notQualified"
                             label="脱落"
                             width="200">
            </el-table-column>
            <el-table-column label="操作"
                             fixed="right"
                             width="400">
                <template slot-scope="scope">
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        操作<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click="onView(scope.row)">查看CRF</el-dropdown-item>
                        <el-dropdown-item @click="onNotQualified(scope.row)">剔除</el-dropdown-item>
                        <el-dropdown-item @click="onQuit(scope.row)">脱落</el-dropdown-item>
                        <el-dropdown-item @click="onSMS(scope.row)">发送短信</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
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
        search: {
            gender:null,
            phoneNumber: "",
            userName:"",
            crfNumber:"",
            date:[]
        },
        list: {
            tableData: [],
            multipleSelection: [],
            loading: false,
            currentPage: 1,
            pageSize: 20,
            total: 0,
            sort: {}
        },
        currentUserId:0
    }),
    methods: {
        handleSortChange(sort) {
            var me = this;
            me.list.sort = {};
            if (sort.column !== null) {
                me.list.sort[sort.prop] = sort.order === "ascending" ? "asc" : "desc";
            }
            me.loadData();
        },
        getSort() {
            var me = this;
            var sort = me.list.sort;
            var sorts = [];
            for (var p in sort) {
                sorts.push(p + " " + sort[p]);
            }
            var r = sorts.join(",");
            return r === "" ? undefined : r;
        },
        getSkip () {
            var me = this;
            return (me.list.currentPage - 1) * me.list.pageSize;
        },
        handleSizeChange(val) {
            this.list.pageSize = val;
        },
        handleCurrentChange (val) {
            this.list.currentPage = val;
            this.loadData();
        },
        onAdd() {
            var me = this;
            me.$loaderwindow("/main/user/edit?id=0", "添加受试者")
                .then( model => {
                    me.$message({ type: "success", message: "创建用户成功！" });
                    me.loadData();
                });
        },
        onEdit(model) {
            var me = this;
            me.$loaderwindow("/main/user/edit?id=0", `编辑受试者`)
                .then( model => {
                    me.$message({ type: "success", message: "创建用户成功！" });
                    me.loadData();
                });
        },
        onView(model) {
            var me = this;
            console.log(model);
            me.$loaderwindow(`/main/user/edit?id=${model.id}`, `编辑用户`)
                .then(m => {
                    me.$message({ type: "success", message: "编辑用户成功！" });
                    me.loadData();
                });
        },
        onNotQualified(model) {
            var me = this;
            console.log(model);
            me.$loaderwindow(`/main/user/edit?id=${model.id}`, `编辑用户`)
                .then(m => {
                    me.$message({ type: "success", message: "编辑用户成功！" });
                    me.loadData();
                });
        },
        onQuit(model) {
            var me = this;
            console.log(model);
            me.$loaderwindow(`/main/user/edit?id=${model.id}`, `编辑用户`)
                .then(m => {
                    me.$message({ type: "success", message: "编辑用户成功！" });
                    me.loadData();
                });
        },
        onSMS(model) {
            var me = this;
            console.log(model);
            me.$loaderwindow(`/main/user/edit?id=${model.id}`, `编辑用户`)
                .then(m => {
                    me.$message({ type: "success", message: "编辑用户成功！" });
                    me.loadData();
                });
        },
        loadData () {
            var me=this;
            let s=me.search;
            me.loading = true;
            axios.get(apiConfig.log_audited_get,{params:
                    {
                        userName:s.userName,
                        serviceName:s.serviceName,
                        actionName:s.actionName,
                        hasException:s.hasException,
                        startTime:typeof s.date ==="undefined"?s.date[0] :null,
                        endTime:typeof s.date ==="undefined"?s.date[0] :null,
                        skipCount: me.getSkip(),
                        maxResultCount: me.list.pageSize
                    }
                }
            )
            .then(response => {
                me.list.tableData = response.data.result.items;
                me.list.total = response.data.result.totalCount;
                me.loading=false;
            }).catch(response=>{
                me.loading=false;
            });
        }
    },
    mounted () {
        var me = this;
        me.loadData();
    }
};
</script>