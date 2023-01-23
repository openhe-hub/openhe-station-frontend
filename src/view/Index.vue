<template>
  <div id="index-container">
    <el-row>
      <el-col :span="12">
        <el-col>
          <QuickStart
              :data="data"
              @updateNavId="onNavIdChange"
              @clickCard="onClickCard">
          </QuickStart>
        </el-col>
        <!--        <el-divider></el-divider>-->
        <el-col>
          <Timeline></Timeline>
        </el-col>
      </el-col>
      <el-col :span="12">
        <DataReport></DataReport>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import QuickStart from "../components/index/QuickStart.vue";
import DataReport from "../components/index/DataReport.vue";
import Timeline from "../components/index/Timeline.vue";
import {reactive} from "vue";
import {useRouter} from "vue-router";

const emit = defineEmits(['updateNavId']);
const onNavIdChange = (newId) => {
  emit('updateNavId', newId);
}

// data for quick start
const data = reactive([
    {
  title: "Start Notes",
  icon: "Edit",
  color: "#f56c6c",
  method: "toBlog"
}, {
  title: "Get Resource",
  icon: "Cpu",
  color: "#e6a23c",
  method: "toResource"

}, {
  title: "View Data",
  icon: "DataLine",
  color: "#5aa4ae",
  method: "toData"
}, {
  title: "My Github",
  icon: "Position",
  color: "#626aef",
  method: "toGithub"
}]);

let router = useRouter();
const onClickCard = idx => {
  console.log(idx);
  switch (idx) {
    case 0: {
      router.push({path: '/home/blog'});
      emit('updateNavId', 2);
      break;
    }
    case 1: {
      router.push({path: '/home/resource'});
      emit('updateNavId', 3);
      break;
    }
    case 2: {
      router.push({path: '/home/data'});
      emit('updateNavId', 4);
      break;
    }
    case 3: {
      window.open('https://github.com/openhe-hub');
      break;
    }
  }
}
</script>

<style scoped>
div#index-container {
  margin: 0px 10px 0px 10px;
  padding: 0px 10px 15px 0px;
  width: 81.5vw;
  height: 77vh;
  /*border-radius: 5px;*/
  /*box-shadow: -3px -1px 10px rgba(0,0,0,0.25);*/
}
</style>