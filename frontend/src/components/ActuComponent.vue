<template>
    <div>
        <div data-aos="zoom-in-left" data-aos-duration="1250">
            <div class="HomePageContainer">
            <div class="row">
                    <div class="col-sm">
                    <h3 class="form-title">{{titre}}</h3>
                    </div>
                    <div class="col-sm"></div>
                    <div class="col-sm">
                     <p class="form-title">{{date}}</p>
                    </div>
            </div>
            <div><p>{{Contenu}}</p></div>
            </div>
        </div>
    </div>
</template>


<script>

    export default{
        //Nom de composant actuel
        name : "ActuComponent",

        //Props contenant des variables utilisées pour la gestion de données dans le html
        props: {
            titre : String,
            date: Date,
            Contenu: String,
        },
    }

</script>

<style scoped>

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
