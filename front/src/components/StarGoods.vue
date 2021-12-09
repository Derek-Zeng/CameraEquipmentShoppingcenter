<template>
	<div class="StarGoods">
		<h1>明星单品</h1>
		<div class="good" v-for="good in goods" :key="good.id">
			<div class="good-img"><img :src="good.url"></div>
			<div class="good-text">
				<p>{{good.intro1}}</p>
				<p>{{good.name}}</p>
				<p>{{good.intro2}}</p>
				<p>{{good.price}}元</p>
				<img src="@/assets/img/buy.png">
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		names: 'StarGoods',
		props: [''],
		data() {
			return {
				goods: [],
			}
		},
		created() {
			axios.get("/star")
				.then(response => {
					if (response.status == 200) {
						this.loading = false;
						this.goods = response.data;
						// for(let i=0;i<this.goods.length;i++){
						// 		let url=this.goods[i].url;
						// 		this.goods[i].url="";
						// 		this.goods[i].url=require("'"+url+"'");
						// 		console.log(url);
						// 	}
					}
				})
				.catch(error => alert(error));
		}
	}
</script>
<style scoped>
	.StarGoods {
		width: 100%;
	}

	.StarGoods h1 {
		text-align: center;
		font-weight: 500;
		margin: 20px 0;
	}

	.good {
		width: 100%;
		height: 470px;
		margin-top: 30px;
		display: flex;
		justify-content: space-around;
	}

	.good-img {
		/* width: 50%; */
		height: 460px;
	}

	.good-img img {
/* 		float: left;
		width: 100%; */
		height: 460px;
	}

	.good-text {
		/* width: 50%; */
		height: 460px;
		position: relative;
		float: right;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}


	.good p {
		display: inline;
		font-size: 40px;
		width: 500px;
		margin: 10px auto 0 auto;
	}

	.good-text img {
		display: block;
		margin: 10px 315px 0 0;
	}
</style>
