<template>
<form class='add-student' v-if="revele" >
<h1> Ajout d'une note <i class="fas fa-solid fa-comment"></i></h1>
<div class="row">
    <div class="col">
        <div class="mb-3">
        <h6>Nom de l'élève:</h6>
            <select  v-model="classe" class="custom-select" id="inputGroupSelect01">
            <option v-bind:value="classe" selected>Choisissez l'élève ...</option>
    </select>
    </div>
        </div>
    <div class="col">
        <div class="mb-3">

        </div>
    </div>
</div>


  <div class="mb-3">
     <textarea class="form-control" v-model="contenu" placeholder="Contenu de la note de comportement..." aria-label="With textarea"></textarea>
  </div>

  <button type="submit" class="btn btn-success">Ajouter</button>
</form>
</template>

<script>

export default{
    name: 'AjoutComportement',
    props: ['revele', 'toggleModale'],
}

</script>

<style scoped>
.add-student{
    max-width: 750px;
    height: 250px;
    margin-bottom: 150px;
    margin-top: 50px;
}
</style>
