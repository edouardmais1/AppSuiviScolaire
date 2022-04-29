<template>
<section class="SecretariatPage">
<div class="position-center">
        <div class="lol">
            <button type="button" class="btn btn-primary btn-lg" v-on:click="toggleModale"><i class="fas fa-solid fa-plus"></i> <i class="fas fa-solid fa-comment"></i>
        </button>
    </div>
    <div class='center'>
        <AjoutComportement v-bind:revele="revele" v-bind:toggleModale="toggleModale" ></AjoutComportement>
    </div>
<div class="row">
    <div class="col-sm">
        <div class="text-left">
            <h1 class="form-title">Notes de Comportement <i class="fas fa-solid fa-exclamation"></i></h1>

        </div>
    </div>
</div>
</div>
    <div class="containerSecretariatEleves">
        <div class="row">
        <div class="col-sm">
                <div class="underlined">
                Elève :
                </div>
            </div>
            <div class="col-sm">
                <div class="underlined">
                Note :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Date :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Signature des parents:
                </div>
            </div>
            <div class="col-sm">
            </div>
        </div>
        <GestionComportement></GestionComportement>


    </div>
</section>
</template>

<script>
import GestionComportement from "./GestionComportement.vue"
import AjoutComportement from "./AjoutComportement.vue"
 export default{
    name: 'ProfesseurComportement',
    components:{
        GestionComportement,
        AjoutComportement
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

<style>
.lol{
    margin-bottom:20px;
}
.center{
    margin: auto;
}
</style>
