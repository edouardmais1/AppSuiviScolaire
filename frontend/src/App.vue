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
 