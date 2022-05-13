<template>
<div class="listeCalendrier">
    <div class="row">
        <div class="col-4">
            <p v-bind= "titreDelete">{{titreDelete.Titre}}</p>
        </div>
        <div class="col-3">
            <p v-bind= "startTime">{{convertDateOnTime(titreDelete.StartTime)}}</p>
        </div>
        <div class="col-3">
            <p v-bind= "stopTime">{{convertDateOnTime(titreDelete.StopTime)}}</p>
        </div>
        <div class="col-2">
            <button  type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
        </div>
    </div>
    
    </div>
</template>

<script>
    //import axios from 'axios';
    //const url = require("../../url/url.js");
    export default{
        name: "GestionCalendrier",
        
        components: {
    
        },
        props:{
            titreDelete: String,
            stopTime: String,
            startTime: String,
        },
        methods:{
            convertDateOnTime(dateTime){
                let firstSplit = dateTime.split('T');
                let secondSplit = firstSplit[1].split('.'); //18:38:48
                let thirdSplit = secondSplit[0].split(':'); 
                let add = parseInt((thirdSplit[0])) + 2;
                let final = add.toString() + ":" + thirdSplit[1] + ":" + thirdSplit[2];
                return final;
            }
        }
    }

</script>


<style>


</style>