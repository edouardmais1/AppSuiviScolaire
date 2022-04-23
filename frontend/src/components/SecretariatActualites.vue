<template>
<section class="SecretariatPage">
<div class="position-center">
<div class="row">
    <div class="col-sm">
        <div class="text-left">
            <h1 class="form-title">Gestion des Actualités <i class="fas fa-regular fa-calendar-check"></i></h1>

        </div>
    </div>
</div>
</div>
    <div class="containerSecretariatEleves">
        <div class="row">
            <div class="col-sm">
                <div class="underlined">
                Titre :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Date :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Contenu :
                </div>
            </div>

            <div class="col-sm">
            </div>
        </div>

         <GestionActualites></GestionActualites>
    </div>
    <div class="add-button">
        <button type="button" class="btn btn-primary btn-lg" v-on:click="toggleModale"><i class="fas fa-solid fa-plus"></i></button>
    </div>
    <AjoutActualite v-bind:revele="revele" v-bind:toggleModale="toggleModale" ></AjoutActualite>
</section>
</template>
<script>
    import AjoutActualite from "./AjoutActualite.vue"
    import GestionActualites from "./GestionActualites.vue"
    export default{
        name: "SecretariatActualites",

        components: {
            AjoutActualite,
            GestionActualites
        },

        data(){
            return{
                revele : false,
            }
        },

        methods: {

            toggleModale: function(){
                this.revele=!this.revele;
            },
        },
    }
</script>

<style scoped>

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

.listeEleves{
    margin-top: 15px;
}

.underlined{
    text-decoration: underline;
}

.button-Save{
    margin-left: 85%;
}
.add-button{
    margin-left: 5%;
    margin-top: 15px;
}

.btn-primary {
    background-color: #6dabe4;
    border-color: #6dabe4;
}

.btn-success{
    background-color: #71c770;
    border-color: #71c770;
}
.btn-danger{
    background-color: #df5757;
    border-color: #df5757;
}
</style>