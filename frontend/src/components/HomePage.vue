<template>
    <section class="HomePage">
        <div class="text-center">
            <h1 class="form-title">Actualités</h1>
        </div>
        <div v-if="this.checkLengthItems()">
            <ActuComponent v-bind:titre="item.Titre" v-bind:date="this.conversionDate(item.Date)" v-bind:Contenu="item.Contenu" v-bind:classe="item.Classe"  v-for="item in items.slice(0,5).reverse()" :key="item"/>
        </div>
        <div v-else class="alertMessage"><p>{{alerMessage}}</p></div>

    </section>


</template>

<script>
    import ActuComponent from "./ActuComponent.vue";
    import axios from 'axios';

    export default{
        name : "HomePage",

        components: {
            ActuComponent
        },

        data(){
            return {
                items: [],
                alerMessage : "",
            }
        },

        created(){
            this.getActualite();
        },

        methods : {
            checkLengthItems(){
                if(this.items.length == 0){
                    this.alerMessage = "PAS D'ACTUALITE..."
                    return false;
                }
                else{
                    this.alerMessage = ""
                    return true;
                }
            },

            async getActualite(){
                try{
                    await axios.get("http://localhost:3000/")
                    .then(response =>{
                        this.items = response.data;
                        console.log(response.data);
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                }
                catch(error){
                    console.log(error);
                }

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
