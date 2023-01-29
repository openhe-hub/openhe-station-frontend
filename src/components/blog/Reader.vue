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
import {onMounted, reactive, ref, toRefs, watch} from "vue";
import api from "../../plugin/axios/config.js";

// load data
onMounted(() => {
  api({
    url: '/api/note/passage',
    method: 'post',
    data: {
      groupIdx: 0,
      passageIdx: 0
    }
  }).then(resp => {
    console.log(resp);
    state.text = resp.data;
  }).catch(err => {
    console.log(err);
  })
})


// props
const props = defineProps({
  path: {
    type: String
  }
});
const {path} = toRefs(props);

// md-editor-v3 properties
const state = reactive({
  text: '',
  theme: 'github'
});

// import markdownText from note path
let notePath = `../../assets/note${path.value}.md?raw`;
import(notePath)
    .then(module => {
      state.text = module.default;
    })
    .catch(err => {
      console.log(err);
    })

// update note on path change
watch(path, (newPath) => {
  notePath = `../../assets/note${newPath}.md?raw`;
  import(notePath)
      .then(module => {
        state.text = module.default;
      })
      .catch(err => {
        console.log(err);
      })
})
</script>

<style lang="less" scoped>
div#reader-container {
  margin-left: 10px;
  margin-right: 10px;
  height: 77.5vh;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
</style>