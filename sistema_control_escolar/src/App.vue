<template>
  <div id="app">
    <nav >
      <router-link to="/">Inicio</router-link> 
      <router-link to="/alumnos">Alumnos</router-link>
      <router-link to="/maestros">Maestros</router-link>
      <router-link to="/materias">Materias</router-link>
      <router-link to="/grupos">Grupos</router-link>
      <router-link to="/tomacarga">Toma de Carga</router-link>
    </nav>
    <router-view/>
    
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background: rgb(131, 7, 148);
  text-align: center;

  a {
    font-weight: 999;
    color: #ffffff;
    font-size: 20px;
    margin-left: 25px;
    text-decoration: none;
   
    &.router-link-exact-active {
      color: #1435a3;
      text-shadow: black 1px 1px;
    }
  }
}
</style>
