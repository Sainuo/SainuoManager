<template>
<div>
    <div class="demo-print">
        hello word<br>
        <span style="color:red">大家好才是真的好啊</span>
    </div>
    <el-button @click="print">打印</el-button>
</div>
</template>
<script>
import printDoc from "~/static/javascript/simplePrint";

export default {
    methods:{
        print(){
            printDoc(".demo-print");
        }
    }
}
</script>

<style>

</style>
