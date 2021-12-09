<template>
	<div class="RelateInformation">	
		<div class="item" v-for="information in informations" :key="information.id">	
			<img :src="information.imgurl">
			<a :href="information.url">
				<h3>{{information.title}}</h3>
				<p>{{information.abstract}}</p>
			</a>
			<hr>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'RelateInformation',
		props: [''],
		data() {
			return {
				informations: [],
			};
		},
		created() {
			axios.get("/RelateInformation")
				.then(response => {
					if (response.status == 200) {
						this.loading = false;
						this.informations = response.data;
					}
				})
				.catch(error => alert(error));
		}
	}
</script>

<style scoped>
	.RelateInformation{
		width: 80%;
		margin: 40px auto  0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.item{
		width: 383px;
		height: 420px;
		display: flex;
		flex-direction: column;
	}
	.item img:hover{
		overflow: hidden;
		transform: scale(1.1);
	}
	.item a{
		color: #000000;
	}
	.item h3{
		font-weight: bold;
		/* font-size: 18px; */
		line-height: 3;
	}
	.item img{
		width: 383px;
		height: 255.461px;
		
	}
	.item p{
		width: 383px;
		height: 42.67px;
		font-size: 16px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: wrap;
	}
	hr{
		margin-top: 20px;
	}
</style>
