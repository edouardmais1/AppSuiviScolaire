<template>
    <section class="HomePage">
        <div class="text-center">
            <h1 class="form-title">Actualités</h1>
        </div>
        <div v-if="this.active = true">
            <ActuComponent v-bind:titre="item.Titre" v-bind:date="this.conversionDate(item.Date)" v-bind:Contenu="item.Contenu" v-bind:classe="item.Classe"  v-for="item in items.reverse().slice(0,6)" :key="item"/>
        </div>
        <div v-else class="alertMessage"><p>{{alerMessage}}</p></div>

    </section>


</template>

<script>
    import ActuComponent from "./ActuComponent.vue";
    import axios from 'axios';

    const url = require("../../url/url.js");

    export default{
        name : "HomePage",

        components: {
            ActuComponent
        },

        data(){
            return {
                items: [],
                alerMessage : "",
                active: false,
            }
        },

        created(){
            this.getActualite();
        },

        methods : {
            checkLengthItems(){
                if(this.items.length == 0){
                    this.alerMessage = "PAS D'ACTUALITE..."
                    this.active = false;
                }
                else{
                    this.alerMessage = ""
                    this.active = true;
                }
            },

            async getActualite(){
                let destinationUrl = url.concatUrl("/");
                try{
                    await axios.get(destinationUrl)
                    .then(response =>{
                        this.items = response.data;
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                }
                catch(error){
                    console.log(error);
                }
                this.checkLengthItems();

            },

            conversionDate(date){
                let result = new Date(date);

                return result.toLocaleDateString();
            },
        
        }


    }

</script>

<style>
.HomePage{
    /*
    background-image: url("../../public/images/background-school-2.jpg");*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}

.alertMessage{
    margin-left: 46.2%;
    color: red;
}

</style>
