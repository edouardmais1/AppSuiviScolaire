<template>
<form class='add-comportement center' v-if="revele" >
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
    //Nom de composant actuel
    name: 'AjoutComportement',
    //Props contenant des variables utilisées pour la gestion de données dans le html
    props: ['revele', 'toggleModale'],

    computed: {
          //Fonction permettant de vérifier si les champs 'titre', 'date' et 'contenu' sont remplis ou non
          checkValidatedFields: function(){
            if(this.titre != "" && this.date != "" && this.contenu != ""){
              return false;
            }
            else{
              return true;
            }
          }
    },
}

</script>

<style scoped>
.add-comportement{
    max-width: 750px;
    height: 250px;
    margin-bottom: 300px;
    margin-top: 50px;
}
</style>
