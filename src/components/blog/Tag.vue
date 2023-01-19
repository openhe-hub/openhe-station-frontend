<template>
  <div id="tag-container">
    <div id="title-container">{{ title }}</div>
    <hr>
    <el-row>
      <el-col :span="tagSpan(tag)" :offset="1" v-for="(tag,index) in tags">
        <el-tag class="ml-2" :type="tagStyle[index]">
          {{ tag }}
        </el-tag>
      </el-col>
      <el-col span="8" :offset="1">
        <el-tag type="danger" id="date-container">{{ date }}</el-tag>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {toRefs} from "vue";

// props
const props = defineProps({
  title: {
    type: String
  },
  date: {
    type: String
  },
  tags: {
    type: Array,
    default: []
  }
});
const {title, date, tags} = toRefs(props);

// tag style
const tagStyle = ['', 'success', 'warning', 'danger']
// tag length
const tagSpan = str => {
  if (str.length<=3) return 5;
  else if (str.length>5) return 7;
  else return 6;
}
</script>

<style scoped lang="less">
div#tag-container {
  margin-left: 10px;
  width: 100%;
  padding: 10px;
  box-shadow: -3px -3px 8px rgba(0,0,0,0.25);

  #title-container {
    font-family: "Times New Roman", sans-serif;
    font-size: 22px;
    font-weight: 300;
  }
}
</style>