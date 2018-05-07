<template>
    <div>
        <div>乙肝病史（肝龙核苷酸检验）</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
            <div>
                <h2>乙肝病史</h2>
                患者确诊患有慢性乙肝的日期<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.hepatitisBDignoseConfirmedDate"></el-date-picker>
            </div>
            <div>
                <el-alert show-icon title="排除标准" type="info" description="Fibro-Touch检测值＞17.5kPa的患者（如肝组织活检证实为非肝硬化者除外）；或病理组织学检查为肝硬化的患者。"></el-alert>
                <h2>肝硬化史</h2>
                <div>
                    <el-radio v-model="ruleForm.score" :label="true">是</el-radio>
                    <el-alert title="若“是”不符合入选标准" type="error" center show-icon></el-alert>
                </div>
                <div>
                    <el-radio v-model="ruleForm.score" :label="false">否</el-radio>
                </div>
            </div>
            <div>
                <h2>乙肝治疗史</h2>
                <div>
                    <div>曾经使用核苷类似物的种类（选择其中一项或多项）：</div>
                    <div>
                        <el-checkbox v-model="etkw" true-label="1" false-label="0">恩替卡韦</el-checkbox>
                        <el-checkbox v-model="lfmd" true-label="1" false-label="0">拉米夫定</el-checkbox>
                        <el-checkbox v-model="adfw" true-label="1" false-label="0">阿德福韦</el-checkbox>
                        <el-checkbox v-model="tbfd" true-label="1" false-label="0">替比夫定</el-checkbox>
                    </div>
                </div>
                <div v-if="ruleForm.etkw==='1' || ruleForm.lfmd==='1' || ruleForm.adfw==='1' || ruleForm.tbfd==='1'">
                    <div>目前使用核苷类似物的种类和持续时间：</div>
                    <div v-if="ruleForm.etkw==='1'" ><el-date-picker v-model="ruleForm.etkwDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></div>
                    <div v-if="ruleForm.lfmd==='1'"><el-date-picker v-model="ruleForm.lfmdDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></div>
                    <div v-if="ruleForm.adfw==='1'"><el-date-picker v-model="ruleForm.adfwDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></div>
                    <div v-if="ruleForm.tbfd==='1'"><el-date-picker v-model="ruleForm.tbfdDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></div>
                </div>
                <div>其他抗病毒药物？</div>
                <div>
                    <el-radio v-model="ruleForm.otherMed" label="0">无</el-radio>
                </div>
                <div>
                    <div><el-radio v-model="ruleForm.otherMed" label="1">有</el-radio></div>
                    <el-input type="textarea" :rows="2" :autosize="{ minRows: 2}" placeholder="请输入药物名称" v-model="ruleForm.otherMedNames"></el-input>
                </div>
            </div>
            <div>
                <h2>家族史</h2>
                <div>家中有无乙肝病毒感染者，或者家族内母亲和/或亲兄弟姊妹HBsAg阳性：</div>
                <div>
                    <el-radio v-model="ruleForm.familyInfected" :label="true">无</el-radio>
                    <el-alert title="若“是”不符合入选标准" type="error" center show-icon></el-alert>
                </div>
                <div>
                    <el-radio v-model="ruleForm.familyInfected" :label="false">有</el-radio>（如有）与患者亲属关系:
                    <el-select v-model="ruleForm.familyRelation" multiple placeholder="母亲/或兄弟姐妹">
                        <el-option value="母亲">母亲</el-option>
                        <el-option value="兄弟姐妹">兄弟姐妹</el-option>
                    </el-select>
                </div>
            </div>
            <div>
                <h2>感染途径</h2>
                <el-checkbox-group v-model="ruleForm.infactedRoute">
                    <el-checkbox label="0">围产期</el-checkbox>
                    <el-checkbox label="1">输血</el-checkbox>
                    <el-checkbox label="2">经皮感染</el-checkbox>
                    <el-checkbox label="3">药物注射</el-checkbox>
                    <el-checkbox label="4">性传播</el-checkbox>
                    <el-checkbox label="5">未知</el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="text-align-right">
                <el-button @click="$emit('cancel')">取消</el-button>
                <el-button @click="onConfirm" type="primary">保存</el-button>
            </div>
        </el-form>
    </div>
</template>
<script>
import axios from "axios"
import apiConfig from "~/static/apiConfig"
import utility from "~/static/javascript/utility"

export default {
    data() {
        return {
            id:0,
            ruleForm:{
                "id": 0,
                "crfBasicId": 0,
                "hepatitisBDignoseConfirmedDate": "2018-05-07T01:22:35.952Z",
                "hasHepatocirrhosis": true,
                "etkw": 0,
                 etkwDate:[new Date(),new Date()],
                "etkwBeginDate": new Date(),
                "etkwEndDate": new Date(),
                "lfmd": 0,
                 lfmdDate:[new Date(),new Date()],
                "lfmdBeginDate": new Date(),
                "lfmdEndDate": new Date(),
                "adfw": 0,
                adfwDate:[new Date(),new Date()],
                "adfwBeginDate": new Date(),
                "adfwEndDate": new Date(),
                "tbfd": 0,
                tbfdDate:[new Date(),new Date()],
                "tbfdBeginDate": new Date(),
                "tbfdEndDate": new Date(),
                "otherMed": true,
                "otherMedNames": "",
                "familyInfected": true,
                "familyRelation": "",
                "infactedRoute": 0
            },
            rules: {
            }
        };
    },
    methods: {
        loadData(){
            var me=this;
            axios.get(apiConfig.medItemVitalSign_get,{ params:{ id:me.id}}).then(response=>{
                me.ruleForm = me.unwrap(utility.toClientModel(response.data.result));
            });
        },
        onConfirm() {
            var me=this;
            me.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    var me = this;
                    let model = utility.toServerModel(me.wrap(Object.assign({},me.ruleForm)));
                    axios.put(apiConfig.medItemVitalSign_put,model).then(response=>{
                        me.$emit("confirm",me.ruleForm);
                    });
                }
                return valid;
            });
        },
        wrap(model){
            model.etkwBeginDate=model.etkwDate[0];
            model.etkwBeginDate=model.etkwDate[1];
            model.lfmdBeginDate=model.lfmdDate[0];
            model.lfmdEndDate=model.lfmdDate[1];
            model.adfwBeginDate=model.adfwDate[0];
            model.adfwEndDate=model.adfwDate[1];
            model.tbfdBeginDate=model.tbfdDate[0];
            model.tbfdEndDate=model.tbfdDate[1];
        },
        unwrap(model){
            model.etkwDate[0]=model.etkwBeginDate;
            model.etkwDate[1]=model.etkwBeginDate;
            model.lfmdDate[0]=model.lfmdBeginDate;
            model.lfmdDate[1]=model.lfmdEndDate;
            model.adfwDate[0]=model.adfwBeginDate;
            model.adfwDate[1]=model.adfwEndDate;
            model.tbfdDate[0]=model.tbfdBeginDate;
            model.tbfdDate[1]=model.tbfdEndDate;
        }
    },
    mounted(){
        var me = this;
        if(typeof me.$route.query.id === "string" && me.$route.query.id!=="0"){
            me.id = parseInt(me.$route.query.id);
            me.loadData();
        }
    }
}
</script>