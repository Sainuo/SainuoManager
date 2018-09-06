<template>
    <div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            loading:false,
            orgs:[],
            roles:[],
            users:[],
            temps:[],
            checkedOrgIds:[],
            checkedRoleIds:[],
            checkedUserIds:[],
            checkedTempId:0
        }
    },
    methods:{
        loadOrgs(){
            var me=this;
            return new Promise((resolve,reject)=>{
                
            });
        },
        loadRoles(){
            var me=this;
            return new Promise((resolve,reject)=>{

            });
        },
        loadTemps(){
            var me=this;
            return new Promise((resolve,reject)=>{

            });
        },
        loadUsers(){
            var me=this;
        },
        async loadData(){
            var me=this;
            me.loading=true;
            try{
                me.orgs=await me.loadOrgs();
                me.roles=await me.loadRoles();
                me.temps=await me.loadUsers();
                me.loading=false;
            }catch(x){
                me.loading=false;
            }
        }
    },
    mounted(){
        var me=this;
        me.loadData();
    }
}
</script>

<style>

</style>
