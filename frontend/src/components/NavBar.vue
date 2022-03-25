<template>
  <div id="nav">  
    <nav class="navbar navbar-expand-lg navbar-dark my-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">App suivi scolaire</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/calendrier">Calendrier</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/comportement">Comportement</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/bulletin">Bulletin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
          <ul class="navbar-nav justify-content-end">       
            <li class="nav-item">
              <router-link class="nav-link" to="/inscription">Inscription</router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link" to="/connexion">Connexion</router-link>
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
    font-size: 20px;
    font-family:'magical_holidayregular';
    font-weight : 0;
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
