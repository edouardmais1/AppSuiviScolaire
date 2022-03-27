<template>
<section class="ContactPage">
<div class="row">
<div class="col-1">
    </div>
    <div class="col-4">
        <div class="ContactPageMail">
            <div class="centrage">
                <div class="Shadowed-container-fluid">
                    <form>
                        <div class="form-group">

                            <h3 class="form-title">Contact par téléphone:</h3><img class="logo" src="../../public/images/phone-solid.svg">
                        </div>
                        <div class="form-group">
                            <h6>Secrétariat: +32*********</h6>
                            <h6>Direction: +32*********</h6>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="col-1">
    </div>
    <div class="col-5">
        <div class="ContactPageMail">
               <div class="Shadowed-container-fluid">
                    <form>
                        <div class="form-group">
                            <h3 class="form-title">Contact par mail:</h3><img class="logo" src="../../public/images/envelope-solid.svg">
                        </div>
                        <div class="form-group">
                            <h4>Destinataire:</h4>
                            <select class="form-control">
                            <option  v-for="item in items" :key="item.Mail">{{item.Mail}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <h4> Objet:</h4>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Objet de votre message...">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type="button" class="btn btn-success send" >
                            Envoyer
                        </button>
                    </form>
                </div>
        </div>
    </div>
    <div class="col-1">
    </div>
</div>
</section>
</template>

<script>
    import axios from 'axios';

    export default{
        name: "ContactPage",

        data(){
            return{
                items: [],
            };
        },

        created(){
            this.getContacts();
        },

        methods :{
            //RECUPERER LES CONTACTS
            async getContacts(){
                try{
                    const response = await axios.get("http://localhost:3000/contact");
                    this.items = response.data
                    console.log(this.items);
                }
                catch(err){
                    console.log(err);
                }
            }

        },

    }

</script>




<style>

@font-face {
  font-family: 'magical_holidayregular';
  src: url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff2') format('woff2'),
        url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}


.form-control{
    border-radius: 15px;
}
.ContactPage{
    /*font-family:'magical_holidayregular';*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}
.logo{
    width: 25px;
    height: 25px;
}



.form-group{
    padding: 25px;
}


.send {
    background-color: white;
    color: black;
    border: none;
    margin-left: 87%;
    margin-top: 20px;
}

.send:hover{
    background-color: black;
    color:white;
    font-family:'magical_holidayregular';
}

.Shadowed-container-fluid{
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
    background-color: white;
    padding: 15px;
    border: solid;
    border-color: #6dabe4;
}
</style>