<template>
<section class="SecretariatPage">
<div class="position-center">
<div class="row">
    <div class="col-sm">
        <div class="text-left">
            <h1 class="form-title">Gestion des Eleves <i class="fas fa-solid fa-graduation-cap"></i></h1>

        </div>
    </div>
</div>
</div>
    <div class="containerSecretariatEleves">
        <div class="row">
            <div class="col-sm">
                <div class="underlined">
                Nom :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Prénom :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Mail des parents :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Classe actuelle :
                </div>
            </div>
            <div class="col-sm">
            <div class="underlined">
                Date de naissance :
                </div>
            </div>
            <div class="col-sm">
            </div>
        </div>
        <!-- partie à généré avec backend -->
        <div class="listeEleves">
        <div class="row">
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <input type="email" class="form-control" placeholder="Email " aria-label="Email" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <select class="custom-select" id="inputGroupSelect01">
                    <option value="1E">1E</option>
                    <option value="2A">2A</option>
                    <option value="6B">6B</option>
                </select>
            </div>
            <div class="col-sm">
                <input type="date" class="form-control"  aria-label="Date" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-success"><i class="fas fa-solid fa-check"></i></button>
                <button type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
            </div>
        </div>
        
        </div>
         <!-- Fin de la partie -->
         <!-- partie à généré avec backend -->
        <div class="listeEleves">
        <div class="row">
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <input type="email" class="form-control" placeholder="Email " aria-label="Email" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <select class="custom-select" id="inputGroupSelect01">
                    <option value="1E">1E</option>
                    <option value="2A">2A</option>
                    <option value="6B">6B</option>
                </select>
            </div>
            <div class="col-sm">
                <input type="date" class="form-control"  aria-label="Date" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-success"><i class="fas fa-solid fa-check"></i></button>
                <button type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
            </div>
        </div>
        
        </div>
         <!-- Fin de la partie -->
         <!-- partie à généré avec backend -->
        <div class="listeEleves">
        <div class="row">
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <input type="email" class="form-control" placeholder="Email " aria-label="Email" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <select class="custom-select" id="inputGroupSelect01">
                    <option value="1E">1E</option>
                    <option value="2A">2A</option>
                    <option value="6B">6B</option>
                </select>
            </div>
            <div class="col-sm">
                <input type="date" class="form-control"  aria-label="Date" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-success"><i class="fas fa-solid fa-check"></i></button>
                <button type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
            </div>
        </div>
        
        </div>
         <!-- Fin de la partie -->
         <!-- partie à généré avec backend -->
        <div class="listeEleves">
        <div class="row">
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <input type="email" class="form-control" placeholder="Email " aria-label="Email" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <select class="custom-select" id="inputGroupSelect01">
                    <option value="1E">1E</option>
                    <option value="2A">2A</option>
                    <option value="6B">6B</option>
                </select>
            </div>
            <div class="col-sm">
                <input type="date" class="form-control"  aria-label="Date" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-success"><i class="fas fa-solid fa-check"></i></button>
                <button type="button" class="btn btn-danger"><i class="fas fa-solid fa-trash"></i></button>
            </div>
        </div>
        
        </div>
         <!-- Fin de la partie -->
    </div>
    <div class="add-button">
        <button type="button" class="btn btn-primary btn-lg"><i class="fas fa-solid fa-plus"></i></button>
    </div>
</section>
</template>

<style>

.SecretariatPage{
    /*
    background-image: url("../../public/images/background-school-2.jpg");*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}
.containerSecretariatEleves{
    margin-left: 5%;
    margin-right: 5%;
}

.listeEleves{
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
.custom-select{
    width: 100%;
    height: 100%;
}
</style>