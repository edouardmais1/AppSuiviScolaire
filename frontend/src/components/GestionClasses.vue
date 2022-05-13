<template>
        <div class="listeClasse">
        <div class="row">
            <div class="col-sm">
            {{classeData.Classe}}
            </div>
            <div class="col-sm">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>{{classeData.Mail}}</option>
                    <option v-for="item in items[0]" :key="item.Mail">{{item.Mail}}</option>

                </select>
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
            classeData: String,

        },
        data(){
            return{
                items : [],
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
        },
    }

    
</script>

<style>
.listeClasse{
    margin-top: 15px;
}
</style>