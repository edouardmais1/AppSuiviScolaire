
<template>

<div class="row">
    <div class="col-sm">
    <form class='add-event'>
    <h3 class="title"> Ajout d'une activité <i class="fas fa-solid fa-calendar-plus"></i></h3>
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
    <ModaleComponent v-bind:revele="revele" v-bind:toggleModale="toggleModale"></ModaleComponent>
    <div class="col">
    <div class="mb-3">
        <h5>Date:</h5>
        <input type="date" class="form-control" id="exampleInputPassword1">
    </div>
    </div>
    <div class="col">
    <div class="mb-3">
        <h5>Heure:</h5>
        <input type="time" class="form-control" id="exampleInputPassword1">
    </div>
    </div>
    </div>

    <div class="col">
        <div class="mb-3">
        <h5>Contenu:</h5>
        <textarea class="form-control" placeholder="Contenu de l'actualité..." aria-label="With textarea"></textarea>
    </div>
    </div>

    <button type="submit" class="btn btn-success">Ajouter <i class="fas fa-solid fa-plus"></i></button>
    </form>
    </div>


    <div class="col-sm">
        <form class='add-event'>
    <h3 class="title"> Modification d'une activité <i class="fas fa-solid fa-gear"></i></h3>
    <div class="row">
    <div class="col">
    <div class="mb-3">
    <h5>Date de l'evenement:</h5>
        <input type="date" class="form-control date-input">
    </div>
    </div>

    <div class="mb-3">
        <h5>Choix de l'evenement à supprimer:</h5>
        <select @change="getEventsByClasse($event)" id="object">
            <option value="NOPE" selected>Choisissez un évènement</option>
            <option v-for="item in items" :key="item.Classe" v-bind:value="item.Classe">{{item.Classe}}</option>
        </select>
    </div>
    </div>


    <button type="button" class="btn btn-danger delete" v-on:click="toggleModale">Supprimer <i class="fas fa-solid fa-trash"></i></button>
    </form>

    </div>
</div>
</template>

<script>
import axios from 'axios';
import ModaleComponent from "./ModalComponent.vue"
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
            revele: false,
        }
    },
    components: {
            ModaleComponent,
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
            toggleModale: function(){
                this.revele=!this.revele;
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

</style>
    
