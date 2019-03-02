<template>
    <div>
        <el-checkbox
            :true-label="1"
            :false-label="0"
            v-model="isAddBlacklist"
            @change="handleChange"
        >加入黑名单</el-checkbox>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 绑定值类型，需要是：数字
            isAddBlacklist: 1
        }
    },
    methods: {
        handleChange (event) {
            console.log(this.isAddBlacklist)
            console.log(typeof this.isAddBlacklist)
            // console.log(typeof value)
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
