<template>
  <div id="nav mh-50">  
    <nav class="navbar fixed-top navbar-expand-xl navbar-dark my-primary " style="background-color: #6dabe4;">
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
            <div class="nav-links">
              <li class="nav-item">
                <div>
                  <i class="fas fa-calendar-alt imgs"></i>
                </div>
                <router-link class="nav-link" to="/calendrier">Calendrier</router-link>
              </li>
            </div>
            <div class="nav-links">
              <li class="nav-item">
              <div>
                <i class="fas fa-exclamation imgs comportement"></i>
              </div>
                <router-link class="nav-link" to="/comportement">Comportement</router-link>
              </li>
            </div>
            <div class="nav-links">
              <li class="nav-item">
                <div>
                  <i class="fas fa-file imgs"></i>
                </div>
                <router-link class="nav-link" to="/bulletin">Bulletin</router-link>
              </li>
            </div>
            <div class="nav-links">
              <li class="nav-item">
                <div>
                  <i class="fas fa-envelope imgs"></i>
                </div>
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
            </div>
          </ul>
          <ul class="navbar-nav justify-content-end">       
            <div class="nav-links">
              <li class="nav-item">
                <div>
                  <i class="fas fa-align-left imgs"></i>
                </div>
                <router-link class="nav-link" to="/inscription">Inscription</router-link>
              </li>
            </div>
            <div class="nav-links">
              <li class="nav-item">
                <div>
                  <i class="fas fa-sign-in-alt imgs"></i>
                </div>
                <router-link class="nav-link" to="/connexion" id="connexion">Connexion</router-link>
              </li>
            </div>
          </ul>
        </div>  
      </div>
    </nav>
  </div>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.logo {
  margin-bottom: 11px;
  margin-right: 4px;
  width: 25px;
  height: 25px;
}

.nav {
  background-color: #6dabe4;
}

.navbar {
   height: 75px;
}

.imgs {
  position: absolute;
  margin-top: 5px;
  color:  rgba(240, 240, 240, 0.8);
}

.comportement {
  margin-left: 10px;

}

.nav-item {
  padding-right:0px;
}

.navbar-brand {
  padding-top: 0;
  font-family:'magical_holidayregular';
  font-weight : 0;
}

.my-primary {
  background-color: #6dabe4;
}

.nav-link {
  font-size: 18px;
  font-family:'Poppins';
  color: white;
  padding: 0;
  margin-left:20px;
}

.nav-links {
  margin-left: 30px;
}

.navbar .navbar-nav .nav-item {
  position: relative;
}

.navbar .navbar-nav .nav-item::before {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 10px;
  background-color: rgba(240, 240, 240, 0.8);
  width: 0%;
  content: "";
  height: 2px;
  transition: all 0.5s;
}

.navbar .navbar-nav .nav-item:hover::before {
  width: 100%;
}

@media (min-width: 1200px) {
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 5px;
  }
}

</style>
