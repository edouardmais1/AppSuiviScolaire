<template> 
    <div class="row bodys">
        <div class="col-sm body">
            {{name}}
        </div>
        <div class="col-sm body">
            {{mail}}
        </div>

       <div class="col-sm body">
            {{contenu}}
        </div>

        <div class="col-sm body">
            {{date}}
        </div>
        
        <div class="col-sm body" v-if="signature == '0'">
            <i class="fas fa-times redcolor"></i>
        </div>
         <div class="col-sm body" v-else>
            <i class="fas fa-check greencolor"></i>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
const url = require("../../url/url.js");
export default{
    name : "CompComponent",
    data(){
        return {
            name: "",
        }
    },
    props: {
        mail : String,
        contenu: String,
        date: Date,
        signature: Number,
    },
    created(){
        //this.getNameByEleveId();
    },

    methods:{
        async getNameByEleveId(){
            let destinationUrl = url.concatUrl('/eleves/' + this.eleveId);
            await axios.get(destinationUrl)
            .then(response =>{
                this.name = response.data[0].Prenom;
            })
            .catch(error =>{
                console.log(error)
            })
        },
    }
}

</script>
<style scoped>
.bodys {
    float: none;
    margin: 0 auto;

}

.body{
    padding-bottom: 5px;
    margin-top:10px;
}

.greencolor{
    color: green;
}

.redcolor{
    color: red;
}

</style>
