<template>
<ModaleComponent v-bind:revele="revele" v-bind:toggleModale="toggleModale"></ModaleComponent>
            <div class="listeActualites">
        <div class="row">
            <div class="col-sm">
                <select type="text" class="form-control" placeholder="Titre" aria-label="Titre" aria-describedby="basic-addon1">
                    <option value="NOPE" selected>Choisissez une actualité ...</option>
                </select>
            </div>
            <div class="col-sm">
                <input type="text" class="form-control" aria-label="Date" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <textarea class="form-control" placeholder="Contenu de l'actualité..." aria-label="With textarea"></textarea>
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
        name: "GestionEleves",
        
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


<style scoped>

.listeActualites{
    margin-top: 15px;
}

.underlined{
    text-decoration: underline;
}

.button-Save{
    margin-left: 85%;
}
.add-button{
    margin-left: 5%;
    margin-top: 15px;
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
</style>