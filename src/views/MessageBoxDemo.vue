<template>
    <div>
        <div v-for="(item, index) of objArr">
            <div style="height: 200px;"></div>
            <img src="../assets/logo.png" @click="handleClick(item.id, item.imgSrc)">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            objArr: [
                {
                    id: '123456789',
                    imgSrc: '../assets/logo.png'
                },
                {
                    id: '6789',
                    imgSrc: '../assets/logo.png'
                }
            ]
        }
    },
    methods: {
        handleClick (id, imgSrc) {
            const h = this.$createElement
            this.$msgbox({
                title: '',
                showConfirmButton: false,
                message: h('p', null, [
                    h('span', null, id),
                    h('i', { style: 'color: teal' }, imgSrc)
                ])
            })
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
