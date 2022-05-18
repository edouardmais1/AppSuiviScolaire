<template>
    <div id="nav">
      <NavBar/> 
    </div>
<div data-aos="zoom-in-left" data-aos-duration="1250">
<div class="container">
<form class="row g-3">
  <div class="col-md-6">
  <h1 class="title">Votre Profil <div><i class="fas fa-regular fa-user"></i></div></h1>
    <div class="row">
        <div class="col-sm">
        <div class="underlined">
            <i class="fas fa-solid fa-arrow-right padding-icone site-color"></i> <h7>Prénom:</h7>

        </div>
        </div>
        <div class="col-sm">
            <p class="users-infos" v-if="this.user != []" >{{user.Prenom}}</p>
            <p v-else>{{this.items.Prenom}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
        <div class="underlined">
            <i class="fas fa-solid fa-arrow-right padding-icone site-color"></i><h7>Nom:</h7>
            </div>
        </div>
        <div class="col-sm">
            <p class="users-infos" v-if="this.user != []" >{{user.Nom}}</p>
            <p v-else>{{this.items.Nom}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
        <div class="underlined">
            <i class="fas fa-solid fa-arrow-right padding-icone site-color"></i><h7>Adresse email:</h7>
        </div>
        </div>
        <div class="col-sm">
            <p class="users-infos" v-if="this.user != []" >{{user.Mail}}</p>
            <p v-else>{{this.items.Mail}}</p>
        </div>
    </div>

    <div v-if="this.role == 1">
        <h1 class="title">Vos Enfants<div><i class="fas fa-solid fa-child"></i></div></h1>


        <div class="profil-enfant" v-if="this.user != null">

            <div v-if="this.childs[0] == null " class="error-message">Pas d'enfants associés à ce compte pour le moment</div>

            <div v-else>
            <ProfilEnfant v-bind:classe="item.Classe" v-bind:date="this.conversionDate(item.DateDeNaissance)" v-bind:nom="item.Nom" v-bind:prenom="item.Prenom" v-bind:test="mabite" v-for="item in childs" :key="item"/>
            </div>

        </div>
        <div v-else></div>
    </div>
    <div v-else></div>

    <div class="center">
    <button type="submit" id="deconnexion" @click="logout()" value="deconnexion" class="btn btn-danger margin-bottom">Déconnexion <i class="fas fa-solid fa-door-open"></i></button>
    </div>


</div>
</form>
</div>

</div>
  
</template>

<script>
import NavBar from './NavBar.vue'
import axios from 'axios';
import ProfilEnfant from './ProfilEnfant.vue';

const url = require("../../url/url.js");

//const authentification = require("../store/authentification.js");

//vérification du headers de la requete
require("../store/axios.js");

    export default{
        name: 'ProfilePage',

        data(){
            return{
                message: "",
                items: [],
                childs: [],
                user : this.$store.state.user,
                role: "",
                checkData: [],
            }
        },
        components: {
            ProfilEnfant,
            NavBar
        },
        
        created(){
            if(localStorage.getItem('Auth') == '' || localStorage.getItem('Auth') == null || localStorage.getItem('mail') == null || localStorage.getItem('token') == null){
                this.$router.push('/');
                localStorage.clear();
            }
            else{
                this.checkAuthentification(localStorage.getItem('mail'), localStorage.getItem('Auth')); 
            }
        },

        computed:{

        },

        methods: {

            //appel de l'action 'logout' dans le Store 
            logout: function(){
                this.$store.commit('logout');
                this.$router.push('/');
            },
            
            async getChildsData(mail){
                let destinationUrl = url.concatUrl(`/elevesByMail/${mail}`);

                await axios.get(destinationUrl)
                .then(response =>{
                    this.childs = response.data;
                })
                .catch(error =>{
                    console.log(error)
                })

            },

            conversionDate(date){
                let result = new Date(date);

                return result.toLocaleDateString();
            },

            getUserinfos(jeton){
                let destinationUrl = url.concatUrl(`/infos/${jeton}`);
                axios.get(destinationUrl)
                .then(response=>{
                    this.items = response.data[0];
                })
                .catch(error=>{
                    console.log(error);
                })
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
                    this.getUserinfos(localStorage.getItem('Auth'));
                    this.getChildsData(localStorage.getItem('mail'));
                    this.getRole(localStorage.getItem('mail'));
                }

            },

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
        }
    }

</script>


<style scoped>

.error-message{
    color: red;
    text-align: center;
}

.title{
    text-align: center;
    margin-bottom: 50px;
    margin-top: 50px;
}

.btn{
    margin-top: 50px;
}
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
    padding: 15px;
    max-width: 750px;;
    width: auto;
    min-width: 250px;
    margin-bottom: 200px;;
    margin-top: 150px;
}


.row{
    padding-bottom: 10px;
    margin: auto;
    padding-top: 15px;
}

.col-sm{
    width: 50%;
    min-width: 200px;
    padding: 5px;
}
.col-md-6{
    margin: 0 auto;
    width: auto;
}

.profil-enfant{
    width: auto;
}
.right{
    float:right;
}
.padding-icone{
    padding-right: 10px;
}
.site-color{
    color: #6dabe4;
}

.margin-bottom{
    margin-bottom: 25px;
}
</style>