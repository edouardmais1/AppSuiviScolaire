<template>
    <form class='add-actualite' v-if="revele" @submit="insertActu()">
    <h3> Ajout d'une actualité <i class="fas fa-solid fa-calendar-plus"></i></h3>
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
        name: 'AjoutActualite',
        props: ['revele', 'toggleModale'],

        data(){
          return{
            titre: "",
            date: "",
            contenu:""
          }
        },


        computed: {
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
    margin-bottom: 100px;
    margin-left: 5%;
    margin-right: 5%;
    }
    </style>
    