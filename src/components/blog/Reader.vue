<template>
  <div id="reader-container">
    <md-editor v-model="state.text"
               :theme="'light'"
               preview-theme="vuepress"
               :code-theme="state.theme"
               style="height: 100%"
    preview-only>
    </md-editor>
  </div>
</template>

<script setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css';
import {reactive, ref} from "vue";
import markdownText from '../../test/assets/markdown/test.md?raw'

const state = reactive({
  text: markdownText,
  theme: 'github'
});
</script>

<style lang="less" scoped>
div#reader-container{
  margin-left: 10px;
  margin-right: 10px;
  height: 77.5vh;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
</style>