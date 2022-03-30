<template>
  <div id="nav">
    <NavBar/>
  </div>
  <router-view />
</template>
 
<script>
import NavBar from './components/NavBar.vue'
export default {
  name: "App",
  components : {
    NavBar
  } 
};
</script>
<style>
  body {
    background-color: rgba(240, 240, 240, 0.8); 
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }
</style>