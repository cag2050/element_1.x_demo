<template>
    <div>
        <img src="../assets/logo.png" @click="dialogVisible = true">
        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            size="tiny"
            :show-close="false"
        >
            <span>这是一段信息</span>
            <img src="../assets/logo.png">
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialogVisible: false
        }
    },
    methods: {

    }
}
</script>

<style lang="stylus" scoped>

</style>
