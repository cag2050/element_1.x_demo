<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动时间" required>
            <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker
                        type="daterange"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        :default-value="ruleForm.date1"
                        style="width: 100%"
                        @change="date1Change"> </el-date-picker>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data () {
        return {
            ruleForm: {
                // daterange日期，没表单验证提示(1.4.13版本，值为undefined，才会有表单验证提示)
                date1: undefined
                // date1: ['2018-12-06', '2019-01-22']
            },
            rules: {
                date1: [
                    { type: 'array', required: true, message: '请选择日期', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        date1Change (value) {
            console.log(typeof value)
            console.log(value)
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetForm (formName) {
            this.$refs[formName].resetFields()
        }
    }
}
</script>

<style scoped>

</style>
