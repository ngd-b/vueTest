<template>
  <div class="test">
    <h2>{{msg+'video+audio'}}</h2>
    <video width="320px" height="245px" controls>
        <source src="../assets/videoes/002.mp4" type="video/mp4">
        你的浏览器不支持h5标签！
    </video>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'video test!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
