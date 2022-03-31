<template>
<div class="container-contact">
    <div class="wrapper">
        <header>Contact</header>

        <form action="#" @submit.prevent="sendMail()">
        <div class="items-1">
            <div class="dbl-field">
                <div class="field">
                    <input type="text" placeholder="Entrez votre nom" class="contact-input-1" v-model="name">
                    <i class="fas fa-user"></i>
                </div>
            </div>
            <div class="dbl-field">
                <div class="field">
                    <input type="text" placeholder="Objet de votre mail" class="contact-input-2" v-model="objet">
                    <i class="fas fa-envelope" id="item"></i>
                </div>
            </div>
        </div>
        <div class="items-2">
            <div class="dbl-field">
                <div class="field">
                    <input type="text" placeholder="Entrez votre numéro de téléphone" class="contact-input-3" v-model="telephone">
                    <i class="fas fa-phone-alt"></i>
                </div>
            </div>
            <div class="dbl-field">
                <div class="field">
                    <input type="email" placeholder="Mail du destinataire" class="contact-input-4" v-model="email">
                    <i class="fas fa-envelope" id="item"></i>
                </div>
            </div>
        </div>
            <div class="message">
                <textarea placeholder="Ecrivez votre message"></textarea>
            </div>
            <div class="button-area">
                <button type="submit">Envoyer</button>
                <p class="message-alert">{{message}}</p>
            </div>
        </form>
    </div>
</div>

</template>

<script>
import axios from 'axios';

    export default{
        name: "ContactPage",
        data(){
            return{
                name:'',
                objet:'',
                telephone:'',
                email:'',
                message:'',
            }
        },

        methods:{
            sendMail(){
                if(this.checkInputs()){
                    this.message ="";
                    this.CreateRequest();
                }
                else{
                    console.log("nope");
                    this.message = "VEUILLEZ COMPLETER CHAQUE CHAMPS DU FORMULAIRE !"
                }
            
            },

            checkInputs(){
                if(this.name.length != 0 && this.objet.length != 0 && this.email.length != 0 && this.telephone.length != 0){
                    return true;
                }
                else{
                    return false;
                }

            },
            CreateRequest(){
                axios.post("http://localhost:3000/sendMail",{
                        nom: this.name,
                        email: this.email,
                        objet: this.objet,
                        telephone: this.telephone,
                    })
                    .then(response =>{
                        console.log(response);
                    })
                    .catch(error =>{
                        console.log(error);
                    });
                },
        },
    }

</script>
<style>
@font-face {
  font-family: 'magical_holidayregular';
  src:  url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff2') format('woff2'),
        url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Poppins'
}

.message-alert {
    font-family: 'Poppins';
    margin-top: 15px;
    color: red;
    font-size: 15px;
}

.container-contact {
    margin-top: 150px;
}

.items-1 {
    display: flex;
    align-items: center;
}

.items-1 .dbl-field {
    flex-basis: 50%;
    align-items: center;
}

.items-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.items-2 .dbl-field {
    margin-top: 40px;
    flex-basis: 50%;
}

.items-2 .dbl-field .field {
    width: 90%;
}

.items-1 .dbl-field .field {
    width: 90%;
}


.items-1 .dbl-field .field .contact-input-2 {
    margin-left: 11.5%;
}

.items-2 .dbl-field .field .contact-input-4 {
    margin-left: 11.5%;
}

.wrapper {
    width: 60%;
    margin-left:auto;
    margin-right:auto;
    background: #fff;
    border-radius: 20px;
    border: 3px solid #6dabe4;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.05);

}

.wrapper header {
    font-size: 36px;
    text-align: center;
    font-weight: 300;
    padding: 20px 30px;
    border-bottom: 3px solid #6dabe4;
}

.wrapper form {
    margin:35px 30px;
}

.wrapper form.disabled {
    pointer-events: none;
    opacity: 0.7;
}

.dbl-field .field {
    height: 50px;
    position: relative;
    width: calc(100% / 2 - 13px);
    margin-top: 30px;
}

.wrapper form i {
    position: absolute;
    top: 50%;
    left: 18px;
    color: #ccc;
    font-size: 17px;
    pointer-events: none;
    transform: translateY(-50%);
}

.wrapper #item {
    position: absolute;
    top: 50%;
    left: 15%;
    color: #ccc;
    font-size: 17px;
    pointer-events: none;
    transform: translateY(-50%);

}

form .field input {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 18px 0 48px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

form .message textarea {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 18px 0 48px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.field input::placeholder,
.message textarea::placeholder {
    color: #ccc;
}

.field input:focus,
.message textarea:focus {
    border: 3px solid #6dabe4;
}

form .message {
    position: relative;
    margin-top: 30px;
    height: 200px;
}

form.message i {
    top: 30px;
    font-size: 20px;
}

form .message textarea {
    min-heigth: 175px;
    max-heigth: 230px;
    max-width: 100%;
    min-width: 100%;
    text-align: center;
    padding: 15px 20px 0px 48px;
}

form .message textarea::-webkit-scrollbar {
    width: 0px;
}

.message textarea:focus {
    padding-top: 14px;
}


form .button-area {
    margin: 50px 0;
    text-align: center;
}

.button-area button {
    color : #fff;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    padding: 13px 25px;
    background: #6dabe4;
    transition: background 0.3s ease;
    transition: transform 400ms;
}

.button-area button:hover {
    transform: scale(1.10);
}

.button-area span {
    font-size : 17px;
    margin-left: 30px;
    display: none;
}

@media (max-width: 600px) {
    .wrapper header {
        text-align: center;
    }
    .wrapper form {
        margin: 35px 20px;
    }
    .wrapper {
        width: 90%;
    }
    form .dbl-field {
        flex-direction: column;
        margin-bottom: 0px;
    }
    form .dbl-field .field {
        width: 60%;
        heigth: 45px;
        margin-bottom: 20px;

    }

    form .message textarea {
        resize: none;

    }

    form .button-area {
        margin-top: 20px;
        flex-direction: column;
    }

    .button-area button {
        width: 100%;
        padding: 11px;
        font-size: 16px;
    }

    .button-area span {
        margin: 20px 0 0;
        text-align: center;
    }
}
</style>