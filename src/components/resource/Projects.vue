<template>
  <div id="project-container">
    <el-row>
      <el-col :span="8" v-for="(card,index) in currData" :key="index">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
                <span class="card-title">{{card.name}}</span>
                <el-button type="warning" :color="colors[index]" :icon="DArrowRight" circle/>
            </div>
            <div class="card-tag">
              <el-tag v-for="(tag,idx) in card.tags" :key="idx" :type="tagTypes[idx]" class="tag">
                {{tag}}
              </el-tag>
            </div>
          </template>
          <div class="text item">{{card.description}}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
// props: begin index & end index
import {computed, toRefs} from "vue";
import {DArrowRight} from "@element-plus/icons-vue";

const props = defineProps({
  beginIdx: {
    type: Number,
    default: 0,
  },
  endIdx: {
    type: Number,
    default: 5
  },
  data: {
    type: Array,
    default: []
  }
})
const {beginIdx, endIdx} = toRefs(props);
const data = props.data;

// pagination data
const currData = computed(() => {
  return data.slice(beginIdx.value, endIdx.value);
})

// colors
const colors=['#00a381','#824880','#f5b199',
  '#ad7d4c','#cd5e3c','#88cb7f'];
const tagTypes=['','success','warning','error']
</script>

<style scoped lang="less">
div#project-container {
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height: 68vh;
  /deep/ .box-card{
    margin: 10px;
    .card-title {
      margin-right: 10px;
      margin-left: 5px;
      font-size: 18px;
      font-family: "Times New Roman",sans-serif;
    }
    .tag{
      margin: 5px;
    }
  }
}


</style>