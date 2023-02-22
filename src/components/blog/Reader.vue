<template>
  <div id="reader-container">
    <md-editor v-model="state.text"
               :theme="'light'"
               preview-theme="smart-blue"
               :code-theme="state.theme"
               style="height: 100%"
               preview-only>
    </md-editor>
  </div>
</template>

<script setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css';
import {onMounted, reactive, ref, toRefs, watch, watchEffect} from "vue";
import api from "../../plugin/axios/config.js";

// props
const props = defineProps({
  groupIdx: {
    type: Number
  },
  passageIdx: {
    type: Number
  }
});
const {groupIdx, passageIdx} = toRefs(props);

// load data
const update = () => {
  api({
    url: '/api/note/passage',
    method: 'post',
    data: {
      'groupIdx': groupIdx.value,
      'passageIdx': passageIdx.value
    }
  }).then(resp => {
    state.text = resp.data;
  }).catch(err => {
    console.log(err);
  })
}
onMounted(() => {
  update();
})

// md-editor-v3 properties
const state = reactive({
  text: '',
  theme: 'atom'
});

// watch change
watchEffect(() => {
  update();
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