<template>
  <div id="app">
    <img alt="Vue logo" src="https://lesateliers.ca/assets/logo-e5adf6300ea812351483c841782598be.png">
    <HelloWorld msg="ACA web portal running on Digital Ocean VPS - test 3 for GH action jobs runner"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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
img {
  width:350px
}
</style>
