<template>
    <div class="padding-l">
      <p>欢迎使用{{systemName}},点击左侧菜单进行导航。</p>
      <qrcode ref="qrcode" v-if="qrcode" v-model="qrcode" :size="300" level="H"/>
      <el-button type="primay" @click="downloadQRcode">下载二维码</el-button>
    </div>
</template>
<script>
import axios from "axios";
import apiConfig from "~/static/apiConfig";
import webConfig from "~/static/webConfig"
import Qrcode from 'qrcode.vue';
import {anchor} from "~/static/javascript/download";

export default {
    components:{Qrcode},
    data:()=>({
        organizationUnitId:0,
        qrcode:'',
        systemName:webConfig.systemName        
    }),
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
            }).catch(x=>{});
        },
        downloadQRcode(){
            let me=this;
            me.$refs.qrcode.$el.querySelector("canvas").toBlob(b=>{
                anchor(URL.createObjectURL(b),"绑定二维码");
            },'image/png',1);
        }
    },
    mounted(){
        var me=this;
        window.vm=this;
        me.loadData();
    }
}
</script>