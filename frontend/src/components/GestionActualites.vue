<template>
<ModaleComponent v-bind:revele="revele" v-bind:toggleModale="toggleModale"></ModaleComponent>
            <div class="listeActualites">
        <div class="row">
            <div class="col-sm">
                <select class="form-control" placeholder="Titre" aria-label="Titre" aria-describedby="basic-addon1" @change="getActuByTitle($event)">
                    <option value="NOPE" selected>Choisissez une actualité ...</option>
                    <option v-bind:value="item.Titre" v-for="item in items" :key="item.Titre">{{item.Titre}}</option>
                </select>
            </div>
            <div class="col-sm">
                <input type="text" v-if="this.items_available == false" class="form-control" aria-label="Date" aria-describedby="basic-addon1" placeholder="Date de l'événement">
                <input type="text" class="form-control" v-else aria-label="Date" aria-describedby="basic-addon1" placeholder="Date de l'événement" v-bind:value="conversionDate(this.itemsByTitle[0].Date)"> 
            </div>
            <div class="col-sm">
                <textarea class="form-control" placeholder="Contenu de l'actualité..." aria-label="With textarea" v-if="this.items_available == false"></textarea>
                <textarea class="form-control" placeholder="Contenu de l'actualité..." aria-label="With textarea" v-else v-bind:value="this.itemsByTitle[0].Contenu"></textarea>
            </div>
            <div class="col-sm">
                <button v-on:click="toggleModale" type="button" class="btn btn-success"><i class="fas fa-solid fa-check"></i></button>
                <button v-on:click="toggleModale" type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
            </div>
        </div>
        </div>
</template>


<script>
    import axios from 'axios';
    import ModaleComponent from "./ModalComponent.vue"

    const url = require('../../url/url.js');
    export default{
        name: "GestionEleves",
        
        components: {
            ModaleComponent
        },

        data(){
            return{
                revele: false,
                items: [],
                itemsByTitle: [],

                items_available: false,

            }
        },

        created(){
            this.getActualite();
        },

        
        methods:{
            toggleModale: function(){
                this.revele=!this.revele;
            },

            async getActualite(){
                let destinationUrl = url.concatUrl('/');

                await axios.get(destinationUrl)
                .then(response =>{
                    this.items = response.data;
                })
                .catch(error =>{
                    console.log(error);
                })
                
            },

            checkSateofItems(param){
                if(param == "NOPE"){
                    return false;
                }
                else{
                    return true;
                }
            },

            async getActuByTitle(event){

                if(this.checkSateofItems(event.target.value)){
                    let title = event.target.value;

                    let destinationUrl =  url.concatUrl(`/actualite/${title}`)
                    this.checkSateofItems(event.target.value)

                    await axios.get(destinationUrl)
                    .then(response =>{
                        this.itemsByTitle = response.data;
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                    this.items_available = true;
                }
                else{
                    this.items_available = false;
                }

            },

            conversionDate(date){
                let result = new Date(date);

                return result.toLocaleDateString();
            },

        }
    }

</script>


<style scoped>

.listeActualites{
    margin-top: 15px;
}

.underlined{
    text-decoration: underline;
}

.button-Save{
    margin-left: 85%;
}
.add-button{
    margin-left: 5%;
    margin-top: 15px;
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
</style>