<template>
<div class="BoutonProfesseur">
<div class="nav-links">
    <button type="button" class="btn btn-success">
        <router-link class="nav-link" to="/calendrier/modification">
            Modification <i class="fas fa-solid fa-gears"></i>
        </router-link>
    </button>
</div>

</div>
</template>

<style scoped>
.BoutonProfesseur{
float:right;
}
</style>

<script>

export default{
    //Nom de composant actuel
    name: 'BoutonProfesseur',
    //Props contenant des variables utilisées pour la gestion de données dans le html
    props: ['revele'],
    }
</script>