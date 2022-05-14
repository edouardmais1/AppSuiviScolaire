<template>
    <div id="nav">
      <NavBar/> 
    </div>
    <section class="HomePage">
        <div class="text-center">
            <h1 class="form-title">Actualités</h1>
        </div>
        <div v-if="this.active = true">
            <ActuComponent v-bind:titre="item.Titre" v-bind:date="this.conversionDate(item.Date)" v-bind:Contenu="item.Contenu" v-bind:classe="item.Classe"  v-for="item in items.reverse().slice(0,6)" :key="item"/>
        </div>
        <div v-else class="alertMessage"><p>{{alerMessage}}</p></div>

        <p v-if="this.role == 1">{{test}}</p>
        <p v-else>prout</p>

    </section>


</template>

<script>
    import NavBar from './NavBar.vue'
    import ActuComponent from "./ActuComponent.vue";
    import axios from 'axios';

    const url = require("../../url/url.js");

    export default{
        name : "HomePage",

        components: {
            ActuComponent,
            NavBar,
        },

        data(){
            return {
                items: [],
                alerMessage : "",
                active: false,

                test : "mabite",
                role : "",
            }
        },

        created(){
            this.getActualite();
            this.getRole();
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

            getRole(){
                let destinationUrl = url.concatUrl(`/role/${this.$cookies.get('mail')}`);
                axios.get(destinationUrl)
                .then(response =>{
                    this.role = response.data[0].Roles;
                    console.log(response.data[0].Roles)
                })
                .catch(error =>{
                    console.log(error)
                })
            }
        
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
