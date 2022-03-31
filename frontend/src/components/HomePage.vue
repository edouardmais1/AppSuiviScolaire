<template>
    <section class="HomePage">
    <div class="text-center">
            <h1 class="form-title">Actualités</h1>
    </div>
        <div>
            <div class="HomePageContainer">
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-8">
                    <h3 class="form-title">Titre de l'article.</h3>
                    </div>
                    <div class="col-md-4">
                    <div class="imgAbt">
                        <img  class="rounded" alt="100x100" width="150" height="150" src="../../public/images/chat.jpg" data-holder-rendered="true">
                    </div>
                    </div>
                    <div class="col-md-8"><p>Lots of text here...With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a .clearfix and o</p></div>
            </div>
        </div>
    </section>
</template>

<style>
.souligner{
    text-decoration: underline;
}
.imgAbt{
    border-radius: 50px;
}
.HomePage{
    /*
    background-image: url("../../public/images/background-school-2.jpg");*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}
.HomePageContainer{
    width: 50%;
    height: 0 auto;
    margin: 0 auto;
    box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    border-radius: 50px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    -o-border-radius: 20px;
    -ms-border-radius: 20px; 
    padding: 10px;
    background-color: white;
    margin-top: 50px;
        border: solid;
    border-color: #6dabe4;
}

</style>