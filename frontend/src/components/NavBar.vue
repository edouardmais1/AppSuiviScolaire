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
              <router-link class="nav-link" to="/calendrier">Calendrier 📅</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/comportement">Comportement ❗</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/bulletin">Bulletin 📝</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact 📞 <font-awesome-icon icon="fa-solid fa-phone" /></router-link>
            </li>
          </ul>
          <ul class="navbar-nav justify-content-end">       
            <button type="button" class="btn btn-outline-secondary">
              <router-link class="nav-link" to="/inscription">Inscription</router-link>
            </button>
            <button type="button" class="btn btn-outline-success">
              <router-link class="nav-link" to="/connexion">Connexion</router-link>
            </button>
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
  .nav{
    margin-bottom: 20px;
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
    font-size: 25px;
    font-family:'Letters for Learners';
    font-weight : 0;
    margin-left: 20px;
    margin-bottom: 9px;
  }


  .navbar-brand{
    font-size: 30px;
  }

  @media (min-width: 1200px){
    .navbar-expand-md {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
  }
</style>
