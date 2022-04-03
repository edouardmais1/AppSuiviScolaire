<template>
<div id="carouselExampleDark" class="carousel carousel-fade slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div class="carousel-item" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div class="carousel-item" data-bs-interval="10000"> 
      <img src="https://images.pexels.com/photos/5905493/pexels-photo-5905493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
        <div class="carousel-item" data-bs-interval="10000"> 
      <img src="https://images.pexels.com/photos/5905472/pexels-photo-5905472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
        <div class="carousel-item" data-bs-interval="10000"> 
      <img src="https://images.pexels.com/photos/5905434/pexels-photo-5905434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style>
.carousel { 
  z-index: -99; 
  margin-top: 25px;
  }
/*.carousel-item {
    position: fixed; 
    width: 100%; height: 100%;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -ms-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    background-size: cover;
    -moz-background-size: cover;
}*/
.carousel-item {
  position: fixed;
  height: 100vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -moz-background-size: cover;
}

</style>