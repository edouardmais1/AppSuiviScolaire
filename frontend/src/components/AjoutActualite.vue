<template>
    <form class='add-actualite' v-if="revele">
    <h3> Ajout d'une actualité <i class="fas fa-solid fa-calendar-plus"></i></h3>
    <div class="row">
    <div class="col">
      <div class="mb-3">
       <h5>Titre:</h5>
        <input type="text" class="form-control" id="exampleInputEmail1">
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <h5>Date:</h5>
        <input type="date" class="form-control" id="exampleInputPassword1">
      </div>
      </div>
    </div>

    <div class="col">
        <div class="mb-3">
        <h5>Contenu:</h5>
        <textarea class="form-control" placeholder="Contenu de l'actualité..." aria-label="With textarea"></textarea>
      </div>
      </div>
    
      <button type="submit" class="btn btn-success">Ajouter</button>
    </form>
    </template>
    
    <script>
    export default{
        name: 'AjoutActualite',
        props: ['revele', 'toggleModale'],
    }
    </script>
    
    <style scoped>
    .add-actualite{
    width: 750px;
    height: 250px;
    margin-top: 50px;
    margin-bottom: 100px;
    margin-left: 5%;
    margin-right: 5%;
    }
    </style>
    