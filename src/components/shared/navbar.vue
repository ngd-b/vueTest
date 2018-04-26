<template>
	<div class="nav">
		<h4>{{title}}</h4>
		<div class="menu">
			<ul>
				<li v-for='item of navMenu'>
					<router-link :to='item.path'>{{item.name}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'navbar',
		data(){
			return{
				title:'这是一个网页的菜单栏部分',
				navMenu:[
					{
						path:'/index',
						name:'首页',
					},
					{
						path:'/test',
						name:'测试',
					},
					{
						path:'/dataTransfer',
						name:'父子组件通信',
					},
					{
						path:'/pictureShow',
						name:'定时图片展示',
					}
				]
			}
		}
	}
</script>

<style scoped>
	.nav{
		width:245px;
		float:left;
		bottom:50px;
		height:350px;
		border-right:2px solid #fed; 
	}
	.nav ul>li{
		list-style: none;
	}
</style>