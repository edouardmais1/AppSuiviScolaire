<template>
  <body>
    <div id="nav">
      <NavBar/> 
    </div>
    <CarouselBackground/>
    <router-view />
  </body>
  <FooterBar/>
</template>
 
<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import CarouselBackground from './components/CarouselBackground.vue'
export default {
  name: "App",
  components : {
    NavBar,
    FooterBar,
    CarouselBackground,
  },

  
};
</script>
<style>
  body {
    min-height: 100vh;
    background-color: rgba(240, 240, 240, 0.8); 
    height: 100%;
    width: 100%;
    padding:0;
    margin:0;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

</style>