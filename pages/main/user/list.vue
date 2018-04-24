<template>
<div class="padding-l">
        <el-row class="padding-l">
            <el-col :span="12">
                <span class="font-weight-blder">用户管理</span>
            </el-col>
        </el-row>
        <el-form :inline="true" v-model="search" class="background-color-minor margin-bottom-m padding-m">
            <el-form-item prop="name">
                <el-input placeholder="输入关键字搜索" v-model="search.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="loadData">查询</el-button>
                <el-button type="primary" icon="el-icon-plus">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="list.tableData"
                  border highlight-current-row
                  v-loading="list.loading"
                  @sort-change="handleSortChange"
                  :default-sort="{prop: 'name', order: 'descending'}"
                  class="col-12">
            <el-table-column prop="name"
                             label="用户名"
                             sortable
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             label="角色">
            </el-table-column>
            <el-table-column prop="address"
                             label="姓名">
            </el-table-column>
            <el-table-column prop="address"
                             label="手机号码">
            </el-table-column>
            <el-table-column prop="date"
                             label="上次登录时间"
                             width="180">
            </el-table-column>
            <el-table-column prop="date"
                             label="创建时间"
                             width="180">
            </el-table-column>
            <el-table-column label="操作"
                             fixed="right"
                             width="400">
                <template slot-scope="scope">
                    <el-button size="small" icon="el-icon-edit" @click="onEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" icon="el-icon-delete"  @click="onDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="clear"
                    v-on:size-change="handleSizeChange"
                    v-on:current-change="handleCurrentChange"
                    v-bind:current-page="list.currentPage"
                    v-bind:page-sizes="[10, 20, 50, 100]"
                    v-bind:page-size="list.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    v-bind:total="list.total">
        </el-pagination>
    </div>
</template>
<script>
    import axios from "axios"
    import apiConfig from "~/static/apiConfig"
    export default{
        data:() =>({
            search: {
                name: ""
            },
            list: {
                tableData: [],
                multipleSelection: [],
                loading: false,
                currentPage: 1,
                pageSize: 20,
                total: 0,
                sort: {},
                toggle:""
            }
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
            onToggle(model) {
                var me = this;
                me.$http.put("/api/account/{staffUid}/{IsEnabled}".format({
                    staffUid: model.Uid,
                    IsEnabled: model.IsEnabled ? "Disable" : "Enable"
                })).then(response =>{});
            },
            onAdd() {
                var me = this;
                me.$loaderwindow("/Account/Detail?id=0", "创建用户")
                    .then( model => {
                        me.$message({ type: "success", message: "创建用户成功！" });
                        me.loadData();
                    });
            },
            onEdit(model) {
                var me = this;
                me.$loaderwindow("/Account/Detail", { Guid: model.Uid }, "编辑用户：{RealName}".format(model))
                    .then(model => {
                        me.$message({ type: "success", message: "编辑用户成功！" });
                        me.loadData();
                    });
            },
            onDelete(model) {
                var me = this;
                if (model) {
                    me.$confirm('是否永久删除[' + model.UserName + ']?', '询问', {
                        confirmButtonText: '删除',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        me.deleteSelect(model);
                    }).catch(() => {

                    });
                } else {
                    me.$alert("请勾中要删除的项");
                }
            },
            onResetPassword (model) {
                var me = this;
                me.$loaderwindow("/Account/ResetUserPassword", { Guid: model.Uid }, "重置密码：{RealName}".format(model), "tiny")
                    .then((model) => {
                        me.loadData();
                    });
            },
            loadData () {
                var me=this;
                me.loading = true;
                axios.post(apiConfig.user_all_get, {
                    skipCount: me.getSkip(),
                    maxResultCount: me.list.pageSize
                })
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
            window.vm = me;
            window.axios = axios;
            me.loadData();
        }
    };
</script>
    