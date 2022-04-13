<template>
<section class="HomePage">
    <div class="text-center">
            <h1 class="form-title">Actualités</h1>
    </div>
    <div>
        <div data-aos="zoom-in-left" data-aos-duration="1250">
            <div class="HomePageContainer">
            <div class="row">
                    <div class="col-sm">
                    <h3 class="form-title">{{this.items[items.length - 1].Titre}}</h3>
                    </div>
                    <div class="col-sm"></div>
                    <div class="col-sm">
                     <h8 class="form-title">{{this.conversionDate(this.items[items.length - 1].Date)}}</h8>
                    </div>
            </div>
            <div><p>{{this.items[items.length - 1].Contenu}}</p></div>
            </div>
        </div>
    </div>
        <div>
        <div data-aos="zoom-in-left" data-aos-duration="1250">
            <div class="HomePageContainer">
            <div class="row">
                    <div class="col-sm">
                    <h3 class="form-title">{{this.items[items.length - 2].Titre}}</h3>
                    </div>
                    <div class="col-sm"></div>
                    <div class="col-sm">
                     <h8 class="form-title">{{this.conversionDate(this.items[items.length - 2].Date)}}</h8>
                    </div>
            </div>
            <div><p>{{this.items[items.length - 2].Contenu}}</p></div>
            </div>
        </div>
    </div>    <div>
        <div data-aos="zoom-in-left" data-aos-duration="1250">
            <div class="HomePageContainer">
            <div class="row">
                    <div class="col-sm">
                    <h3 class="form-title">{{this.items[items.length - 3].Titre}}</h3>
                    </div>
                    <div class="col-sm"></div>
                    <div class="col-sm">
                     <h8 class="form-title">{{this.conversionDate(this.items[items.length - 3].Date)}}</h8>
                    </div>
            </div>
            <div><p>{{this.items[items.length - 3].Contenu}}</p></div>
            </div>
        </div>
    </div>    <div>
        <div data-aos="zoom-in-left" data-aos-duration="1250">
            <div class="HomePageContainer">
            <div class="row">
                    <div class="col-sm">
                    <h3 class="form-title">{{this.items[items.length - 4].Titre}}</h3>
                    </div>
                    <div class="col-sm"></div>
                    <div class="col-sm">
                     <h8 class="form-title">{{this.conversionDate(this.items[items.length - 4].Date)}}</h8>
                    </div>
            </div>
            <div><p>{{this.items[items.length - 4].Contenu}}</p></div>
            </div>
        </div>
    </div>
    
    </section>
</template>

<script>

import axios from 'axios'
    export default{

        name: "HomePage",
        data(){
            return{
                items: [],
            }
        },

        created(){
            this.getActualite();
        },

        methods : {
            getActualite(){
                axios.get("http://localhost:3000/")

                    .then(reponse =>{
                        this.items = reponse.data;
                    })
                    .catch(error =>{
                        console.log(error);
                    });
            },

            conversionDate(date){
                let result = new Date(date);

                return result.toLocaleDateString();
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
.HomePageContainer{
    width: 50%;
    height: 0 auto;
    margin: 0 auto;
    box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    border-radius: 50px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    -o-border-radius: 20px;
    -ms-border-radius: 20px; 
    padding: 10px;
    background-color: white;
    margin-top: 50px;
        border: solid;
    border-color: #6dabe4;
}

</style>