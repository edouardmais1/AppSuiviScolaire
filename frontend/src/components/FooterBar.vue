<template>
  <div id="nav mh-50">  
    <footer class="navbar fixed-bottom navbar-expand-xl my-primary " style="background-color: #6dabe4;">
      <div class="container-fluid">
        <span class="footer-title">Projet Ephec</span>
      </div>
    </footer>
  </div>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.navbar {
    height: 45px;
    width: 100%;
    background-color: #6dabe4;
}

.comportement {
  margin-left: 10px;
}

.footer-title {
  padding-top: 0;
  font-family: 'Poppins';
  font-weight : 0;
  color: rgba(240, 240, 240, 0.8);
  margin: auto;
  margin: auto;
}

.my-primary {
  background-color: #6dabe4;
}

@media (min-width: 1200px) {
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 5px;
  }
}

</style>
