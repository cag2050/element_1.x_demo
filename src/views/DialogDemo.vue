<template>
    <div>
        <div style="height: 500px;"></div>
        <img src="../assets/logo.png" @click="handleClick">
        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            size="small"
            :show-close="false"
            :lock-scroll="false"
        >
            <p style="height: 400px;">遇到过一个问题：弹出dialog框时，页面滚动条总是跳到顶部；<br/>
            解决：添加了代码：`:lock-scroll="false"`</p>
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
            // let scrollTop = 0
            // if (document.documentElement && document.documentElement.scrollTop) {
            //     scrollTop = document.documentElement.scrollTop
            // } else if (document.body) {
            //     scrollTop = document.body.scrollTop
            // }
            // console.log(scrollTop)
            // // window.scrollTo(0, scrollTop)
            // window.scrollTo(0, scrollTop - 50)
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
