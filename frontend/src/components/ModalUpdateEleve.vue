<template >
<div class="bloc-modale" v-if="reveleUpdate">
    <div class="overlay" v-on:click="toggleModaleUpdate"> </div>
    <div class="modale card" >
        <div class="btn-modale btn btn-danger" v-on:click="toggleModaleUpdate">X</div>
        <h3>Êtes-vous sur de vouloir mettre à jour les informations de cet élève ? </h3>
        <div class="btn-modale-check btn btn-success" id="oui" @click="updateEleve()"> Oui <i class="fas fa-solid fa-check"></i></div>
        <div class="btn-modale-cancel btn btn-danger" id="non" @click="toggleModaleUpdate">Annulé <i class="fas fa-solid fa-ban"></i></div>
    </div>
    </div>
</template>

<script>
const url = require("../../url/url.js");
import axios from 'axios';
export default{
    name: 'ModaleUpdateEleve',
    props: ['reveleUpdate', 'toggleModaleUpdate', 'id', 'nom', 'prenom', 'classe', 'email', 'dateNaissance'],

    methods:{
        conversionDate(date){
            let splitedDate = date.split('/');
            return(splitedDate[2] + '-' + splitedDate[1] + '-' + splitedDate[0]);
        },
        
        async updateEleve(){
            let destinationUrl = url.concatUrl('/updateEleve/' + this.id);
            await axios.post(destinationUrl,
            {
                id:this.id,
                Nom:this.nom,
                Prenom:this.prenom,
                Mail:this.email,
                Classe:this.classe,
                DateDeNaissance:this.conversionDate(this.dateNaissance),
            })
            .then(function(){
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