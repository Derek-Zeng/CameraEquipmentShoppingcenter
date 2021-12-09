<template>
	<div id="ambitus-content">
		<h1>镜头及配件产品列表</h1>
		<div id="ambitus-content-item1" class="ambitus-content-item">			
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
		name: 'FittingList',
		props: [''],
		data() {
			return {
				fittings: []
			};
		},
		created() {
			axios.get("/Fitting")
				.then(response => {
					if (response.status == 200) {
						this.loading = false;
						this.fittings = response.data;
						console.log(response.data);
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
		width: 385px;
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
