<template>
<div class="BoutonProfesseur">
    <button type="button" class="btn btn-success">Modification <i class="fas fa-solid fa-gears"></i></button>
</div>
</template>

<style scoped>
.BoutonProfesseur{
float:right;
}
</style>

<script>

export default{
        name: 'BoutonProfesseur',
        props: ['revele'],
    }
</script>