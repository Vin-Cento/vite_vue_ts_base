<script setup lang="ts"></script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Second">Map</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  padding: 0.5rem;
  text-decoration: inherit;
}

#nav {
  font-size: 2em;
  background: #000;
  padding: 0.5em;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}
</style>
