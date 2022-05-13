<template>
<section class="SecretariatPage">
<div class="position-center">
<div class="row">
    <div class="col-sm">
        <div class="text-left">
            <h1 class="form-title">Gestion des Classes <i class="fas fa-solid fa-school"></i> </h1>

        </div>
    </div>
</div>
</div>
    <div class="containerSecretariatClasse">
        <div class="row">
            <div class="col-sm">
                <div class="underlined">
                Classe :
                </div>
            </div>
            <div class="col-sm">
                <div class="underlined">
                Professeur associé / Adresse mail :
                </div>
            </div>
        </div>
        <GestionClasses v-for="item in this.items[0]" :key="item" v-bind:classeData="item"></GestionClasses>
        <button type="button" class="btn btn-success btn-lg"><i class="fas fa-solid fa-check"></i></button>
    </div>
</section>
</template>

<script>
    import GestionClasses from "./GestionClasses.vue"
    import axios from 'axios';
    const url = require("../../url/url.js");
    export default{
        name: "SecretariatClasses",

        components: {
            GestionClasses
        },
        
        created(){
            this.getAllClassesAndMailProf();
        },
        data(){
            return{
                items : [],
            }
        },
        methods: {
            async getAllClassesAndMailProf(){

                    let destinationUrl = url.concatUrl("/allclassdata");
                    await axios.get(destinationUrl)
                    .then(response =>{
                        this.items = response.data;
                        console.log(this.items);
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                },
        },
    }
</script>

<style scoped>

.btn-success{
    background-color: #71c770;
    border-color: #71c770;
    position: absolute;
    right: 5%;
    margin-top: 100px;
}
.SecretariatPage{
    /*
    background-image: url("../../public/images/background-school-2.jpg");*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}
.containerSecretariatClasse{
    margin-left: 5%;
    margin-right: 5%;
}

.listeClasse{
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
.add-button{
    margin-left: 5%;
    margin-top: 15px;
}

.custom-select{
    text-align-last:center;
}
</style>