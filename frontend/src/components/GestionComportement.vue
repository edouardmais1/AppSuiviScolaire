<template>
    <div class="listeEleves">
    <div class="row">
    <div class="col-sm text-center">
            <p> {{eleveId}} </p>
        </div>
        <div class="col-sm text-center">
            <p> {{contenu}} </p>
        </div>
        <div class="col-sm text-center">
            <p> {{splitDate(date)}} </p>
        </div>
        <div class="col-sm ">
            <div v-if="check == 1" class="text-center"> <i class="fas greencolor  fa-solid fa-check"></i></div>
            <div v-if="check == 0" class="text-center"> <i class="fas redcolor fa-solid fa-exclamation"></i></div>
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

        props: {
            eleveId: String,
            contenu: String,
            date: Date,
            signature: Number,
        },


        data(){
            return{
                revele: false,     
                check: this.signature,  
            }
        },


        methods:{ 
            /*toggleModale: function(){
                this.revele=!this.revele;
            },*/
            setCheck(state){
                this.check = state;
            },
            splitDate(date){
                return((date.split('T'))[0]);
            }

        },

    }

</script>


<style scoped>


.redcolor{
    color: red;
}
.greencolor{
    color: green;
}
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