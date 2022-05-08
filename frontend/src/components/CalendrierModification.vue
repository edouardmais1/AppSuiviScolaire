
<template>

<div class="row">
    <div class="col-sm">
        <form class='event' @submit="sendData()">
        <h3 class="title"> Ajout d'une activité <i class="fas fa-solid fa-calendar-plus"></i></h3>
        <div class="row">
            <div class="col-5">
            <h5>Titre:</h5>
                <input type="text" class="form-control class-select" id="exampleInputEmail1" v-model="titre" placeholder="Choisissez un titre...">
            </div>
            <div class="col-5">
            <h5>Classe:</h5>
                <select id="object" v-model="classe">
                    <option value="" selected>Choisissez une classe</option>
                    <option v-for="item in items[0]" :key="item.Classe" v-bind:value="item.Classe">{{item.Classe}}</option>
                </select>
            
            </div>
            </div>
        <div class="row">
            <div class="col-5">
                <h5>Heure de départ:</h5>
                <input type="datetime-local" v-model="start">
            </div>
            <div class="col-5">
                <h5>Heure de fin:</h5>
                <input type="datetime-local" v-model="stop">
            </div>

        </div>

        <div class='row'>
            <div class="col-10">
                <h5>Contenu:</h5>
                <textarea class="form-control" placeholder="Contenu de l'actualité..." aria-label="With textarea" v-model="contenu"></textarea>
            </div>
        </div>
            

        <button type="submit" class="btn btn-success"  :disabled="validatedFields" >Ajouter <i class="fas fa-solid fa-plus"></i></button>
        </form>
        </div>



        <div class="col-sm">
        <form class='event'>
        <h3 class="title"> Suppression d'une activité <i class="fas fa-solid fa-trash"></i></h3>
        <div class="row">

            <div class="col-5">
            <h5>Classe:</h5>
                <select id="object" v-model="classeDelete">
                    <option value="" selected>Choisissez une classe</option>
                    <option v-for="item in items[0]" :key="item.Classe" v-bind:value="item.Classe">{{item.Classe}}</option>
                </select>
            </div>
            <ModaleComponent v-bind:revele="revele" v-bind:toggleModale="toggleModale"></ModaleComponent>
        
            <div class="col-5">
                <h5>Date:</h5>
                <input type="date" class="form-control" id="exampleInputPassword1" v-model="date">
            </div>
            </div>
            <div class="row">
            <div class="col-10">
                <h5>Titre:</h5>
                <select id="object">
                    <option value="" selected>Choisissez l'activité...</option>
                </select>
            </div>
        <h8 class="advice"> *Chercher par classe et date pour trouver l'activité à supprimer </h8>
        </div>
            
        <button type="submit" class="btn btn-danger" >Supprimer <i class="fas fa-solid fa-trash"></i></button>
        </form>
        </div>

</div>
</template>

<script>
const url = require("../../url/url.js");

import axios from 'axios';
export default{
    name: 'CalendrierModification',
    classe: String,
    data(){
        return{
            items : [],
            classeDelete: [],
            contenu: '',
            start:'',
            stop:'',
            classe:'',
            titre:'',
            revele: false,
        }
    },
    components: {
            
    },
    created(){
        this.getClasses()
    },

    computed: {
        validatedFields : function(){
            if(this.contenu != "" && this.titre!= ""  && this.classe != ""){
                return false;
            }
            else{
                return true;
            }
        }
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

        toggleModale: function(){
            this.revele=!this.revele;
        },

        async sendData(){

            let destinationUrl = url.concatUrl('/calendrier');
            await axios.post(destinationUrl,{
                Classe : this.classe,
                Date: this.start,
                Contenu: this.contenu,
                Titre: this.titre,
                StartTime: this.start,
                StopTime: this.stop,
            })
            .then(function(){
                console.log("request send");
            })
            .catch(error =>{
                console.log(error);
            })
        },
        
    }

}
</script>

<style scoped>
.event{
    height: 250px;
    margin-top: 150px;
    margin-bottom: 100px;
    margin-left: 10%;
    min-width: 700px;
}
.title{
    margin-bottom: 40px;
}

.date-input{
    min-width: 287px;
    max-width: 394px;
}

.row{
    padding-bottom: 20px;
}
.advice{
    padding-bottom: 20px;
    color: #6dabe4;
    font-style: italic;
    margin-top: 10px;
}
</style>
    
