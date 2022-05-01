<template>
<div class="listeEleves">
    <div class="row">
        <div class="col-sm text-align-center">
            <p> <i class="fas fa-solid fa-hand-point-right site-color"></i></p>
        </div>

        <div class="col-sm text-align-center">
            <p>{{nom}}</p>
        </div>

        <div class="col-sm text-align-center">
            <p>{{prenom}}</p>
        </div>

        <div class="col-sm text-align-center">
            <p>{{classe}}</p>
        </div>

        <div class="col-sm text-align-center">
            <p>{{date}}</p>
        </div>
    </div>
</div>
</template>

<script>

export default{
    name : "ProfilEnfant",

    props: {
        nom : String,
        prenom: String,
        classe: String,
        date: String,
    }

}

</script>

<style>
.site-color{
    color: #6dabe4;
}

.text-align-center{
    text-align: center;
}
</style>