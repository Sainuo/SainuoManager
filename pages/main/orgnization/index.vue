<template>
<div>
  <div>组织机构</div>
  <el-row>
    <el-col :span="12">
      <el-tree
        :data="tree.treeData"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false">
        <span slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button
              type="text"
              size="mini"
              @click="() => append(data)">
              Append
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)">
              Delete
            </el-button>
          </span>
        </span>
      </el-tree>
    </el-col>
    <el-col :span="12">
        <div>中心1</div>
        <el-table :data="list.tableData" border highlight-current-row :default-sort="{prop: 'name', order: 'descending'}" class="col-12">
            <el-table-column prop="name"
                             label="姓名"
                             sortable
                             width="180">
            </el-table-column>
            <el-table-column prop="date"
                             label="日期"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             label="地址">
            </el-table-column>
            <el-table-column label="操作"
                             fixed="right"
                             width="400">
                <template slot-scope="scope">
                    <el-button size="small" icon="el-icon-edit" @click="onEdit(scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" icon="el-icon-delete"  @click="onDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="clear"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="list.currentPage"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="400">
        </el-pagination>
    </el-col>
  </el-row>
</div>
</template>
<script>
import axios from "axios"
import apiConfig from "~/static/apiConfig"
export default {
    data:()=> ({
      tree:{
        treeData:[]
      },
      list:{
          tableData: [],
          multipleSelection: [],
          loading: false,
          currentPage: 1,
          pageSize: 20,
          total: 0,
          sort: {}
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
        onAdd() {
            var me = this;
            me.$loaderwindow("/main/role/edit?id=0", "创建角色")
                .then( model => {
                    me.$message({ type: "success", message: "创建用户成功！" });
                    me.loadData();
                });
        },
        onEdit(model) {
            var me = this;
            me.$loaderwindow(`/main/role/edit?id=${model.id}`, "编辑角色")
                .then(model => {
                    me.$message({ type: "success", message: "编辑角色成功！" });
                    me.loadData();
                });
        },
        onDelete(model) {
            var me = this;
            if (model) {
                me.$confirm('是否永久删除[' + model.name + ']?', '询问', {
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
        deleteSelect(model){
            var me=this;
            axios.post(apiConfig.role_delete,{id:model.id}).then(response=>{
                me.$message({ type: "success", message: "删除角色成功！" });
                me.loadData();
            });
        },
        loadData () {
            var me=this;
            me.loading = true;
            axios.post(apiConfig.role_all_get, {
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
        },
        append(data) {
          const newChild = { id: id++, label: 'testtest', children: [] };
          if (!data.children) {
            this.$set(data, 'children', []);
          }
          data.children.push(newChild);
        },
        remove(node, data) {
          const parent = node.parent;
          const children = parent.data.children || parent.data;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
        },
        renderContent(h, { node, data, store }) {
          return (
            <span class="custom-tree-node">
              <span>{node.label}</span>
              <span>
                <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
                <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
              </span>
            </span>);
        },
        getData () {
          axios.get("/data/demolist.json").then(response=>{
              this.list.tableData=response.data.Data;
          })
        }
    },
    mounted () {
        var me = this;
        me.getData();
    }
}
</script>