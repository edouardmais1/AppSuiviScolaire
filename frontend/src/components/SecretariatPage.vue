<template>
    <section class="SecretariatPage">
        <div class="text-center">
                <h1 class="form-title">Secrétariat</h1>
        </div>
        <div class="SecretariatContainer">
        <div class="text-center">
            <div class="row">
                <div class="col">
                <div class="nav-links">
                    <button class="btn btn-success btn-lg">
                        <router-link class="nav-link" to="/secretariat/eleves">
                            <i class="fas fa-solid fa-gear"></i>  Liste des élèves
                        </router-link>
                    </button>
                </div>
                </div>
                <div class="col">
                <div class="nav-links">
                    <button class="btn btn-secondary btn-lg">
                        <router-link class="nav-link" to="/secretariat/classes">
                            <i class="fas fa-solid fa-gear"></i>  Liste des classes
                        </router-link>
                    </button>
                </div>
                </div>
                <div class="col">
                <div class="nav-links">
                    <button class="btn btn-primary btn-lg">
                        <router-link class="nav-link" to="/secretariat/actualites">
                            <i class="fas fa-solid fa-gear"></i>  Liste des actualités
                        </router-link>
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>


</script>


<style>

.nav-link {
  font-family:'Poppins';
  color: white;
  padding: 0;
}



.SecretariatPage{
    /*
    background-image: url("../../public/images/background-school-2.jpg");*/
    background-size: contain;
    padding-top: 10%;
    padding-bottom: 10%;
}
.SecretariatContainer{
    padding-left: 20%;
    padding-right: 20%;
}



</style>