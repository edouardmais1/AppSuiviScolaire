<template>
  <div id="nav">  
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">App suivi scolaire</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
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
            <li class="nav-item">
              <router-link class="nav-link" to="/inscription">Inscription</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/connexion">Connexion</router-link>
            </li>
          </ul>
        </div>  
      </div>
    </nav>
  </div>
</template>
<style scoped>
</style>