<template>
  <div id="app">
    <Header/>
    <HomeScrollPic/>
	<router-view/>
	<ServiceSupport></ServiceSupport>
	<Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HomeScrollPic from '@/components/HomeScrollPic.vue'
import ServiceSupport from '@/views/ServiceSupport.vue'
import Footer from '@/views/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    HomeScrollPic,
	ServiceSupport,
	Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
li,a{
	list-style-type: none;
	text-decoration: none;
}
html,body,#app{
	width: 100%;
	margin: 0 auto;
	background-color: #f3f3f3;
}	
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
