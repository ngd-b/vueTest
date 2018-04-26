<template>
	<div class="imgShow">
		<h4>{{msg}}</h4>
		<div class="imgList">
			<ul>
				<li><img  :src="imgurl" alt=""></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'pictureShow',
		data (){
			return{
				msg:'show img',
				imgurl:'http://jiaotong.baidu.com/guidingscreen/screen/image?id=1266&qq-pf-to=pcqq.group',
			}
		}
	}
</script>
<style>
	.imgShow{

	}
	.imgList{
		width:1000px;
		height:600px;
	}
	.imgList ul>li{
		list-style: none;
		float:left;
		margin-left:20px;
	}
	.imgList ul>li img{
		
	}
</style>