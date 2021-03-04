<template>
  <div id="app">    
    <div class="container ">
      <router-view :key="$route.fullPath">
      </router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    components: {}
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  height: 100%;
  min-height: 100vh;

}
.fullscreen
{
  height: 100%;
  min-height: 100vh;
}
.halfscreen
{
  height: 50%;
  min-height: 50vh;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.noPadding
{
  padding: 0;
  margin: 0;
}

</style>
