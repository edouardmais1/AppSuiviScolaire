<template>
    <div class="container-bulletin">
        <div data-aos="zoom-in-left" data-aos-duration="1250">
            <div class="wrapper">
                <header>Bulletin</header>
                <div class="row titles">
                        <div class="col-md title">Contenu</div>
                        <div class="col-md title">Date</div>
                </div>
                <BullComponent v-bind:contenu="this.messageMaj" v-bind:date="this.conversionDate(item.Date)" v-for="item in items" :key="item"/>
            </div>
        </div>
    </div>
</template>
<script>
 import BullComponent from "./BullComponent.vue";
    import axios from 'axios';

    const instance = axios.create({
    baseURL: 'http://localhost:3000/bulletin'
  });

    export default{
        name : "BulletinPage",

        components: {
            BullComponent
        },

        data(){
            return {
                items: [],
                messageMaj : "à implémenter et pas mettre du bullshit inutile",
            }
        },

        created(){
            this.getBulletinById();
        },

        methods : {

            async getBulletinById(){
                try{
                    await instance.get("/1")
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
<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins'
}
.container-bulletin {
    margin-top: 150px;
    padding-bottom: 10%;
    padding: 50px;
}
.wrapper {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    border-radius: 20px;
    border: 3px solid #6dabe4;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.05);
}
.wrapper header {
    font-size: 36px;
    text-align: center;
    font-weight: 300;
    padding: 20px 30px;
    border-bottom: 3px solid #6dabe4;
}

.titles {
    margin-left: 15px;
    margin-top: 15px;
    text-align: center;
}

.title {
    margin-top: 0px;
    font-weight: bold;
    text-align: center;
}

@media (max-width: 600px) {
    .wrapper header {
        text-align: center;
    }
    
    .wrapper {
        width: 90%;
    }
}

</style>