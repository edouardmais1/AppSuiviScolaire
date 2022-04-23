<template>
<ModaleComponent v-bind:revele="revele" v-bind:toggleModale="toggleModale"></ModaleComponent>
    <div class="listeEvenements">
    <div class="row">
        <div class="col-sm">
            <textarea rows="5" type="text" class="form-control" placeholder="Contenu" aria-label="Contenu" aria-describedby="basic-addon1" v-bind:value="nom"></textarea>
        </div>
        <div class="col-sm">
            <button v-on:click="toggleModale" type="button" class="btn btn-success"><i class="fas fa-solid fa-check"></i></button>
            <button v-on:click="toggleModale" type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
        </div>
    </div>
    
    </div>
</template>

<script>
    import ModaleComponent from "./ModalComponent.vue"
    export default{
        name: "GestionEvenements",
        
        components: {
            ModaleComponent
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

<style>
.listeEvenements{
    margin-top: 15px;
    width: 100%;
}

</style>
