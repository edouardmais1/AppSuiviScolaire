<template>
    <form class='add-actualite center' v-if="revele" @submit="insertActu()">
    <h1> Ajout d'une actualité <i class="fas fa-solid fa-calendar-plus"></i></h1>
    <div class="row">
    <div class="col">
      <div class="mb-3">
       <h5>Titre:</h5>
        <input type="text" class="form-control" id="exampleInputEmail1" v-model="titre" placeholder="choisissez le titre de votre Actualité">
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <h5>Date:</h5>
        <input type="date" class="form-control" id="exampleInputPassword1" v-model="date">
      </div>
      </div>
    </div>

    <div class="col">
        <div class="mb-3">
        <h5>Contenu:</h5>
        <textarea class="form-control" v-model="contenu" placeholder="Contenu de l'actualité..." aria-label="With textarea"></textarea>
      </div>
      </div>
    
      <button type="submit" class="btn btn-success" :disabled="checkValidatedFields">Ajouter</button>
    </form>
</template>
    
    <script>

    const url = require('../../url/url.js');
    import axios from 'axios';

    export default{
        //Nom de composant actuel
        name: 'AjoutActualite',

         //Props contenant des variables utilisées pour la gestion de données dans le html
        props: ['revele', 'toggleModale'],


        data(){
          return{
            titre: "",
            date: "",
            contenu:""
          }
        },
        //Check constant durant la durée de vie de la page
        computed: {
          //Fonction permettant de vérifier si les champs 'titre', 'date' et 'contenu' sont remplis ou non
          checkValidatedFields: function(){
            if(this.titre != "" && this.date != "" && this.contenu != ""){
              return false;
            }
            else{
              return true;
            }
          }
        },

        methods: {
          //Fonction asynchone permettant l'insertion d'une actualité dans 
          async insertActu(){
            const destinationUrl = url.concatUrl("/actualite");

            await axios.post(destinationUrl,{
              Date: this.date,
              Titre: this.titre,
              Contenu: this.contenu
            })
            .then(response =>{
              console.log(response.data);
            })
            .catch(error =>{
              console.log(error);
            })
          }
        }
    }
    </script>
    
    <style scoped>
    .add-actualite{
    width: 750px;
    height: 250px;
    margin-top: 50px;
    margin-bottom: 300px;
    }

    </style>
    