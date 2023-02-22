<template>
  <div id="reader-container">
    <md-editor v-model="text"
               :theme="'light'"
               preview-theme="vuepress"
               code-theme="atom"
               language="en-US"
               preview-only>
    </md-editor>
  </div>
</template>

<script setup>
import MdEditor from 'md-editor-v3'
import {toRefs} from "vue";

const props = defineProps({
  text: {
    type: String
  }
})

const {text} = toRefs(props);
</script>

<style scoped>

</style>