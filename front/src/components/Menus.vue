<template>
    <div class="menus">
		<ul>
			<li>
				<router-link to="/home">首页</router-link>
			</li>
            <li>
				<router-link to="/CameraList">相机</router-link>
			</li>
			<li>
				<router-link to="/FittingList">相机配件</router-link>
			</li>
			<li>
				<router-link to="/RelateService">相关服务</router-link>
				</li>
			<li>
				<router-link to="/RelateInformation">相关资讯</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
    name:"Menus",
}
</script>
<style scoped>
	.menus {
		display:flex;
		width: 620px;
	} 
	.menus ul{
		width: 100%;
		height: 60px;
	}
	.menus ul li{
		float: left;
		width: 80px;
		text-align: center;
	}
	.menus ul li a{
		font-family: "微软雅黑";
		color: black;
		font-size: 18px;
		line-height: 60px;
	}  
</style>