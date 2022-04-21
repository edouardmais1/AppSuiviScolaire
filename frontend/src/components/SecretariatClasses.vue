<template>
<section class="SecretariatPage">
<div class="position-center">
<div class="row">
    <div class="col-sm">
        <div class="text-left">
            <h1 class="form-title">Gestion des Classes <i class="fas fa-solid fa-school"></i> </h1>

        </div>
    </div>
</div>
</div>
    <div class="containerSecretariatClasse">
        <div class="row">
            <div class="col-sm">
                <div class="underlined">
                Classe :
                </div>
            </div>
            <div class="col-sm">
                <div class="underlined">
                Professeur associé / Adresse mail :
                </div>
            </div>
        </div>
          <!-- partie à généré avec backend -->
        <div class="listeClasse">
        <div class="row">
            <div class="col-sm">
                Classe de 1E
            </div>
            <div class="col-sm">
                <select class="custom-select" id="inputGroupSelect01">
                    <option value="test@mail.be">prof1@mail.be</option>
                    <option value="test2@mail.be">prof2@mail.be</option>
                    <option value="test3@mail.be">prof3@mail.be</option>
                </select>
            </div>
        </div>
        </div>
         <!-- Fin de la partie -->
          <!-- partie à généré avec backend -->
        <div class="listeClasse">
        <div class="row">
            <div class="col-sm">
                Classe de 2C
            </div>
            <div class="col-sm">
                <select class="custom-select" id="inputGroupSelect01">
                    <option value="test@mail.be">prof1@mail.be</option>
                    <option value="test2@mail.be">prof2@mail.be</option>
                    <option value="test3@mail.be">prof3@mail.be</option>
                </select>
            </div>
        </div>
        </div>
         <!-- Fin de la partie -->
          <!-- partie à généré avec backend -->
        <div class="listeClasse">
        <div class="row">
            <div class="col-sm">
                Classe de 6A
            </div>
            <div class="col-sm">
                <select class="custom-select" id="inputGroupSelect01">
                    <option value="test@mail.be">prof1@mail.be</option>
                    <option value="test2@mail.be">prof2@mail.be</option>
                    <option value="test3@mail.be">prof3@mail.be</option>
                </select>
            </div>
        </div>
        </div>
         <!-- Fin de la partie -->
    </div>
</section>
</template>

<style>
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
.SecretariatPage{
    /*
    background-image: url("../../public/images/background-school-2.jpg");*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}
.containerSecretariatClasse{
    margin-left: 5%;
    margin-right: 5%;
}

.listeClasse{
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

</style>