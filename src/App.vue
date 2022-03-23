<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'post', params:{slug:'any-post-slug'} }">Post</router-link>
    <router-link :to="{ name: 'count' }">Count</router-link>
    <router-link :to="{ name: 'test' }">Test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.parent {
  margin-right: 100px;
}
.parent, .children {
  background: #999;
  padding: 30px;
  min-width: 550px;
}
</style>
