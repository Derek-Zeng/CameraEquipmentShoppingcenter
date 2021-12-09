<template>
	<div id="footer">
		<div id="footer_main">
			<div id="f_left">
				<h2>关注我们</h2>
				<img src="@/assets/img/QRcode.jpg" alt="">
			</div>
			<div id="f_mid">
				<h2>友情链接</h2>
				<div id="f_mid_text">
					<ul>
						<li><a href="">首页</a></li>
						<li><a href="">产品列表</a></li>
						<li><a href="">服务支持</a></li>
					</ul>
					<ul>
						<li><a href="http://www.baidu.com">百度</a></li>
						<li><a href="http://www.zhihu.com">知乎</a></li>
						<li><a href="http://www.alipay.com">支付宝</a></li>
					</ul>
					<ul>
						<li><a href="">淘宝</a></li>
						<li><a href="">京东</a></li>
						<li><a href="">苏宁易购</a></li>
					</ul>
				</div>
			</div>
			<div id="f_right">
					<h2>订阅我们的新活动</h2>
				<input id="input" type="email" name="email" class="form-input" placeholder="Enter your email..">
				<div id="button">订阅</div>
			</div>
		</div>
		<div id="footer_section">
			<p>Copyright © 2020.Company name All rights reserved.More Templates <span>曾朴</span> - Collect from <span>曾朴</span></p>
		</div>
	</div>	
</template>

<script>
export default {
	name:"Footer",
	data(){
		return{
			
		}
	}
}
</script>

<style scoped>
	#footer{
		width: 100%;
		margin-top: 20px;
		background-color: #101d29;
	}
	#footer_main{
		display: flex;
		justify-content: space-around;
	}
	#f_left,#f_mid,#f_right{
		display: flex;
	}
	#footer h2{
		color: whitesmoke;
		margin-top: 15px;
	}
	#footer a{
		color: #8f9eab;
	}
	#f_left{
		width: 10%;	
		flex-direction: column;	
		/* justify-content: space-between; */
	}
	#f_left img{
		width: 120px;
		height: 120px;
		margin-top: 16px;
	}
	#f_mid{
		width: 20%;
		flex-direction: column;
	}
	#f_mid_text{
		display: flex;
		justify-content: space-between;
	}
	#f_mid ul{
		float: left;
		height: 160px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	#f_mid ul li{
		margin: 0px 0px ;
		/* text-align: center; */
	}
	#f_mid ul li a{
		font-size: 18px;
	}
	#f_right{
		flex-direction: column;
		width: 21%;
	}
	#footer input{
		width: 100%;
		height: 50px;
		border-radius: 15px;
		text-align: center;
		font-size: 1.3rem;
		letter-spacing: 2px;
		font-family: inherit;
		border: none;
		font-size: 16.5px;
		margin-top: 15px;
		background-color: #666;
		transition: background-color 1s;
	}
	#footer input:focus{
		outline: none;
		background-color: white;
	}
	#button{
		width: 100%;
		height: 55px;
		margin-top: 20px;
		text-align: center;
		border-radius: 15px;
		background: #ff6768;
		font-weight: bold;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}
	#footer_section{
		background-color: #0b1721;
		height: 40px;
		width: 100%;
	}
	#footer_section p{
		width: 24.5%;
		color: #FFFFFF;
		float: right;
		line-height: 20px;
		font-size: 14px;
	}
	
</style>
