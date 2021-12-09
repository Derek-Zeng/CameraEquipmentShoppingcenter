<template>
	<div class="Home">
		<StarGoods/>
		<HotGoods/>
	</div>
</template>

<script>
	import StarGoods from '@/components/StarGoods.vue'
	import HotGoods from '@/components/HotGoods.vue'
	export default {
		name: 'home',
		components: {
			StarGoods,
			HotGoods,
		}
	}
</script>

<style scoped>
	
</style>
