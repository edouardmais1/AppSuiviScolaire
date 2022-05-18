<template>
  <div id="nav mh-50">  
    <nav class="navbar fixed-top navbar-expand-xl navbar-dark my-primary " style="background-color: #6dabe4;">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
            <a class="navbar-brand" href="#">
              <img class="logo" src="../../public/images/logoChildSuccess.png" alt="" width="200" height="">
            </a>
      </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto">

             <div v-if="this.status == false "></div>
            <div class="nav-links" v-else>
              <li class="nav-item">
                <div>
                  <i class="fas fa-envelope imgs"></i>
                </div>
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
            </div>         

            <div v-if="this.status == false "></div>
            <div class="nav-links" v-else>
              <li class="nav-item">
              <div v-if="this.role == 1 || this.role == 3">
                <div>
                  <i class="fas fa-file imgs" v-if="this.role == 1"></i>
                  <i class="fas fa-envelope imgs" v-else></i>
                </div>
                <router-link class="nav-link" to="/bulletin" v-if="this.role == 1">Bulletin</router-link>
                <router-link class="nav-link" to="/secretariat" v-else>Secretariat</router-link>
              </div>

              <div v-else>
              </div>         
              </li>
            </div>

            <div v-if="this.status == false "></div>
            <div class="nav-links" v-else>
              <div v-if="this.role == 1 || this.role == 2 || this.role == 3">
              <li class="nav-item">
                <div>
                  <i class="fas fa-calendar-alt imgs"></i>
                </div>
                <router-link class="nav-link" to="/calendrier">Calendrier</router-link>
              </li>
              </div>
             <div v-else></div>              
            </div>

            <div v-if="this.status == false "></div>

            <div class="nav-links" v-else>
              <div v-if="this.role == 1 || this.role == 2" class="comportement">
              <li class="nav-item">
                <div>
                  <i class="fas fa-comment-alt imgs"></i>
                </div>

                <div v-if="this.role == 1">
                <router-link class="nav-link" to="/comportement">Comportement</router-link>
                </div>

                <div v-else>
                  <router-link class="nav-link" to="/comportement/modification">Comportement</router-link>
                </div>

              </li>
              </div>
             <div v-else></div> 
            </div>            
          </ul>


          <ul class="navbar-nav justify-content-end">    

            <div class="nav-links" v-if="this.status == false ">
              <li class="nav-item">
                <div>
                  <i class="fas fa-align-left imgs"></i>
                </div>
                <router-link class="nav-link" to="/inscription">Inscription</router-link>
              </li>
            </div>
            <!--
            <div class="nav-links">
              <li class="nav-item">
                <div>
                  <i class="fas fa-align-left imgs"></i>
                </div>
                <router-link class="nav-link" to="/inscription">Profil</router-link>
              </li>
            </div>
            -->
            <div class="nav-links" v-if="this.status == false">
              <li class="nav-item">
                <div>
                  <i class="fas fa-sign-in-alt imgs"></i>
                </div>
                <router-link class="nav-link" to="/connexion" id="connexion">Connexion</router-link>
              </li>
            </div>

            <div class="nav-links-profile" v-if="this.status == true">
              <li class="nav-item">
                <div>
                  <i class="fas fa-align-left imgs"></i>
                </div>
                <router-link class="nav-link" to="/profile">Profile</router-link>
              </li>
            </div>
    
          </ul>
        </div>  
      </div>
    </nav>
  </div>
</template>


<script>
import axios from 'axios'

const url = require("../../url/url.js")
export default{
    name : "NavBar",

    data(){
      return{
        status: false,
        checkData: [],
        role: "",
      }
    },

    created(){

        if(localStorage.getItem('Auth') == '' || localStorage.getItem('Auth') == null || localStorage.getItem('mail') == null || localStorage.getItem('token') == null || localStorage.getItem('mail') == '' || localStorage.getItem('token') == ''){
            this.status = false;
            localStorage.clear();
        }
        else{
            this.status = true;
            this.checkAuthentification(localStorage.getItem('mail'), localStorage.getItem('Auth')); 
        }
    },

    methods:{
        async getRole(mail){
          let destinationUrl = url.concatUrl(`/role/${mail}`)

          await axios.get(destinationUrl)
          .then(response =>{
              this.role = response.data[0].Roles;
          })
          .catch(error =>{
            console.log(error);
          })

        },
        
        logout: function(){
            this.$store.commit('logout');
            this.$router.push('/');
        },

        async checkAuthentification(mail, jeton){
            let destinationUrl = url.concatUrl(`/authentification/${mail}/${jeton}`);

            await axios.get(destinationUrl)

            .then(response=>{
                if(response.data[0].length == 0){
                    this.checkData[0] = false;
                }
                else{
                    this.checkData[0] = true;
                }
            })
            .catch(function(){
                this.checkData[0] = false;
            })

            if(this.checkData[0] == false){
                this.logout();
            }

            else{
              this.getRole(localStorage.getItem('mail'));
            }

        }
    }

    
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.logo {
  width:100px;
  height:75px;
}

.comportement{
  margin-top: 1px;
}

.nav {
  background-color: #6dabe4;
}

.navbar {
   height: 75px;
}

.navbar-collapse {
  background-color: #6dabe4;
  border-radius: 20px;
}

.imgs {
  position: absolute;
  margin-top: 5px;
  color: rgba(240, 240, 240, 0.8);
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

.nav-links-profile {
  margin-right: 30px;
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
  .comportement {
  margin-right: 10px;
  }
}

</style>
