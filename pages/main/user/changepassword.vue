<template>
<div id="ChangePassword" class="padding-xl">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="新密码" prop="newPassword">
            <el-input type="password" v-model="ruleForm.newPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
            <el-input type="password" v-model="ruleForm.checkPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
import axios from "axios"
export default {        
    data:()=> ({
        ruleForm: {
            password: "",
            newPassword: "",
            checkPassword: ""
        },
        rules: {
            password: [
                {
                    validator(rule, value, callback) {
                        if (value === '') {
                            callback(new Error('请输入密码'));
                        } else {
                            if (this.form.password !== '') {
                                this.$refs.form.validateField('checkPassword');
                            }
                            callback();
                        }
                    }, trigger: 'blur'
                }
            ],
            newPassword: [
                {
                    validator (rule, value, callback) {
                        if (value === '') {
                            callback(new Error('请再次输入密码'));
                        } else if (value !== this.form.checkPassword) {
                            callback(new Error('两次输入密码不一致!'));
                        } else {
                            callback();
                        }
                    }, trigger: 'blur'
                }
            ],
            checkPassword: [
                {
                    validator (rule, value, callback) {
                        if (value === '') {
                            callback(new Error('请再次输入密码'));
                        } else if (value !== this.form.newPassword) {
                            callback(new Error('两次输入密码不一致!'));
                        } else {
                            callback();
                        }
                    }, trigger: 'blur'
                }
            ]
        }
    }),
    methods: {
        submitForm () {
            this.$refs.from.validate((valid) => {
                if (valid) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    }
}
</script>