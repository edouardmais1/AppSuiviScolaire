<template>
    <div class="listeEleves">
    <div class="row">
    <div class="col-sm">
            <p> Edouard Maisin </p>
        </div>
        <div class="col-sm">
            <p> Compréhension de lecture
                Andrée Otte
                Les gladiateurs
                Christian Lamblin
                25 février de l’année 62. Après la longue interruption due aux froids de l’hiver, les
                jeux du cirque vont reprendre dans une grande ville romaine.
                De nombreuses affiches rouges et noires ont été placardées dans les rues de la ville.
                Attirés par cette publicité, plus de vingt mille personnes se pressent aux entrées de l’arène. </p>
        </div>
        <div class="col-sm text-center">
            <p> 13/12/21 </p>
        </div>
        <div class="col-sm ">
            <div class="text-center"> <i class="fas fa-solid fa-check"></i></div>
        </div>
        <div class="col-sm">
            <button v-on:click="toggleModale" type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
        </div>
    </div>
    
    </div>
</template>

<script>


    export default{
        name: "GestionComportement",
        
        components: {
           
        },

        data(){
            return{
                revele: false,
            }
        },

        methods:{
            toggleModale: function(){
                this.revele=!this.revele;
            },

        }
    }

</script>


<style scoped>



.listeEleves{
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
.custom-select{
    width: 100%;
    height: 100%;
}
</style>