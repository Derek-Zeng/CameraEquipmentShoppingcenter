<template>
	<div class="out">
		<h1>商品详情</h1>
		<div class="cameraDetail">
			<div class="left">
				<img :src="camera.url" >
			</div>
			<div class="right">
				<h3>{{camera.name}}</h3>
				<p>{{camera.intro}}</p>
				<div class="price">
					<p v-if="camera.discount==1.00">单价：￥{{camera.price}}</p>
					<p v-else>折扣价：<span>￥{{discountPrice}}</span><span>[{{camera.discount*10}}折]</span></p>
				</div>
				<div class="count">
					<div id="abs" @click="btnabs()">-</div>
					<input type="text" id="num"  v-model="num">
					<div id="add" @click="btnadd()">+</div>
				</div>
				<button type="button" id="submit">加入购物车</button>
			</div>
		</div>
	</div>	
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'Camera',
		props: [''],
		data() {
			return {
				camera: {},
				num:1
			};
		},
		methods:{
			btnabs:function(){
				if(this.num>1) this.num--;
			},
			btnadd:function(){
				if(this.num<10) this.num++;
				else alert("最多只能买10件哦");
			},
		},
		computed:{
			discountPrice:function(){
				let discountPrice=0;
				discountPrice=this.camera.price*this.camera.discount;
				return discountPrice.toFixed(2);
			}
		},
		created() {
			axios.get(this.$route.fullPath)	
				.then(response => {
					if (response.status == 200) {
						this.camera = response.data;
					}
				})
				.catch(error => alert(error));
		}
	}
</script>

<style scoped>
	.out{
		width: 100%;
	}
	.out h1{
		text-align: center;
	}
	.cameraDetail{
		width: 80%;
		/* height: 500px; */
		display: flex;
		margin: 0 auto;
		background-color: #fff;
		
	}	
	.left{
		width: 49%;
		height: 600px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0.5px solid #E9E9E9;
	}
	.left img{
		width: 90%;
	}
	.right{
		width: 49%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 400px;
	}
	.right h3{
		margin-top: 20px;
		font-weight: 500;
		color: #666;
		font-size: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: wrap;
	}
	.right :nth-child(2){
		color: #e4393c;
		font-size: 15px;
		width: 100%;
	}
	.price{
		width: 100%;
		display: flex;
		align-items: center;
		height: 100px;
		background-color: #e3e3e3;
	}
	.price p{
		color: #666;
		font-size: 15px;
	}
	
	.price p :nth-child(1){
		color: #e4393c;
		font-size: 30px;
	}
	.price p :nth-child(2){
		margin-left: 10px;
		color: #666;
		font-size: 15px;
	}
	.count{
		display: flex;
	}
	#abs,#add,#num{
		width: 30px;
		text-align: center;
		font-size: 20px;
		
	}
	#add,#abs{
		background-color: #E9E9E9;
		cursor: pointer;
	}
	#num{
		margin: 0;
		padding: 0;
		border: none;
		color: #000;			
	}
	#submit{
		width: 90px;
		height: 32px;
		background-color: #df3033;
		color: #fff;
		font-weight: bold;
		cursor: pointer;
		border: none;
	}
</style>
