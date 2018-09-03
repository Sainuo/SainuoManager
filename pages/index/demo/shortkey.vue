<template>
    <div class="demo-shortkey">
        <el-button v-shortkey="[`ctrl`,`a`]" @shortkey="a()">A</el-button>
        <el-button v-shortkey="[`ctrl`,`b`]" @shortkey="b()">B</el-button>
    </div>
</template>

<script>
//https://www.npmjs.com/package/vue-shortkey
export default {
    methods:{
        a(){
            this.$alert("A");
        },
        b(){
            this.$alert("b");
        }
    }
}
</script>

<style lang="scss">

</style>
