<template >
<div class="bloc-modale" v-if="reveleDelete">
    <div class="overlay" v-on:click="toggleModaleDelete"> </div>
    <div class="modale card" >
        <div class="btn-modale btn btn-danger" v-on:click="toggleModaleDelete">X</div>
        <h3>Êtes-vous sur de vouloir supprimer cet élève ? </h3>
        <div class="btn-modale-check btn btn-success" v-on:click="deleteEleve()"> Oui <i class="fas fa-solid fa-check"></i></div>
        <div class="btn-modale-cancel btn btn-danger" v-on:click="toggleModaleDelete">Annulé <i class="fas fa-solid fa-ban"></i></div>
    </div>
    </div>
</template>

<script>
const url = require("../../url/url.js");
import axios from 'axios';
export default{
    name: 'ModaleDeleteEleve',
    props: ['reveleDelete', 'toggleModaleDelete', 'id', 'nom', 'prenom'],

    methods:{
        async deleteEleve(){

            let destinationUrl = url.concatUrl("/deleteEleve/" + this.id);
            await axios.delete(destinationUrl)
            .then(response =>{
                console.log(response.data);
                location.reload();
            })
            .catch(error =>{
                console.log(error)
            })
        },
    }
}
</script>

<style scoped>
    .bloc-modale{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .overlay{
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .modale{
        background: #f1f1f1;
        color: #333;
        padding: 75px;
        position: fixed;
        top: 30%;
        width: 50%;
    }

    .btn-modale{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .btn-modale-check{
        position: absolute;
        bottom: 30px;
        left: 35%;
    }
        .btn-modale-cancel{
        position: absolute;
        bottom: 30px;
        right:35%;
    }
</style>