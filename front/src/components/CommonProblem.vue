<template>
	<div id="CommonProblem">
		<h1>常见问题</h1>
		<div id="problem_group">
			<div class="problem" v-for="problem in problems" :key="problem.id">
				<p>Q:{{problem.question}}</p>
				<p>A:{{problem.answer}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		names: 'CommonProblem',
		props: [''],
		data() {
			return {
				problems: [],
			}
		},
		created() {
			axios.get("/CommonProblem")
				.then(response => {
					if (response.status == 200) {
						this.loading = false;
						this.problems = response.data;
					}
				})
				.catch(error => alert(error));
		}
	}
</script>

<style scoped>
	#CommonProblem{
		width: 100%;
		/* height: 550px; */
		background-color: #E9E9E9;
	}
	#CommonProblem h1{
		text-align: center;
		padding-top: 10px; 
	}
	#problem_group{
		width: 80%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 20px auto;
	}
	.problem{
		width: 48%;
		margin-bottom: 15px;
		background-color: #fff;
	}
	.problem p{
		margin: 10px 40px;
		font-size: 20px;
	}
</style>
