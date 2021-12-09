<template>
	<div id="ambitus-content">
		<h1>相机产品列表</h1>
		<div class="ambitus-content-item">			
			<div class="ambitus-content-box" v-for="camera in cameras" :key="camera.id">
				<img :src="camera.url" />
				<p>￥{{camera.price}}元</p>
				<p>{{camera.name}}</p>
				<router-link :to="'/camera/'+ camera.id"><img src="@/assets/img/buy1.jpg" /></router-link>				
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'CameraList',
		props: [''],
		data() {
			return {
				cameras: []
			};
		},
		created() {
			axios.get("/Camera")	
				.then(response => {
					if (response.status == 200) {
						this.loading = false;
						this.cameras = response.data;
					}
				})
				.catch(error => alert(error));
		}
	}
</script>

<style scoped>
	#ambitus-content{
		width: 80%;
		margin: 0 auto ;
	}
	#ambitus-content h1{
		text-align: center;
		font-weight: 500;
		margin: 20px 0;
	}

	.ambitus-content-item{
		width: 95%;
		/* height: 1000px; */
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	.ambitus-content-box{
		width: 380px;
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
