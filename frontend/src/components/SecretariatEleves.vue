<template>
<section class="SecretariatPage">
<div class="position-center">
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
        <GestionEleves v-bind:nom="item.Nom" v-bind:prenom="item.Prenom" v-bind:email="item.Mail" v-bind:dateNaissance="this.conversionDate(item.DateDeNaissance)" v-bind:classe="item.Classe" v-for="item in items" :key="item" />
        <div class="lol">
            <button type="button" class="btn btn-primary btn-lg" v-on:click="toggleModale"><i class="fas fa-solid fa-user-plus"></i>
        </button>
    </div>

    </div>
    <AjoutEleve v-bind:revele="revele" v-bind:toggleModale="toggleModale" ></AjoutEleve>
</section>
</template>

<script>
    import axios from 'axios';
    import GestionEleves from "./GestionEleves.vue"
    import AjoutEleve from "./AjoutEleve.vue"
    export default{
        name: "SecretariatEleves",

        components: {
            GestionEleves,
            AjoutEleve
        },

        data(){
            return{
                items : [],
                revele : false,
            }
        },

        created(){
            this.getEleves();
        },

        methods: {
            async getEleves(){
                await axios.get("http://localhost:3000/eleves")
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
        },
    }
</script>
<style>
.lol{
    margin-top: 15px;
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