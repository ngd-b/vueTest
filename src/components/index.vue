<template>
  <div id="container">
    <div class="row">
      <div class="col-md-2">
        <nav-bar></nav-bar>
      </div>
      <div class="col-md-9">
        <router-view/>
      </div>
    </div>
    <div class="row">
      <nav-footer></nav-footer>
    </div> 
  </div>
</template>

<script>
  import NavBar from './shared/navbar'
  import NavFooter from './shared/navfooter'

  export default {
    name: 'container',
    data (){
      return{
        msg:'网页的内容信息展示'
      }
    },
    components:{
      navBar:NavBar,
      navFooter:NavFooter
    }
  }
</script>

<style>
  .content{
    position:relative;
    width:80%;
    float: left;
    margin-left: 10px;
  }
</style>
