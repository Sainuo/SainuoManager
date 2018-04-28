<template>
<div class="padding-xl">
  <div class="padding-m">组织机构</div>
  <el-row>
    <el-col :span="12" class="padding-m">
      <el-input
        placeholder="输入关键字进行过滤"
        suffix-icon="el-icon-search"
        v-model="tree.filterText">
      </el-input>
      <el-tree
        :data="tree.treeData"
        :props="tree.props"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false">
        <span slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <i class="el-icon-edit margin-m"></i>
          <i class="el-icon-circle-plus-outline margin-m" @click="append(node, data)"></i>
          <i class="el-icon-remove-outline margin-m" @click="remove(node, data)"></i>
        </span>
      </el-tree>
    </el-col>
    <el-col :span="12" class="padding-m">
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
import axios from "axios";
import apiConfig from "~/static/apiConfig";
export default {
  data: () => ({
    tree: {
      filterText: "",
      treeData: [],
      props: {
        label: "displayName",
        children: "children"
      }
    },
    list: {
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
    getSkip() {
      var me = this;
      return (me.list.currentPage - 1) * me.list.pageSize;
    },
    handleSizeChange(val) {
      this.list.pageSize = val;
    },
    handleCurrentChange(val) {
      this.list.currentPage = val;
      this.loadData();
    },
    onAdd(model) {
      var me = this;
      me.$loaderwindow(`/main/role/edit?id=0`, "创建角色").then(model => {
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
        me
          .$confirm("是否永久删除[" + model.name + "]?", "询问", {
            confirmButtonText: "删除",
            cancelButtonText: "取消",
            type: "warning"
          })
          .then(() => {
            me.deleteSelect(model);
          })
          .catch(() => {});
      } else {
        me.$alert("请勾中要删除的项");
      }
    },
    deleteSelect(model) {
      var me = this;
      axios.post(apiConfig.role_delete, { id: model.id }).then(response => {
        me.$message({ type: "success", message: "删除角色成功！" });
        me.loadData();
      });
    },
    loadOrgnization() {
      var me = this;
      axios.get(apiConfig.organization_get_by_name,{params:{organizationName:"赛诺多中心"}}).then(response => {
        me.tree.treeData = response.data.result.items;
      });
    },
    loadData() {
      var me = this;
      me.loading = true;
      axios
        .post(apiConfig.role_all_get, {
          skipCount: me.getSkip(),
          maxResultCount: me.list.pageSize
        })
        .then(response => {
          me.list.tableData = response.data.result.items;
          me.list.total = response.data.result.totalCount;
          me.loading = false;
        })
        .catch(response => {
          me.loading = false;
        });
    },
    eidt(data){
        var me=this;
        me.$loaderwindow(`/main/orgnization/edit?id=${data.id}`).then(response=>{
            me.$message({ type: "success", message: "" });
        });
    },
    append(node, data) {
      var me=this;
      me.$loaderwindow(`/main/orgnization/edit?id=0&parentId=${node.parent.data.id}`).then(response=>{
          const newChild = { id: id++, label: "testtest", children: [] };
          if (!data.children) {
            this.$set(data, "children", []);
          }
          data.children.push(newChild);
          me.$message({ type: "success", message: "" });
      });
    },
    remove(node, data) {
      var me=this;
      me.$confirm('是否永久删除[' + model.displayName + ']?', '询问', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
          const parent = node.parent;
          const children = parent.data.children || parent.data;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
          me.$message({ type: "success", message: "" });
      }).catch(() => {

      });
    },
    handleDragStart(node, ev) {
      console.log("drag start", node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log("tree drop: ", dropNode.label, dropType);
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === "二级 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf("三级 3-1-1") === -1;
    },
    getData() {
      axios.get("/data/demolist.json").then(response => {
        this.list.tableData = response.data.Data;
      });
    }
  },
  mounted() {
    var me = this;
    me.getData();
    me.loadOrgnization();
  }
};
</script>