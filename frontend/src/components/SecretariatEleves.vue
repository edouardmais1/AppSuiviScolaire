<template>
    <div id="nav">
      <NavBar/> 
    </div>
<section class="SecretariatPage">
<div class="position-center">
<div class="lol">
            <button type="button" id="ajout" class="btn btn-primary btn-lg" v-on:click="toggleModale"><i class="fas fa-solid fa-user-plus"></i>
        </button>
        </div>
        <AjoutEleve v-bind:revele="revele" v-bind:toggleModale="toggleModale" ></AjoutEleve>
<div class="row">
    <div class="col-sm">
        <div class="text-left">
            <h1 class="form-title">Gestion des Eleves <i class="fas fa-solid fa-graduation-cap"></i></h1>

        </div>
    </div>
</div>
</div>
    <div class="containerSecretariatEleves">
        <div class="row">
            <div class="col-sm">
                <div class="underlined">
                Nom :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Prénom :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Mail des parents :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Classe actuelle :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Date de naissance :
                </div>
            </div>
            <div class="col-sm">
            </div>
        </div>
        <GestionEleves v-bind:id="item.EleveID" v-bind:nom="item.Nom" v-bind:prenom="item.Prenom" v-bind:email="item.Mail" v-bind:dateNaissance="this.conversionDate(item.DateDeNaissance)" v-bind:classe="item.Classe" v-for="item in items[0]" :key="item" />
    </div>

  
</section>
</template>

<script>
    import NavBar from './NavBar.vue'
    import axios from 'axios';
    import GestionEleves from "./GestionEleves.vue"
    import AjoutEleve from "./AjoutEleve.vue"

    const url = require("../../url/url.js");
    export default{
        name: "SecretariatEleves",

        components: {
            GestionEleves,
            AjoutEleve,
            NavBar,
        },

        data(){
            return{
                items : [],
                revele : false,
                role : "",
            }
        },

        created(){
            this.getRole(localStorage.getItem('mail'));
        },

        methods: {
            async getEleves(){
                let destinationUrl = url.concatUrl("/eleves");
                await axios.get(destinationUrl)
                .then(response =>{
                    this.items = response.data;
                })
                .catch(error =>{
                    console.log(error)
                })
            },

            conversionDate(date){
                let result = new Date(date);

                return result.toLocaleDateString();
            },
            toggleModale: function(){
                this.revele=!this.revele;
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
                this.checkRole();

            },

            checkRole(){
                if(this.role == 3){
                    this.getEleves();
                }
                else{
                    this.$router.push("/");
                }
            }
        },
    }
</script>
<style>
.lol{
    margin-top: 15px;
    margin-bottom: 15px;
}
.SecretariatPage{
    /*
    background-image: url("../../public/images/background-school-2.jpg");*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}
.containerSecretariatEleves{
    margin-left: 5%;
    margin-right: 5%;
}
</style>