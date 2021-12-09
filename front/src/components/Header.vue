<template>
    <div class="header">
        <img src="@/assets/logo.jpg">
        <div id="span"> 
            <span>你好，请<router-link to="/login">登录</router-link>  免费<router-link to="/register">注册</router-link></span>
        </div>
        <Menus/>
        <HeaderSearch />
    </div>
</template>
<script>
    import HeaderSearch from "./HeaderSearch";
    import Menus from "./Menus";
    export default {
        name: "Header",
        components: {
            HeaderSearch,
            Menus
        },

    }
</script>
<style scoped>
    .header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content:space-between;
    }
    .header img {
	width: 201px;
	height: 60px;
	float: left;
}
#span{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 60px;
    margin: 0;
}
</style>