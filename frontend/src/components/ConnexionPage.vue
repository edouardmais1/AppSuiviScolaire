<template>
    <section class="connexion">
        <div class="container">
            <div class="connexion-group">
                <div class="connexion-form">
                    <h2 class="form-title">Sign In</h2>

                    <form action="" class="formulaire" id="formulaire">
                        <div class="inputs">
                            <label for="email" class="input-label"></label>
                            <input type="email" name="email" id="email" placeholder="Your Mail" autocomplete="off">
                        </div>
                        <div class="inputs">
                            <label for="password" class="input-label"></label>
                            <input type="password" name="password" id="password" placeholder="Your Password" autocomplete="off">
                        </div>

                        <div class="input-button">
                            <button type="submit" class="submit-bouton" name="connexion" id="connexion">Sign In</button>
                        </div>
                    </form>
                </div>

                <div class="link">
                    <router-link to="inscription" class="inscription-link">Create an account</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@font-face {
    font-family: 'magical_holidayregular';
    src: url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff2') format('woff2'),
         url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

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


input {
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid #999;
    padding: 6px 30px;
    box-sizing: border-box; }
    input::-webkit-input-placeholder {
        color: #999; }
    input::-moz-placeholder {
        color: #999; }
    input:-ms-input-placeholder {
        color: #999; }
    input:-moz-placeholder {
        color: #999; }
    input:focus::-webkit-input-placeholder {
    color: #222; }
    input:focus::-moz-placeholder {
    color: #222; }
    input:focus:-ms-input-placeholder {
    color: #222; }
    input:focus:-moz-placeholder {
    color: #222; }

    input:focus{
        outline-style:none;
        box-shadow:none;
        border-color:black;
        background-color: white;
    }

    input:active{
        background-color: white;
    }   


label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    color: #222; 
}


.container {
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
    -ms-border-radius: 20px; 
}

.form-title{
    font-family:'magical_holidayregular';
    font-weight: 20;
    margin-bottom: 33px;
}

.connexion{
    background-image: url("../../public/images/schoolbackground.jpg");
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}

.connexion-group {
    padding: 75px 0;
}

.connexion-form{
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
    font-family: 'magical_holidayregular';
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

.inputs{
    position: relative;
    margin-top: 15px;
    overflow: hidden; }

.inputs:last-child {
    margin-bottom: 0px; 
}

.connexion-image{
    max-width: 40px;
    max-height: auto;
}


.inscription-link {
    font-size: 14px;
    color: #222;
    display: block;
    text-align: center;
    text-decoration: none;
    font-family: 'magical_holidayregular';
    font-size: 15px;
    transition: transform 400ms;
 }

.inscription-link:hover{
    transform: scale(1.25);
}


.link{
    margin-top: 30px;
}


</style>