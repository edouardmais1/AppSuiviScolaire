<template>
<div class="container-comportement">
    <div class="wrapper">
        <header>Comportement</header>
         <table class="table table-hover table-borderless ">
            <thead>
                <tr>
                <th scope="col">Nom du professeur</th>
                <th scope="col">Commentaire</th>
                 <th scope="col">Date</th>
                <th scope="col">Signature</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Pierre Olivier</th>
                    <td>Votre fils a été insolent lors du cours de sport car il ne voulait pas jouer au basket.</td>
                    <td>29/09/2021</td>
                    <td>
                        <input type="checkbox" id="1" class="input-comportement" v-model="toggle" true-value="1" false-value="false" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Jacques Henry</th>
                    <td>Bavardage en classe avec son voisin, impossibe d'arrêter.</td>
                    <td>16/11/2021</td>
                    <td>
                        <input type="checkbox" id="2" class="input-comportement" v-model="toggle" true-value="1" false-value="false" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Céline Vailla</th>
                    <td>Manque de concentration lors d'une présenation avec des élèves au tableau.</td>
                    <td>12/12/2021</td>
                    <td>
                        <input type="checkbox" id="3" class="input-comportement" v-model="toggle" true-value="1" false-value="false" />
                    </td>
                </tr>    
                <tr>
                    <th scope="row">Pierre Olivier</th>
                    <td>3 semaines sans ses affaires de sport. </td>
                    <td>27/01/2022</td>
                    <td>
                        <input type="checkbox" id="4" class="input-comportement" v-model="toggle" true-value="1" false-value="false" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Jacques Henry</th>
                    <td>Très bon comportement de votre fils lors de la sortie scolaire à Durby.</td>
                    <td>25/02/2022</td>
                    <td>
                        <input type="checkbox" id="5" class="input-comportement" v-model="toggle" true-value="1" false-value="false" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Patrick Balok</th>
                    <td>Insolence lors d'une remarque dans les couloirs, son vocabulaire n'était pas adapté à l'école.</td>
                    <td>14/03/2022</td>
                    <td>
                        <input type="checkbox" id="6" class="input-comportement" v-model="toggle" true-value="1" false-value="false" />
                    </td>
                </tr>
                 <tr>
                    <th scope="row">Véronique Blancart</th>
                    <td>Bon comportement en histoire.</td>
                    <td>20/03/2022</td>
                    <td>
                        <input type="checkbox" id="7" class="input-comportement" v-model="toggle" true-value="1" false-value="false" />
                    </td>
                </tr>
                 <tr>
                    <th scope="row">Patrick Balok</th>
                    <td>Bon comportement en classe, que de plaisr !</td>
                    <td>25/04/2022</td>
                    <td>
                        <input type="checkbox" id="8" class="input-comportement" v-model="toggle" true-value="1" false-value="false" />
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>
</template>
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

.container-comportement {
    margin-top: 150px;
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

td, th{
    text-align: center; 
    vertical-align: middle;
}

@media (max-width: 600px) {
    .wrapper header {
        text-align: center;
    }
    
    .wrapper {
        width: 90%;
    }
}
</style>