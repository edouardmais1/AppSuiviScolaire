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

                            <h3>Contact par téléphone:</h3><img class="logo" src="../../public/images/phone-solid.svg">
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
                            <h3>Contact par mail:</h3><img class="logo" src="../../public/images/envelope-solid.svg">
                        </div>
                        <div class="form-group">
                            <h4>Destinataire:</h4>
                            <select class="form-control" >
                            <option>direction@institut.com</option>
                            <option>secretariat@institut.com</option>
                            <option>j.paul@institut.com</option>
                            <option>l.vanden@institut.com</option>
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




<style>
.ContactPage{
    background-image: url("../../public/images/schoolbackground.jpg");
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
    margin-left: 85%;
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
    background-color: #6dabe4;
    padding: 15px;
}
</style>