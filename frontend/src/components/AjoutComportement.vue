<template>
<form class='add-comportement center' v-if="revele" @submit="insertComportement()" >
<h1> Ajout d'une note <i class="fas fa-solid fa-comment"></i></h1>
<div class="row">
    <div class="col">
        <div class="mb-3">
          <h6>Classe:</h6>
          <select  v-model="classe" class="custom-select" id="classe" @click="getClasseByMailProf()"> 
            <option v-for="item in items[0]" :key="item.Classe" v-bind:value="item.Classe">{{item.Classe}}</option>
          </select>
        </div>
        <div class="mb-3">
          <button type="button" id="rechercher" v-on:click="getElevesByClass()" :disabled="validInputs" class="btn btn-success" >Rechercher</button>
        </div>
        <div class="mb-3">
          <h6>Nom de l'élève:</h6>
          <select  v-model="eleveId" class="custom-select" id="eleveId">
              <option v-for="item in items[0]" :key="item">{{item.EleveID}}</option>
          </select>
        </div>
        <div class="mb-3">
          <h6>Date:</h6>
          <input type="date" class="form-control" id="date" v-model="date">
          </div>
        </div>
    <div class="col">
        <div class="mb-3">
          <h6 v-if='this.classe!==""'>Informations sur l'élève :</h6>
          <div>
            <p class="list-eleves" v-for="item in items[0]" :key="item">{{item.EleveID}}  {{item.Prenom}}  {{item.Nom}}</p>
          </div>
        </div>
    </div>
</div>


  <div class="mb-3">
     <textarea class="form-control" v-model="contenu" id="contenu" placeholder="Contenu de la note de comportement..." aria-label="With textarea"></textarea>
  </div>

  <button type="submit" id="ajouter" class="btn btn-success" :disabled="checkValidatedFields">Ajouter</button>
</form>
</template>

<script>
const url = require('../../url/url.js');
import axios from 'axios';

export default{
    //Nom de composant actuel
    name: 'AjoutComportement',
    //Props contenant des variables utilisées pour la gestion de données dans le html
    props: ['revele', 'toggleModale'],

    data(){
        return{
          items: [],
          eleveId: 0,
          date: "",
          contenu:"",
          classe:"",
          selected:""
        }
      },

    created(){
        this.getClasseByMailProf()
        
    },
    computed: {
          //Fonction permettant de vérifier si les champs 'titre', 'date' et 'contenu' sont remplis ou non
          checkValidatedFields: function(){
            if(this.eleveId != 0 && this.contenu != "" && this.date != ""){
              return false;
            }
            else{
              return true;
            }
          },

          validInputs : function(){
            if(this.classe != ""){
                return false;
            }
            else{
                return true;
            }
        }
    },  

    methods: {
      
      async getElevesByClass(){         
            //this.selected = event.target.value;
            //let selectedValue = document.getElementById("classe").value;
            //console.log(selectedValue)
            let destinationUrl = url.concatUrl("/elevesByClasse/"+ this.classe);  
            await axios.get(destinationUrl)
            .then(response =>{
                this.items = response.data;
                //console.log(this.items[0]);
            })
            .catch(error =>{
                console.log(error)
            })
        },
      
      async getClasseByMailProf(){
          let mailProf = localStorage.getItem('mail');
          let destinationUrl = url.concatUrl("/classeByMailProf/" + mailProf);
          await axios.get(destinationUrl)
          .then(response =>{
              this.items = response.data;
          })
          .catch(error =>{
              console.log(error)
          })
      },
        
      async insertComportement(){
        let mailProf = localStorage.getItem('mail');
        this.mail = mailProf; 
        const destinationUrl = url.concatUrl("/comportement");
        await axios.post(destinationUrl,{
          Date: this.date,
          EleveID: this.eleveId,
          Contenu: this.contenu,
          Mail: this.mail,
        })
        .then(function(){
          //pass
        })
        .catch(error =>{
          console.log(error);
        })
      }
    }
}

</script>

<style scoped>
.add-comportement{
    max-width: 750px;
    height: 250px;
    margin-bottom: 300px;
    margin-top: 50px;
}

.list-eleves{
  background-color:white;
  padding-left: 5px;
}
</style>
