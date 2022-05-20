<template> 
    <div class="row bodys">
        <div class="col-sm body">
            {{prenom}} {{nom}}
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
export default{
    name : "CompComponent",
    data(){
        return {
            name: "",
        }
    },
    props: {
        nom: String,
        prenom : String,
        eleveId : Number,
        mail : String,
        contenu: String,
        date: String,
        signature: Number,
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
