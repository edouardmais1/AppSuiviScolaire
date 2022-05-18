<template>
<div class="listeCalendrier">
    <div class="row">
        <div class="col-4">
            <p>{{eventData.Titre}}</p>
        </div>
        <div class="col-3">
            <p>{{convertDateOnTime(eventData.StartTime)}}</p>
        </div>
        <div class="col-3">
            <p>{{convertDateOnTime(eventData.StopTime)}}</p>
        </div>
        <div class="col-2">
            <button  v-on:click="deleteEventById()"  id="supprimer" type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
        </div>
    </div>
    
    </div>
</template>

<script>
    import axios from 'axios';
    const url = require("../../url/url.js");
    export default{
        name: "GestionCalendrier",
        
        components: {
    
        },
        props:{
            eventData: Object,
        },
        methods:{
            convertDateOnTime(dateTime){
                let firstSplit = dateTime.split('T');
                let secondSplit = firstSplit[1].split('.'); //18:38:48
                let thirdSplit = secondSplit[0].split(':'); 
                let add = parseInt((thirdSplit[0])) + 2;
                let final = add.toString() + ":" + thirdSplit[1] + ":" + thirdSplit[2];
                return final;
            },

        
            async deleteEventById(){

                let destinationUrl = url.concatUrl("/deleteEvent/" + this.eventData.EvenementID);
                await axios.delete(destinationUrl)
                .then(function(){
                    location.reload();
                })
                .catch(function(){
                    //pass
                })
            },
        }
    }

</script>


<style>


</style>