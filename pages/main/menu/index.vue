<template>
<div class="padding-xl">
  <div class="padding-xl"><h1>菜单管理</h1></div>
  <el-row>
    <el-col :span="24" class="padding-m">
      <el-card>
        <div slot="header">
          <span class="font-size-xl">菜单结构</span>
          <el-button icon="el-icon-plus" size="small" style="float:right;" @click="append()">添加顶级菜单</el-button>
        </div>
        <el-input
          class="margin-top-xl"
          placeholder="输入关键字进行过滤"
          suffix-icon="el-icon-search"
          v-model="tree.filterText">
        </el-input>
        <el-tree
          ref="tree"
          v-loading="tree.loading"
          :data="tree.treeData"
          :props="tree.props"
          node-key="id"
          default-expand-all
          @node-click="onSelected"
          :filter-node-method="filterNode"
          :expand-on-click-node="false"
          @node-drop="handleDrop"
          :allow-drop="allowDrop"
          :allow-drag="allowDrag"
          draggable
          >
          <span slot-scope="{ node, data }">
            <i :class="[node.icon]"></i>
            <span>{{ node.label }}</span>
            <i v-if="data.parentId!==-1" class="el-icon-edit margin-m" @click="edit(node,data)"></i>
            <i class="el-icon-circle-plus-outline margin-m" @click="append(data,node)"></i>
            <i v-if="data.parentId!==-1" class="el-icon-remove-outline margin-m" @click="remove(node, data)"></i>
          </span>
        </el-tree>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>
<script>
import axios from "axios";
import apiConfig from "~/static/apiConfig";
export default {
  watch: {
      "tree.filterText"(val) {
        this.$refs.tree.filter(val);
      }
  },
  data: () => ({
    selected:null,
    tree: {
      filterText: "",
      loading:false,
      treeData: [],
      props: {
        label: "name",
        children: "items"
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
      this.loadData();
    },
    handleCurrentChange(val) {
      this.list.currentPage = val;
      this.loadData();
    },
    onSelected(node){
      var me = this;
      me.selected = node;
    },
    loadTree() {
      var me = this;
      me.tree.loading=true;
      axios.get(apiConfig.menu_get,{params:{parentId:0,name: ""}}).then(response => {
        me.tree.treeData = response.data.result;
      }).finally(()=>{
        me.tree.loading=false;
      });
    },
    filterNode(value, data) {
      if (!value) return true;
        return data.name.indexOf(value) !== -1;
    },
    edit(node, data){
        var me=this;
        me.$loaderwindow(`/main/menu/edit?id=${data.id}`,`编辑${data.name}`).then(model=>{
            for(var p in model){
              data[p]=model[p];
            }
            me.$message({ type: "success", message: "菜单编辑成功" });
        });
    },
    append(data,node) {
      var me=this;
      var o=parseInt(
            node?
            node.childNodes.length?node.childNodes[node.childNodes.length-1].data.order:0:
            me.tree.treeData.length?me.tree.treeData[me.tree.treeData.length-1].order:0
          );
      var pid=parseInt(data?data.id:0);
      me.$loaderwindow(`/main/menu/edit?id=0&parentId=${pid}&maxorder=${o}`,`创建菜单`).then(model=>{
          const newChild = model;
          if(data){
            data.items.push(newChild);
          }else{
            me.tree.treeData.push(newChild);
          }
          me.$message({ type: "success", message: "添加成功" });
      }).catch(e=>{});
    },
    remove(node, data) {
      var me = this;
      me.$confirm(`是否永久删除[${data.name}]?`, '询问', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        axios.delete(apiConfig.menu_delete,{params:{id:data.id}}).then(response=>{
          const parent = node.parent;
          const children = parent.data.items;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
          me.$message({ type: "success", message: "菜单删除成功" });
          me.selected=null;
        }).catch(e=>{});
      }).catch(e=>{});
    },
    handleDrop(drag, drop, type){
        var mvs=[],inner=type.toLowerCase()=='inner'?1:0;
        var parent=inner?drop:drop.parent;
        drag.data.oldparentId=drag.data.parentId;
        drag.data.parentId=inner?drop.data.id:drop.data.parentId;
        parent.childNodes.map((x,i)=>{
            //parentId改变或者order改变
            if((typeof(x.data.oldparentId)!='undefined' && x.data.oldparentId!=x.data.parentId) || x.data.order!=i+1){
                mvs.push({id:x.data.id,newParentId:x.data.parentId,newOrder:i+1,label:x.label});
            }
        });
        axios.put(apiConfig.menu_move,mvs).then(response=>{
            this.$message({message:"位置移动成功",type:"success"});
        });
    },
    allowDrop(drag, drop, type) {
      if(drop==drag){return false;}
      var candrop=false,pid=drop.data.parentId,c=drag.childNodes;
      candrop=!pid?(c.length?(c[0].childNodes.length?true:false):false):true;//没有三级菜单，不能进一级
      return pid>-1&&candrop;
    },
    allowDrag(drag,drop,type) {
      if(drop==drag){return false;}
      return drag.data.parentId > -1;
    }
  },
  mounted() {
    var me = this;
    me.loadTree();
  }
};
</script>