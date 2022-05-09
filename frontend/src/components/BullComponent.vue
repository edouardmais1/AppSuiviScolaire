<template>  
    <div class="row bulletin">
         <div class="col-sm body">
            <a class="bulletin-pdf" download>{{contenu}}</a>
         </div>
         <div class="col-sm body">
            {{date}}
         </div>
    </div>
</template>


<script>

    export default{
        //Nom de composant actuel
        name : "BullComponent",
        //Props contenant des variables utilisées pour la gestion de données dans le html
        props: {
            contenu: Object,
            date: Date,
            
        },
    }

</script>

<style scoped>
.bulletin {
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 30px;
    text-align: center;
}
</style>