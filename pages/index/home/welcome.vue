<template>
    <div class="page-welcome">
        <div class="padding-l">
        <p class="color-red">欢迎{{information.user.userName}}使用{{systemName}},点击左侧菜单进行导航。</p>
        <div class="print">
            <qrcode ref="qrcode" v-show="false" v-model="qrcode" :size="300" level="H"/>
            <img v-if="qrcode" ref="img" src="">
        </div>
        <el-button type="primary" @click="download">下载二维码</el-button>
        <el-button @click="print">打印</el-button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import apiConfig from "~/static/apiConfig";
import webConfig from "~/static/webConfig"
import Qrcode from 'qrcode.vue';
import {anchor} from "~/static/javascript/download";
import {mapGetters} from "vuex"

export default {
    components:{Qrcode},
    computed:{
        ...mapGetters("modules/user",["information"])
    },
    data(){
        return {
            organizationUnitId:0,
            qrcode:'',
            systemName:webConfig.systemName        
        };
    },
    methods:{
        setQrcode(){
            var me=this,url=webConfig.wxAddress,oid=me.organizationUnitId;
            me.qrcode=oid?`${url}?organizationUnitId=${oid}`:'';
        },
        loadData(){
            var me=this;
            axios.get(apiConfig.my_org)
            .then(x=>{
                me.organizationUnitId=x.data.result;
                me.setQrcode();
                me.$nextTick(()=>{
                    me.$refs.img.src = me.$refs.qrcode.$el.querySelector("canvas").toDataURL("image/jpeg", 1.0);
                });
            }).catch(x=>{});
        },
        download(){
            let me=this;
            anchor(me.$refs.img.src,"绑定二维码");            
        },
        print(){
            let me = this;
            me.$simpleprint(".print");
        }
    },
    mounted(){
        var me=this;
        window.vm=this;
        me.loadData();
    }
}
</script>