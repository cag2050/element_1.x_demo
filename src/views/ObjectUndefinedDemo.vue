<template>
    <div>
        <p>obj.a（a属性存在）：{{ obj.a}}</p>
        <p>obj.b（b属性不存在；访问b不报错）：{{ obj.b }}</p>
        <p>obj.b.c（b属性不存在；访问b.c报错：TypeError: Cannot read property 'c' of undefined）：{{ obj.b.c }}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            obj: {
                a: 'aaa'
            }
        }
    },
    methods: {

    }
}
</script>

<style lang="stylus" scoped>

</style>
