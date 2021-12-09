<template>
	<div class="out">
		<h1>服务支持</h1>
		<div class="ServiceSupport">
			<div class="item" v-for="item in list" :key="item.id">
				<img :src="item.url">
				<div class="text">
					<p>{{item.name}}</p>
					<p>{{item.intro}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "ServiceSupport",
		data() {
			return {
				list: [{
					url: require('@/assets/img/ServiceSupport/1.png'),
					name: "7天无理由退货",
					intro: "为您提供售后无忧保障"
				}, {
					url: require('@/assets/img/ServiceSupport/2.png'),
					name: "品质保障",
					intro: "品质护航  售后无忧"
				}, {
					url: require('@/assets/img/ServiceSupport/3.png'),
					name: "全国包邮",
					intro: "购买商城内物品包邮费"
				}]
			}
		}
	}
</script>
<style scoped>
	.out {
		width: 100%;
		margin-top: 20px;
	}
	.out h1{
		text-align: center;
		font-weight: 500;
		margin: 40px 0;
	}
	.ServiceSupport {
		width: 80%;
		height: 100%;
		margin: 20px auto 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: center;
	}

	.item {
		width: 300px;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.item img {
		width: 75px;
		height: 75px;
	}

	.text {
		width: 80%;
		height: 100%;
		margin-left: 15px;
	}

	.text :first-child {
		color: #333;
		font-size: 30px;
		line-height: 1.8;
	}

	.text :last-child {
		color: #999;
		font-size: 21px;
		line-height: 1.8;
	}
</style>
