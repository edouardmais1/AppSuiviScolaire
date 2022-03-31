<template>
  <body>
    <div id="nav">
      <NavBar/> 
    </div>
    <router-view />
  </body>
  <FooterBar/>
</template>
 
<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
export default {
  name: "App",
  components : {
    NavBar,
    FooterBar
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
  ::-webkit-scrollbar-thumb {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }
</style>