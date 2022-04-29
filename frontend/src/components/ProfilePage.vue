<template>
<div data-aos="zoom-in-left" data-aos-duration="1250">
<div class="container">
<form class="row g-3">
  <div class="col-md-6">
  <h1 class="title">Votre Profil <i class="fas fa-regular fa-user"></i></h1>
    <div class="row">
        <div class="col-sm">
        <div class="underlined">
            <h7>Prénom:</h7>

        </div>
        </div>
        <div class="col-sm">
            <p class="users-infos">{{user[0].Prenom}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
        <div class="underlined">
            <h7>Nom:</h7>
            </div>
        </div>
        <div class="col-sm">
            <p class="users-infos">{{user[0].Nom}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
        <div class="underlined">
            <h7>Adresse email:</h7>
        </div>
        </div>
        <div class="col-sm">
            <p class="users-infos">{{user[0].Mail}}</p>
        </div>
    </div>


    <h1 class="title">Vos Enfants <i class="fas fa-solid fa-child"></i></h1>


    

    
    <div class="profil-enfant">
    <div class="row">
        <div class="col-sm">
            <h5 > Nom: </h5>
        </div>
        <div class="col-sm">
            <h5> Prénom: </h5>
        </div>

        <div class="col-sm">
            <h5> Classe actuelle:</h5>
        </div>

        <div class="col-sm">
            <h5> Date de naissance:</h5>
        </div>

    </div>
            <ProfilEnfant></ProfilEnfant>
    </div>


    <div class="right">
    <button type="submit" @click="logout()" value="deconnexion" class="btn btn-danger">Déconnexion <i class="fas fa-solid fa-door-open"></i></button>
    </div>

</div>
</form>
</div>

</div>
  
</template>

<script>
import {mapState} from 'vuex';
import ProfilEnfant from './ProfilEnfant.vue'
    export default{
        name: 'ProfilePage',

        data(){
            return{
                message: ""
            }
        },
        components: {
            ProfilEnfant,
        },
        //trouver un moyen d'éviter les erreurs de chargement.
        created(){
            this.$store.dispatch('getUserInfos',this.$store.state.user[0].Token);
        },

        /*mounted: function(){

            if(this.$store.state.user == ""){
                this.$router.push('/');
            }
            this.$store.dispatch('getUserInfos',this.$store.state.user[0].Token);
        },*/

        computed:{
            ...mapState({
                user: 'userInfos',
            }),
        },

        methods: {
            logout: function(){
                this.$store.commit('logout');
                this.$router.push('/');
            },
        }
    }

</script>


<style scoped>

.title{
    text-align: center;
    margin-bottom: 50px;
    margin-top: 50px;
}

.btn{
    margin-top: 50px;
}
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
    padding: 15px;
    max-width: 60%;
    margin-top: 100px;
    min-width: 250px;
}


.row{
    padding-bottom: 10px;
    margin: auto;
    padding-top: 15px;
}

.col-sm{
    width: 50%;
    min-width: 200px;
    padding: 5px;
}
.col-md-6{
    margin: 0 auto;
    width: auto;
}

.profil-enfant{
    width: auto;
}
.right{
    float:right;
}


</style>