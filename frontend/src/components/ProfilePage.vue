<template>
<div data-aos="zoom-in-left" data-aos-duration="1250">
<div class="container">
<form class="row g-3">
  <div class="col-md-6">
  <h1 class="title">Votre Profil <div class="site-color"><i class="fas fa-regular fa-user"></i></div></h1>
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


    <h1 class="title">Vos Enfants <div class="site-color"><i class="fas fa-solid fa-child"></i></div></h1>


    
    <div class="profil-enfant" v-if="this.user != null">
        <ProfilEnfant />
    </div>
    <div v-else></div>


    <div class="center">
    <button type="submit" @click="logout()" value="deconnexion" class="btn btn-danger margin-bottom">Déconnexion <i class="fas fa-solid fa-door-open"></i></button>
    </div>

    <div class="center">
    <button type="submit" @click.prevent="test()" value="test" class="btn btn-danger margin-bottom">test <i class="fas fa-solid fa-door-open"></i></button>
    </div>

</div>
</form>
</div>

</div>
  
</template>

<script>
import axios from 'axios';
import ProfilEnfant from './ProfilEnfant.vue';
import { useCookies } from "vue3-cookies";

const url = require("../../url/url.js");

//vérification du headers de la requete
require("../store/axios.js");

    export default{
        name: 'ProfilePage',

        setup() {
            const { cookies } = useCookies();
            return { cookies };
        },

        data(){
            return{
                message: "",
                items: [],
                childs: [],
                user : this.$store.state.user,
            }
        },
        components: {
            ProfilEnfant
        },
        
        created(){
            if(localStorage.getItem('token') == null ){
                this.$router.push('/');
            }
            else{
                this.generateCookies();
                this.getUserinfos();
                
            }
        },

        computed:{

        },

        methods: {
            //appel de l'action 'logout' dans le Store 
            logout: function(){
                this.$store.commit('logout');
                this.$router.push('/');
                this.$cookies.remove('mail');
                this.$cookies.remove('token');
            },
            
            getChildsData(){
                //récupérer les informations d'un enfant

            },

            async getUserinfos(){
                let destinationUrl = url.concatUrl(`/infos/${this.$cookies.get('mail')}`);
                await axios.get(destinationUrl)
                .then(response=>{
                    this.items = response.data[0];
                })
                .catch(error=>{
                    console.log(error);
                })
            },

            test(){
                let destinationUrl = url.concatUrl(`/test`)
                axios.get(destinationUrl)
                .then(response =>{console.log(response)}).catch();
            },

            generateCookies(){
                if (this.user != []){
                    this.$cookies.set("mail", this.user.Mail);
                    this.$cookies.set("token", this.user.token);
                }
            }
        }
    }

</script>


<style scoped>

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
    margin-bottom: 150px;;
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