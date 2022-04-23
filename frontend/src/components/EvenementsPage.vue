<template>
<section class="EvenementPage">
<div class="position-center">
<div class="row">
    <div class="col-sm">
        <div class="text-left">
            <h1 class="form-title">Evenements prévus <i class="fas fa-solid fa-calendar-check"></i></h1>
        </div>
        <h6> Choisissez une date ... </h6>
        <input type="date" value="NOPE" selected>
    </div>
</div>
</div>
    <div class="containerEvenementPage">
        <div class="row">
            <div class="col-sm">
                <div class="underlined">
                Evenements de prévus pour cette date :
                </div>
            </div>

            <div class="col-sm">
            </div>
        </div>
        <GestionEvenements></GestionEvenements>

    </div>
</section>
</template>

<script>

    import GestionEvenements from "./GestionEvenements.vue"
    export default{
        name: "EvenementsPage",

        components: {
            GestionEvenements
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
.EvenementPage{
    /*
    background-image: url("../../public/images/background-school-2.jpg");*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}
.containerEvenementPage{
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 10px;
}
</style>