<template>
        <div id="nav">
        <NavBar/> 
        </div>
        <!--formualaire d'inscription-->
        <section class="inscription">
        <div data-aos="zoom-in-left" data-aos-duration="1250">
            <div class="container">
                <div class="inscription-group">
                    <div class="inscription-form">
                        <h2 class="form-title">Inscription</h2>

                        <form method="" class="formulaire" id="formulaire" @submit.prevent="this.SendData()">
                            <div class="inputs">
                                <label for="name" class="input-label"></label>
                                <input type="text" name="name" id="name" placeholder="Votre Nom" autocomplete="off" v-model="nom" class="inscription-input">
                            </div>

                            <div class="inputs">
                                <label for="firstname" class="input-label"></label>
                                <input type="text" name="firstname" id="firstname" placeholder="Votre Prénom" autocomplete="off" v-model="prenom" class="inscription-input">
                            </div>

                            <div class="inputs">
                                <label for="email" class="input-label"></label>
                                <input type="email" placeholder="Votre Email" id="email" v-model="email" class="inscription-input">
                            </div>

                            <div class="inputs">
                                <label for="password" class="input-label"></label>
                                <input type="password" name="password" id="password" placeholder="Mot de passe" autocomplete="off" v-model="password" class="inscription-input">
                            </div>

                            <div class="input">
                                <label for="re-password" class="input-label"></label>
                                <input type="password" name="re-password" id="re-password" placeholder="Confirmer le mot de passe" autocomplete="off" v-model="repassword" class="inscription-input">
                            </div>

                            <div class="input-button">
                                <button type="submit" name="inscription" id="inscription" class="submit-bouton" :disabled="validatedFields" >S'inscrire  </button>
                            </div>
                        </form>
                    </div>

                    <div class="alertMessage">
                        <p>{{message}}</p>
                    </div>

                    <div class="link">
                        <router-link to="/connexion" class="connexion-link">Je suis déjà membre</router-link>
                    </div>
                </div>
            </div>
            </div>
        </section>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios';
import NavBar from './NavBar.vue'

const url = require('../../url/url.js');

export default{
    name: 'InscriptionPage',

    data(){
        return{
            nom:'',
            prenom: '',
            email: '',
            password:'',
            repassword:'',
            message: '',

            mail_exist: '',
        }
    },
    components: {
        NavBar,
    },

    computed: {
        validatedFields : function(){
            if(this.prenom != "" && this.nom != "" && this.email != "" && this.password != "" && this.repassword != ""){
                if(this.password == this.repassword){
                    return false;
                }
                else{
                    return true;
                }
            }
            else{
                return true;
            }
        },
        ...mapState(['status'])
    },

    methods : {

        rand(){
            return Math.random().toString(36).substr(2);
        },

        jeton(){
            return this.rand() + this.rand();
        },


        checkAccountExist(mail){
            let destinationUrl = url.concatUrl(`/users/${mail}`)

            return new Promise((resolve, reject)=>{
                axios.get(destinationUrl)
                .then(response =>{
                    this.mail_exist = response.data.length;
                    resolve(response);
                })
                .catch(error =>{
                    reject(error);
                })
            })
            },

        async SendData(){
            await this.checkAccountExist(this.email)

            if(this.mail_exist == "1"){
                this.message = "Ce compte éxiste déja"
            }

            else{
                this.message = ""
                //validation des données à mettre en place

                this.createAccount();
            }
        },
        
        logUser(){
            const self = this;

            this.$store.dispatch('login',this.email)
            .then(function(){
                self.$router.push('/profile');
            })
            .catch(error =>{
            console.log(error);
            })
        },

        createAccount(){
            const self = this;

            this.$store.dispatch('createAccount',{
                Nom: this.nom,
                Prenom: this.prenom,
                Mail : this.email,
                MotDePasse: this.password,
                Jeton: this.jeton(),
            })
            .then(function(){
                self.logUser();
            })
            .catch(error =>{
                console.log(error);
            })
        },
    },

};


</script>

<style scoped>
@font-face {
    font-family: 'magical_holidayregular';
    src: url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff2') format('woff2'),
         url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

@media screen and (max-width: 1200px) {
.container {
    width: calc( 100% - 30px);
    max-width: 100%; } }
@media screen and (min-width: 1024px) {
.container {
    max-width: 1200px; } }
@media screen and (max-width: 768px) {
.signup-content, .signin-content {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center; }
}

@media screen and (max-width: 400px) {
  .social-login {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column; }

  .social-label {
    margin-right: 0px;
    margin-bottom: 10px; } }

h2 {
    line-height: 1.66;
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #222;
    font-size: 36px; }

label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    color: #222; }

.alertMessage{
    color: red;
    margin-left: 40%
}
          
.container {
    border: 3px solid #6dabe4;
    width: 900px;
    background: #fff;
    margin: 0 auto;
    box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    -o-border-radius: 20px;
    -ms-border-radius: 20px; }

.form-title {
    font-family:'Poppins';
    font-weight: 200;
    margin-bottom: 33px;
}

.inscription {
    margin-top: 3.5%;
    padding-top: 40px;
    padding-bottom: 10%;
}

.inscription-group {
    padding: 75px 0;
 }

.inscription-form{
    margin: 0 auto;
    width: 50%;
    overflow: hidden;
    padding-bottom: 15px;
 }

.submit-bouton {
    display: inline-block;
    background: #6dabe4;
    color: #fff;
    border: none;
    font-family: 'Poppins';
    width: auto;
    padding: 15px 39px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    margin-top: 25px;
    cursor: pointer;
    transition: transform 400ms;
 }

.submit-bouton:hover{
    transform: scale(1.20);
}

.input-button{
    margin-top: 10px;
    text-align: center;
}

.inputs {
    position: relative;
    margin-bottom: 35px;
    overflow: hidden; }

.inputs:last-child {
    margin-bottom: 0px; 
}

.connexion-link {
    font-size: 14px;
    color: #222;
    display: block;
    text-align: center;
    text-decoration: none;
    font-family: 'Poppins';
    font-size: 15px;
    transition: transform 400ms;
 }

.connexion-link:hover {
    transform: scale(1.25);
}

.link{
    margin-top: 30px;
}

</style>