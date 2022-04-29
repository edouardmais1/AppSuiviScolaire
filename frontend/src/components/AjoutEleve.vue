<template>
<form class='add-student center' v-if="revele" @submit="insertStudent()" >
<h1> Ajout d'un élève <i class="fas fa-solid fa-user-plus"></i></h1>
<div class="row">
    <div class="col">
        <div class="mb-3">
        <h6>Nom de l'élève:</h6>
            <input v-model="nom" type="text" class="form-control" id="exampleInputEmail1">
    </div>
        </div>
    <div class="col">
        <div class="mb-3">
            <h6>Prenom de l'élève:</h6>
            <input v-model="prenom" type="text" class="form-control" id="exampleInputPassword1">
        </div>
    </div>
</div>
<div class="row">
<div class="col">
    <div class="mb-3">
    <h6>Mail des parents:</h6>
    <input v-model="email" type="mail" class="form-control" id="exampleInputPassword1">
  </div>
  </div>
<div class="col">
   <div class="mb-3">
    <h6>Date de naissance:</h6>
    <input v-model="date" type="date" class="form-control" id="exampleInputPassword1">
  </div>
  </div>
  </div>
  <div class="mb-3">
  <h6>Classe de l'élève:</h6>
    <select  v-model="classe" class="custom-select" id="inputGroupSelect01">
        <option v-bind:value="classe" selected>Choisissez la classe ...</option>
        <option  v-for="item in items" :key="item.Classe">{{item.Classe}}</option>
    </select>
  </div>

  <button type="submit" class="btn btn-success" :disabled="validatedFields">Ajouter</button>
</form>
</template>

<script>
import axios from 'axios';

const url = require("../../url/url.js");

export default{
    name: 'AjoutEleve',
    props: ['revele', 'toggleModale'],
            classe: String,
    data(){
        return{
            items : [],
            nom: '',
            prenom: '',
            email: '',
            date: '',
            classe:'',
            }
    },
    created(){
        this.getClasses()
    },
    computed: {
        validatedFields : function(){
            if(this.prenom != "" && this.nom != "" && this.email != "" && this.date != "" && this.classe != ""){
                return false;
            }
            else{
                return true;
            }
        },
    },
    methods:{
            async getClasses(){

                let destinationUrl = url.concatUrl("/classes");
                await axios.get(destinationUrl)
                .then(response =>{
                    this.items = response.data;
                })
                .catch(error =>{
                    console.log(error)
                })
            },
            async insertStudent(){

                let destinationUrl = url.concatUrl("/eleves")
                await axios.post(destinationUrl,
                {
                    Nom:this.nom,
                    Prenom:this.prenom,
                    Mail:this.email,
                    Classe:this.classe,
                    DateDeNaissance:this.date,
                })
                .then(response =>{
                    console.log(response.data);
                })
                .catch(error =>{
                    console.log(error)
                })
            }

        }
}
</script>

<style scoped>
.add-student{
    width: 750px;
    height: 250px;
    margin-top: 50px;
    margin-bottom: 100px;
}
.center{
      margin: auto;
      margin-bottom: 200px;
    }
.row{
    margin-top: 15px;
}
</style>
