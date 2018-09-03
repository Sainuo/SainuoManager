<template>
    <div class="padding-l">
      <p>欢迎使用{{systemName}},点击左侧菜单进行导航。</p>
      <qrcode v-if="qrcode" v-model="qrcode" :size="300" level="H"/>
    </div>
</template>
<script>
import axios from "axios";
import apiConfig from "~/static/apiConfig";
import webConfig from "~/static/webConfig"
import Qrcode from 'qrcode.vue';
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
        }
    },
    mounted(){
        var me=this;
        window.vm=this;
        me.loadData();
    }
}
</script>