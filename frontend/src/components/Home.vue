<template>
  <div class="home" @click="$router.push('/menu')">
    <h1>TEST</h1>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/graphics/intro-graphic-left.svg") center left
      no-repeat,
    url("../assets/graphics/intro-graphic-right.svg") center right no-repeat;
  background-color: #38846D;
  background-size: contain;
}
</style>