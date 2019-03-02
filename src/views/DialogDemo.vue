<template>
    <div>
        <div style="height: 500px;"></div>
        <img src="../assets/logo.png" @click="handleClick">
        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            size="small"
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
        handleClick () {
            this.dialogVisible = true
            let scrollTop = 0
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop
            } else if (document.body) {
                scrollTop = document.body.scrollTop
            }
            console.log(scrollTop)
            // window.scrollTo(0, scrollTop)
            window.scrollTo(0, scrollTop - 50)
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
