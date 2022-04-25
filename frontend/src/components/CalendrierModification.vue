
<template>
<form class='add-event'>
<h3> Ajout d'une activité <i class="fas fa-solid fa-calendar-plus"></i></h3>
<div class="row">
<div class="col">
<div class="mb-3">
<h5>Classe:</h5>
    <select @change="getEventsByClasse($event)" id="object">
        <option value="NOPE" selected>Choisissez une classe</option>
        <option v-for="item in items" :key="item.Classe" v-bind:value="item.Classe">{{item.Classe}}</option>
    </select>
</div>
</div>
<div class="col">
<div class="mb-3">
    <h5>Date:</h5>
    <input type="date" class="form-control" id="exampleInputPassword1">
</div>
</div>
</div>

<div class="col">
    <div class="mb-3">
    <h5>Contenu:</h5>
    <textarea class="form-control" placeholder="Contenu de l'actualité..." aria-label="With textarea"></textarea>
</div>
</div>

<button type="submit" class="btn btn-success">Ajouter</button>
</form>
</template>

<script>
import axios from 'axios';
export default{
    name: 'CalendrierModification',
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
.add-event{
    width: 750px;
    height: 250px;
    margin-top: 150px;
    margin-bottom: 100px;
    margin-left: 5%;
    margin-right: 5%;
}
</style>
    
