<template>
  <div id="nav">  
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark my-primary " style="background-color: #6dabe4;">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
            <a class="navbar-brand" href="#">
              <img src="../../public/images/logo.png" alt="" width="200" height="">
            </a>
      </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/calendrier"><img class="logo" src="../../public/images/calendar-regular.svg"> Calendrier </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/comportement"><img class="logo" src="../../public/images/exclamation-solid.svg">Comportement </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/bulletin"><img class="logo" src="../../public/images/file-lines-regular.svg"> Bulletin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact"><img class="logo" src="../../public/images/envelope-regular.svg"> Contact<font-awesome-icon icon="fa-light fa-phone" /></router-link>
            </li>
          </ul>
          <ul class="navbar-nav justify-content-end">       
            <li>
            <div class="souligner">
              <router-link class="nav-link" to="/inscription">Inscription</router-link>
            </div>
            </li>
            <li>
            <div class="souligner">
              <router-link class="nav-link" to="/connexion" id="connexion">Connexion</router-link>
            </div>
            </li>
          </ul>
        </div>  
      </div>
    </nav>
  </div>
</template>
<style scoped>

  @font-face {
    font-family: 'magical_holidayregular';
    src: url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff2') format('woff2'),
         url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }

  #connexion{
    margin-right:30px;
  }


 
  .navbar-brand{
    padding-top: 0;
    font-family:'magical_holidayregular';
    font-weight : 0;
  }

  .my-primary{
    background-color: #004C99;
  }

  .navbar-expand-md .navbar-nav .nav-link{
    padding-left: 50px;

  }
  .nav-link{
    font-size: 22px;
    font-family:'Letters for Learners';
    font-weight : 0;
    margin-left: 20px;
  }

  @media (min-width: 1200px){
    .navbar-expand-md {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
  }
</style>
