<template>
	<div class="three">
		<h3>{{msg}}</h3>
		<h4>child Message:{{count+`次`+info}}</h4>
		<child :someMsg='p01' v-on:fromchild='childMsg'></child>
	</div>
</template>

<script>
	import Child from './childComponents/child'
	export default{
		name:'parent',
		data(){
			return {
				msg:'parent test',
				p01:'parent to child',
				count:0,
				info:''
			}
		},
		components:{
			Child
		},
		methods:{
			childMsg:function(msg){
				this.info = msg.message;
				this.count++;
			}	
		}
	}
</script>

<style scoped>
	.three{
		
	}
</style>