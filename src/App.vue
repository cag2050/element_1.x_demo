<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/form_validate">form_validate</router-link>
            |
            <router-link to="/frontend_pagination">前端分页</router-link>
            |
            <router-link to="/collapse_demo">Collapse 折叠面板（flex布局）</router-link>
            |
            <router-link to="/dialog_demo">el-dialog 例子</router-link>
            |
            <router-link to="/checkbox_demo">el-checkbox 例子</router-link>
            |
            <router-link to="/object_undefined">对象的 undefined 属性，显示问题</router-link>
            |
            <router-link to="/message_box">MessageBox 弹框</router-link>
        </div>
        <router-view/>
    </div>
</template>
<style lang="stylus">
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align left
        color #2c3e50

    #nav
        a
            font-weight bold
            color #2c3e50
            &.router-link-exact-active
                color #42b983
</style>
