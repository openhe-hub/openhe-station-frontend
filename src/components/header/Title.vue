<template>
  <div id="title-container">
    <VueIcon></VueIcon>
    <router-link to="/">
      <div id="title">
        Openhe Station
      </div>
    </router-link>
  </div>
</template>

<script setup>
import VueIcon from "../../assets/icon/VueIcon.vue";


</script>

<style scoped>
div#title-container {
  text-align: center;
  font-family: "Arial", "Microsoft YaHei", sans-serif;
  font-size: 20px;
  font-weight: 350;
  height: 100%;
  width: 100%;
  border: 0px solid black;
  border-radius: 5px;
  margin: 10px 0 0 10px;
  padding: 15px 0px 15px 0px;
  box-shadow: 1px 1px 5px #000;
}

div#title {
  padding-bottom: 10px;
  display: inline;
}

a{
  text-decoration: none;
  color: black;
}
</style>