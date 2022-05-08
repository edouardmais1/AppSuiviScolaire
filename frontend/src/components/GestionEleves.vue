<template>
<ModaleDeleteEleve v-bind:id="id" v-bind:nom="nom" v-bind:prenom="prenom" v-bind:reveleDelete="reveleDelete" v-bind:toggleModaleDelete="toggleModaleDelete"></ModaleDeleteEleve>
<ModaleUpdateEleve v-bind:id="id" v-bind:nom="linkNom" v-bind:prenom="linkPrenom" v-bind:email="linkEmail" v-bind:classe="linkClasse" v-bind:dateNaissance="linkDateNaissance" v-bind:reveleUpdate="reveleUpdate" v-bind:toggleModaleUpdate="toggleModaleUpdate"></ModaleUpdateEleve>
    <div class="listeEleves">
    <div class="row">
        <div class="col-sm">
            <input type="text" id="inputNomData" class="form-control" placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1" v-model="linkNom">
        </div>
        <div class="col-sm">
            <input type="text" id="inputPrenomData" class="form-control" placeholder="Prénom" aria-label="Prénom" aria-describedby="basic-addon1" v-model="linkPrenom">
        </div>
        <div class="col-sm">
            <input type="email" id="inputMailData" class="form-control" placeholder="Email " aria-label="Email" aria-describedby="basic-addon1" v-model="linkEmail">
        </div>
        <div class="col-sm">
            <select v-model="linkClasse" class="custom-select" id="inputClasseData">
                <option selected>{{classe}}</option>
                <option v-for="item in items[0]" :key="item.Classe">{{item.Classe}}</option>
            </select>
        </div>
        <div class="col-sm">
            <input type="text" class="form-control"  id="inputDateData" aria-label="Date" aria-describedby="basic-addon1" v-model="linkDateNaissance">
        </div>
        <div class="col-sm">
            <button v-on:click="toggleModaleUpdate" type="button" class="btn btn-success"><i class="fas fa-solid fa-check"></i></button>
            <!-- <button v-on:click="updateEleve()" type="button" class="btn btn-success"><i class="fas fa-solid fa-check"></i></button> --> 
            <button v-on:click="toggleModaleDelete" type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
        </div>
    </div>
    
    </div>
</template>

<script>
    import axios from 'axios';
    import ModaleDeleteEleve from "./ModalDeleteEleve.vue"
    import ModaleUpdateEleve from "./ModalUpdateEleve.vue"

    const url = require("../../url/url.js");
    export default{
        name: "GestionEleves",
        
        components: {
            ModaleDeleteEleve,
            ModaleUpdateEleve,
        },

        data(){
            return{
                items : [],
                reveleDelete: false,
                reveleUpdate: false,
                linkNom: this.nom,
                linkPrenom: this.prenom,
                linkEmail: this.email,
                linkClasse: this.classe,
                linkDateNaissance: this.dateNaissance,
            }
        },

        props:{
            nom : String,
            prenom : String,
            email: String,
            dateNaissance: Date,
            classe: String,
            id: Number,
        },

        created(){
            this.getClasses()
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
            toggleModaleDelete: function(){
                this.reveleDelete=!this.reveleDelete;
            },
            toggleModaleUpdate: function(){
                this.reveleUpdate=!this.reveleUpdate;
            },
        }
    }

</script>


<style>



.listeEleves{
    margin-top: 15px;
}

.underlined{
    text-decoration: underline;
}
.position-center{
    margin-left: 5%;
    margin-right: 5%;
}
.button-Save{
    margin-left: 85%;
}


.btn-primary {
    background-color: #6dabe4;
    border-color: #6dabe4;
}

.btn-success{
    background-color: #71c770;
    border-color: #71c770;
}
.btn-danger{
    background-color: #df5757;
    border-color: #df5757;
}
.custom-select{
    width: 100%;
    height: 100%;
}
</style>