<template>
	<div id="HotGoods">
		<h1>热卖商品</h1>
		<h2>相机</h2>
		<div class="ambitus-content-item">			
			<div class="ambitus-content-box" v-for="camera in cameras" :key="camera.id">
				<img :src="camera.url" />
				<p>￥{{camera.price}}元</p>
				<p>{{camera.name}}</p>
				<router-link :to="'/camera/'+ camera.id"><img src="@/assets/img/buy1.jpg" /></router-link>
			</div>
		</div>
		<h2>配件</h2>
		<div class="ambitus-content-item">
			<div class="ambitus-content-box" v-for="fitting in fittings" :key="fitting.id">
				<img :src="fitting.url" />
				<p>￥{{fitting.price}}元</p>
				<p>{{fitting.name}}</p>
				<router-link :to="'/fitting/'+ fitting.id"><img src="@/assets/img/buy1.jpg" /></router-link>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
	export default {
		name: 'HotGoods',
		props: [''],
		data() {
			return {
				cameras: [],
				fittings: []
			};
		},
		created() {
			axios.get("/cameraHot")
				.then(response => {
					if (response.status == 200) {
						this.loading = false;
						this.cameras = response.data;
					}
				})
				.catch(error => alert(error));
			axios.get("/fittingHot")
				.then(response => {
					if (response.status == 200) {
						this.loading = false;
						this.fittings = response.data;
					}
				})
				.catch(error => alert(error));
		}
	};
</script>
<style scoped>
	#HotGoods{
		width: 80%;
		margin: 0 auto ;
	}
	#HotGoods h1{
		text-align: center;
		font-weight: 500;
		margin: 20px 0;
	}
	#HotGoods h2{
		font-weight: 500;
		margin-bottom: 15px;
		margin-left: 122px;
	}
	.ambitus-content-item{
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
	}
	.ambitus-content-box{
		display:flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.ambitus-content-box img:first-child{
		width: 300px;
		margin: 10px 0;
	}
	.ambitus-content-box p{
		text-align: center;
		font-size: 25px;
	}
	.ambitus-content-box img:last-child{
		width: 120px;
		border-radius: 10px;
	}	
</style>
