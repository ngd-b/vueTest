<template>
	<div class="foot">
		<h5>{{msg}}</h5>
	</div>
</template>
<script>
	export default{
		name:'foot',
		data(){
			return{
				msg:'Author:bobolity@163.com'
			}
		}
	}
</script>
<style scoped>
	.foot{
		position: absolute;
		width:100%;
		height:45px;
		bottom:0px;
		text-align: center;
		line-height: 45px;
	}
</style>