<template>
  <div>
    <router-link to="/home/resource/projects" v-if="!showProjects">projects</router-link>
    <router-link to="/home/resource/files" v-else>files</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Projects from "../components/resource/Projects.vue";
import Files from "../components/resource/Files.vue";
import {ref} from "vue";

const showProjects=ref(true);
</script>

<style lang="less" scoped>

</style>