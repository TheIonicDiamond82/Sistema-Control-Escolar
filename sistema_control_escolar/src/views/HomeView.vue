<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/LogoTec.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1 class="h1">Sistema Control Escolar ITC</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
.logo
{
  width:25%;
  padding-top: 40px;
}
.h1{
  padding-top: 30px;
  font-family:'Impact', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color:purple;
  text-shadow: orangered 1px -1px;
}
*
{
  font-family: 'Verdana', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
