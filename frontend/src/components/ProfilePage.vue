<template>
    <h1 class="title">BIENVENU SUR VOTRE PROFIL</h1>

    <p class="users-infos">{{user[0].Prenom}}</p>
    <p class="users-infos">{{user[0].Mail}}</p>
    <p class="users-infos">{{user[0].Nom}}</p>

    <button type="submit" @click="logout()" value="deconnexion" class="deconnexion-button">Deconnexion</button>
</template>

<script>
import {mapState} from 'vuex';
    export default{
        name: 'ProfilePage',

        data(){
            return{
                message: ""
            }
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


<style>

.title{
    margin-top: 100px;
    text-align: center;
}

.deconnexion-button{
    margin-left: 48%;
}

.users-infos{
    text-align: center;
    margin: 100px;
}

</style>