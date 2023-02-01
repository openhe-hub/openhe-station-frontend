<template>
  <div id="tag-container">
    <div id="title-container">{{ info.name }}</div>
    <hr>
    <el-row>
      <el-col :span="tagSpan(tag)" :offset="1" v-for="(tag,index) in info.tags">
        <el-tag class="ml-2" :type="tagStyle[index]">
          {{ tag }}
        </el-tag>
      </el-col>
      <el-col :span="8" :offset="1">
        <el-tag type="danger" id="date-container">{{ info.date }}</el-tag>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {onMounted, reactive, toRefs, watch, watchEffect} from "vue";
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
let info = reactive({
  name: '',
  date: '',
  tags: []
});

const update = () => {
  api({
    url: '/api/note/info',
    method: 'post',
    data: {
      groupIdx: groupIdx.value,
      passageIdx: passageIdx.value
    }
  }).then(resp => {
    info.name = resp.data.name;
    info.date = resp.data.date.slice(0, 10);
    info.tags = resp.data.tags.split(',');
  }).catch(err => {
    console.log(err);
  })
}
onMounted(() => {
  update();
})

// tag style
const tagStyle = ['', 'success', 'warning', 'danger']
// tag length
const tagSpan = str => {
  if (str.length <= 4) return 5;
  else if (str.length > 5) return 8;
  else return 6;
}

// watch
watchEffect(() => {
  update();
})
</script>

<style scoped lang="less">
div#tag-container {
  margin-left: 10px;
  width: 100%;
  height: 12vh;
  padding: 10px;
  box-shadow: -3px -3px 8px rgba(0, 0, 0, 0.25);

  #title-container {
    font-family: "Times New Roman", sans-serif;
    font-size: 22px;
    font-weight: 300;
    text-align: center;
  }
}
</style>