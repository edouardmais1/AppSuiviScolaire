
<template>

<div class="row">
    <div class="col-sm">
    <form class='add-event' @submit="sendData()">
    <h3 class="title"> Ajout d'une activité <i class="fas fa-solid fa-calendar-plus"></i></h3>
    <div class="row">
    <div class="col">
    <div class="mb-3">
    <h5>Classe:</h5>
        <select id="object" v-model="classe">
            <option value="" selected>Choisissez une classe</option>
            <option v-for="item in items[0]" :key="item.Classe" v-bind:value="item.Classe">{{item.Classe}}</option>
        </select>
    </div>
    </div>
    <ModaleComponent v-bind:revele="revele" v-bind:toggleModale="toggleModale"></ModaleComponent>
    <div class="col">
    <div class="mb-3">
        <h5>Date:</h5>
        <input type="date" class="form-control" id="exampleInputPassword1" v-model="date">
    </div>
    </div>


    <div class="col">
        <div class="mb-3">
        <h5>Contenu:</h5>
        <textarea class="form-control" placeholder="Contenu de l'actualité..." aria-label="With textarea" v-model="contenu"></textarea>
    </div>
    </div>
    </div>

    <button type="submit" class="btn btn-success"  :disabled="validatedFields" >Ajouter <i class="fas fa-solid fa-plus"></i></button>
    </form>
    </div>

</div>
</template>

<script>
const url = require("../../url/url.js");

import axios from 'axios';
import ModaleComponent from "./ModalComponent.vue"
export default{
    name: 'CalendrierModification',
    classe: String,
    data(){
        return{
            items : [],
            contenu: '',
            date: '',
            classe:'',
            revele: false,
        }
    },
    components: {
            ModaleComponent,
    },
    created(){
        this.getClasses()
    },

    computed: {
        validatedFields : function(){
            if(this.contenu != "" && this.time!= "" && this.date != "" && this.classe != ""){
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
                Date: this.date,
                Contenu: this.contenu,
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
.add-event{
    height: 250px;
    margin-top: 150px;
    margin-bottom: 100px;
    margin-left: 15%;
}
.title{
    margin-bottom: 40px;
}

.date-input{
    min-width: 287px;
    max-width: 394px;
}

.row{
    margin-right :  15%;
}
</style>
    
