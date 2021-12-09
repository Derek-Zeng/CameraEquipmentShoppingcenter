<template>
    <div class="headerSearch">
		<input type="search" v-model.trim="keyword">
		<img @click="search" src="@/assets/img/search.jpg" >
    </div>
</template>
<script>
export default {
    name:'HeaderSearch',
    data (){
        return{
            keyword:''
        };
    },
    methods:{
        search(){

        }
    }
}
</script>
<style scoped>
.headerSearch input{
	width: 10%;
	height: 25px;
	position: absolute;
	top: 17px;
	left: 80%;
	font-size: 20px;
	border-left-style: none;
	border-right-style: none;
	border-top-style: none; 
	background-color: #f3f3f3;
}
.headerSearch input:focus{
	outline: none;
}
.headerSearch img{
	width: 28px;
	height: 28px;
	position: absolute;
	top: 15px;
	left: 91%;
}
</style>