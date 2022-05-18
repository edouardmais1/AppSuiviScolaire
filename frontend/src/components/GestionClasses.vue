<template>
        <div class="listeClasse">
        <div class="row">
            <div class="col-sm">
            {{classeData.Classe}}
            </div>
            <div class="col-sm">
                <select v-model="this.mailInput" class="custom-select">
                    <option selected>{{classeData.Mail}}</option>
                    <option v-for="item in items[0]" :key="item.Mail">{{item.Mail}}</option>

                </select>
            </div>
            <div class="col-sm">
                <button @click="updateEleve()" type="button" class="btn btn-success btn-lg"><i class="fas fa-solid fa-check"></i></button>
            </div>
        </div>
        </div>
</template>

<script>
    const url = require('../../url/url.js');
        import axios from 'axios';
    export default{
        name: "GestionClasses",
        props: {
            classeData: Object,
        },
        data(){
            return{
                items : [],
                mailInput: this.classeData.Mail,
            }
        },
        created(){
            this.getProfMail();
        },
        methods: {
            async getProfMail(){

                    let destinationUrl = url.concatUrl("/allmailprof");
                    await axios.get(destinationUrl)
                    .then(response =>{
                        this.items = response.data;
                    })
                    .catch(error =>{
                        console.log(error)
                    })
            },
            async updateEleve(){
                let destinationUrl = url.concatUrl('/updateClasseByMailProf');
                console.log(this.mailInput);
                await axios.post(destinationUrl,
                {
                    Mail:this.mailInput,
                    Classe:this.classeData.Classe,
                })
                .then(function(){
                    location.reload();
                })
                .catch(error =>{
                    console.log(error)
                })
            },
        },
    }

    
</script>

<style>
.listeClasse{
    margin-top: 15px;
}
</style>