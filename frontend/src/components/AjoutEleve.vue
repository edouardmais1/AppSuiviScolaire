<template>
<form class='add-student' v-if="revele">
<h4> Ajout d'un élève <i class="fas fa-solid fa-user-plus"></i></h4>
<div class="row">
<div class="col">
  <div class="mb-3">
   <h6>Nom de l'élève:</h6>
    <input type="text" class="form-control" id="exampleInputEmail1">
  </div>
</div>
<div class="col">
  <div class="mb-3">
    <h6>Prenom de l'élève:</h6>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  </div>
</div>
<div class="row">
<div class="col">
    <div class="mb-3">
    <h6>Mail des parents:</h6>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  </div>
<div class="col">
   <div class="mb-3">
    <h6>Date de naissance:</h6>
    <input type="date" class="form-control" id="exampleInputPassword1">
  </div>
  </div>
  </div>
  <div class="mb-3">
  <h6>Classe de l'élève:</h6>
    <select class="custom-select" id="inputGroupSelect01">
        <option v-bind:value="classe" selected>{{classe}}</option>
        <option v-for="item in items" :key="item.Classe">{{item.Classe}}</option>
    </select>
  </div>

  <button type="submit" class="btn btn-success">Ajouter</button>
</form>
</template>

<script>
import axios from 'axios';
export default{
    name: 'AjoutEleve',
    props: ['revele', 'toggleModale'],
            classe: String,
    data(){
        return{
            items : [],
          
            }
    },
    created(){
        this.getClasses()
    },
     methods:{
            async getClasses(){
                await axios.get("http://localhost:3000/classes")
                .then(response =>{
                    this.items = response.data;
                })
                .catch(error =>{
                    console.log(error)
                })
            },

        }
}
</script>

<style scoped>
.add-student{
    width: 750px;
    height: 250px;
    padding: 75px;
    margin-bottom: 100px;
}
</style>
