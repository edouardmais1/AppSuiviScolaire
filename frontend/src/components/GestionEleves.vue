<template>
    <div class="listeEleves">
    <div class="row">
        <div class="col-sm">
            <input type="text" class="form-control" placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1" v-bind:value="this.nom">
        </div>
        <div class="col-sm">
            <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" aria-describedby="basic-addon1" v-bind:value="prenom">
        </div>
        <div class="col-sm">
            <input type="email" class="form-control" placeholder="Email " aria-label="Email" aria-describedby="basic-addon1" v-bind:value="email">
        </div>
        <div class="col-sm">
            <select class="custom-select" id="inputGroupSelect01">
                <option v-bind:value="classe" selected>{{classe}}</option>
                <option v-for="item in items" :key="item.Classe">{{item.Classe}}</option>
            </select>
        </div>
        <div class="col-sm">
            <input type="text" class="form-control"  aria-label="Date" aria-describedby="basic-addon1" v-bind:value="dateNaissance">
        </div>
        <div class="col-sm">
            <button type="button" class="btn btn-success"><i class="fas fa-solid fa-check"></i></button>
            <button type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
        </div>
    </div>
    
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name: "GestionEleves",

        data(){
            return{
                items : [],
            }
        },

        props:{
            nom : String,
            prenom : String,
            email: String,
            dateNaissance: Date,
            classe: String,
        },

        created(){
            this.getClasses()
        },

        methods:{
            async getClasses(){
                await axios.get("http://localhost:3000/classes")
                .then(response =>{
                    this.items = response.data;
                })
                .catch(error =>{
                    console.log(error)
                })
            }
        }
    }

</script>


<style>

.SecretariatPage{
    /*
    background-image: url("../../public/images/background-school-2.jpg");*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}
.containerSecretariatEleves{
    margin-left: 5%;
    margin-right: 5%;
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
.custom-select{
    width: 100%;
    height: 100%;
}
</style>