<template>
    <div id="nav">
      <NavBar/> 
    </div>
    <section class="SecretariatPage">
    <div class="position-center">
            <div class="lol">
                <button type="button" id="add-component" class="btn btn-primary btn-lg" v-on:click="toggleModale"><i class="fas fa-solid fa-plus"></i> <i class="fas fa-solid fa-comment"></i>
            </button>
        </div>
        <div class='center'>
            <AjoutComportement v-bind:revele="revele" v-bind:toggleModale="toggleModale" ></AjoutComportement>
        </div>
    <div class="row">
        <div class="col-sm">
            <div class="text-left">
                <h1 class="form-title text-center">Notes de Comportement <i class="fas fa-solid fa-exclamation"></i></h1>

            </div>
        </div>
    </div>
    </div>
        <div class="containerSecretariatEleves">
            <div class="row">
            <div class="col-sm text-center">
                    <div class="underlined">
                    Elève :
                    </div>
                </div>
                <div class="col-sm text-center">
                    <div class="underlined">
                    Note :
                    </div>
                </div>
                <div class="col-sm text-center">
                <div class="underlined">
                    Date :
                    </div>
                </div>
                <div class="col-sm text-center">
                <div class="underlined">
                    Signature des parents:
                    </div>
                </div>
                <div class="col-sm text-center">
                </div>
            </div>
            <GestionComportement v-for="item in items[0]" :key="item" v-bind:eleveId="item.EleveID" v-bind:nom="item.Nom" v-bind:prenom="item.Prenom" v-bind:date="item.Date" v-bind:signature="item.Signature" v-bind:contenu="item.Contenu" v-bind:id="item.ComportementID"></GestionComportement>
    </div>
    </section>
</template>

<script>
import NavBar from './NavBar.vue'
import GestionComportement from "./GestionComportement.vue"
import AjoutComportement from "./AjoutComportement.vue"
import axios from 'axios'
const url = require('../../url/url.js');

 export default{
    name: 'ProfesseurComportement',
    components:{
        GestionComportement,
        AjoutComportement,
        NavBar,
    },
    
    data(){
        return{
            items: [],
            revele : false,
            role: "",
        }
    },
    created(){
        this.getRole(localStorage.getItem('mail'));

    },
    methods: {
        toggleModale: function(){
            this.revele=!this.revele;
        },
        async getComportementByMailProf(){
                let mailProf =  localStorage.getItem('mail');
                let destinationUrl = url.concatUrl('/comportement/prof/' + mailProf);

                await axios.get(destinationUrl)
                .then(response =>{
                    this.items = response.data;
                })
                .catch(error =>{
                    console.log(error);
                })
                
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
            if(this.role == 2){
                this.getComportementByMailProf()
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
    margin-bottom:20px;
}
.center{
    margin: auto;
}

.postion-center{
    postion:block;
}
</style>
