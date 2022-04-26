<template> 
    <div class="row bodys">
        <div class="col-xl-3 body">
            {{mail}}
        </div>

       <div class="col-xl-3 body">
            {{contenu}}
        </div>

        <div class="col-xl-3 body">
            {{date}}
        </div>
        
        <div class="col-xl-3 body" v-if="signature == '0'">
            <input type="checkbox" id="1" class="input-comportement" true-value="1" false-value="0" />
        </div>
         <div class="col-xl-3 body" v-else>
            <input type="checkbox" id="2" class="input-comportement" true-value="1" false-value="0" checked/>
        </div>
    </div>
</template>


<script>

    export default{
        name : "CompComponent",

        props: {
            mail : String,
            contenu: String,
            date: Date,
            signature: Number
            
        },
    }

</script>
<style scoped>
.bodys {
    float: none;
    margin: 0 auto;

}

.body{
    text-align: center;
    padding-bottom: 5px;
    margin-top:10px;
}



</style>
