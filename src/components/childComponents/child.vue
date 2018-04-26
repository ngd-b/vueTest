<template>
	<div class="child">
		<h2>{{child}}</h2>
		<h4>{{someMsg}}</h4>
		<button v-on:click='submit'>submit</button>
	</div>
</template>

<script>
	export default{
		name:'childcomponet',
		data(){
			return{
				child:'child test',
				msg:''
			}
		},
		props:['someMsg'],
		methods:{
			submit:function(){
				this.msg = 'childMsg';
				this.$emit('fromchild',{message:'child to parent'});
			}
		}
	}
</script>

<style scoped>
	h2{
		color:red;
	}
	.child{
		padding-bottom:10px;
		border:1px solid #eee;
	}
</style>