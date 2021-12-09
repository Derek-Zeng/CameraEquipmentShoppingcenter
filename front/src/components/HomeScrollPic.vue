<template>
	<div id="banner" @mousemove="mousemove()" @mouseout="mouseout()">
		<img :src="imgArr[index]" alt="">
		<div v-show="flag" id="banner-bottoms">
			<div id="pre" @click="pre()"><img src="@/assets/img/left.svg" alt=""></div>
			<div id="next" @click="next()"><img src="@/assets/img/right.svg" alt=""></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HomeScrollPic',
		data() {
			return {
				imgArr: [
					"../16&9/1.jpg",
					"../16&9/2.jpg",
					"../16&9/3.jpg",
					"../16&9/4.jpg",
				],
				timer: "",
				index: 0,
				flag: false,
			};
		},
		methods: {
			mousemove: function() {
				this.flag = true;
			},
			mouseout: function() {
				this.flag = false;
			},
			pre: function() {
				if (this.index == 0) {
					this.index = this.imgArr.length - 1;
				} else {
					this.index--;
				}
			},
			next: function() {
				if (this.index == this.imgArr.length - 1) {
					this.index = 0;
				} else {
					this.index++;
				}
			},
			runInv: function() {
				this.timer = setInterval(this.next, 5000);
			},
			destoryed: function() {
				this.clearInterval(this.timer);
			}
		},
		mounted: function() {
			this.runInv();
		},
	}
</script>
<style scoped>
	#banner {
		width: 100%;
		position: relative;
	}

	#banner img {
		width: 100%;
		height: 100%;

	}

	#banner-bottoms {
		width: 100%;
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 50%;
	}

	#pre,
	#next {
		width: 8%;
		background-color: lightgray;
		cursor: pointer;
		opacity: 0.8;
	}
</style>
