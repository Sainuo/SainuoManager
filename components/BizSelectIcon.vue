<template>
    <el-select v-loading="loading" v-model="val" ref="select" filterable :clearable="clearable" :disabled="disabled" :loading="loading" :placeholder="placeholder" @change="handleChange"> 
        <el-option v-for="(item,index) in options"
        :key = "index"
        :label = "item[displayField]"
        :value = "getValueField(item)">
        <span style="float: left">{{ item[displayField]}}</span>
        <i v-if="iconField" style="float: right; color: #8492a6; font-size: 13px" :class="[item[iconField]]"></i>
        </el-option>
    </el-select>
</template>
<script>
  /**
 * author      : 反转的分针
 * date        : 20180626
 * mail        : 114233763@qq.com
 * description : 模糊查询
 * @param {String} src http://xxx.yyy.zzz/abc/def?gh=ijk&lm=nop#qrst
 * @param {String} placeholder
 * @param {String} valueField
 * @param {String} displayField
 * @param {String} value v-model
 * @returns {String|Object} item.DataValue
 * @example
 *    <biz-select v-model="search.RoleUid" src="/api/Account/Role" :show-columns="['RoleName']" display-field="RoleName" value-field="Uid" placeholder="选择角色"></biz-select><br />
*/
import ELEMENT from "element-ui"
import axios from "axios"

export default {
    props: {
        "src": {
            "type": String,
            "default": ""
        },
        "autoLoad":{
            "type":Boolean,
            "default":true
        },
        "clearable":{
            type:Boolean,
            default:false
        },
        "disabled":{
            type:Boolean,
            default:false
        },
        "filterable":{
            type:Boolean,
            default:false
        },
        "placeholder": {
            "type": String,
            "default": "请选择"
        },
        "modelMap":{
            "type":Function,
            "default":(model)=>{
                return model;
            }
        },
        "params":{
            "type":Object,
            "default":()=>({
                skipCount:0,
                maxCount:65536
            })
        },
        "valueField": {
            "type": String,
            "default": "id"//model:item|fieldName:item.fieldName
        },
        "displayField": {
            "type": String,
            "default": "name"
        },
        "iconField":{
            "type":String,
            "default":null
        },
        "value": {
            "type": String|Object,
            "default": ""
        }
    },
    data () {
        return {
            "loading": false,
            "val": "",
            "options": [],
            "allOptions": []
        };
    },
    watch: {
        "value": function (val, oldVal) {
            var me = this;
            me.val = val;
        }
    },
    methods: {
        getValueField: function (item) {
            var me = this;
            if (me.valueField !== "model") {
                return item[me.valueField];
            }
            return item;
        },
        handleChange: function (val) {
            this.$emit("input", val);
        },
        updateValue: function (val) {
            this.val = val;
        },
        loadData: function (query) {
            var me = this;
            me.loading = true;

            if (typeof query === 'undefined') {
                query = "";
            }

            axios.get(me.src,{params:me.params}).then(function (response) {
                me.allOptions = me.modelMap(response.data);
                me.options=me.allOptions;
                me.loading = false;
                me.$emit("load",{target:me,data:me.allOptions});
            });
        }
    },
    components: {
        "el-select": ELEMENT.Select,
        "el-option": ELEMENT.Option
    },
    mounted: function () {
        var me=this;
        if(me.autoLoad){
            me.loadData();
        }
        me.updateValue(me.value);
    }
}
</script>