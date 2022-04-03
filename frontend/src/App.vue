<template>
  <body>
    <div id="nav">
      <NavBar/> 
    </div>
    <CarouselBackground/>
    <ScrollBar/>
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
    background-color: rgba(240, 240, 240, 0.8); 
  }
  * {
  scrollbar-width: thin;
  scrollbar-color: #6dabe4  rgba(240, 240, 240, 0.8);
}
::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;

}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}


</style>