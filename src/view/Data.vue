<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col :span="11">
            <TextReport :report="report">
            </TextReport>
          </el-col>
          <el-col :span="13">
            <CalendarComponent></CalendarComponent>
          </el-col>
        </el-row>
        <el-col>
          <QuickStart
              @clickCard="onClickCard"
              :data="data"
          style="height: 31.5vh">
          </QuickStart>
        </el-col>
      </el-col>
      <el-col :span="12">
        <DataReport></DataReport>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import DataReport from "../components/index/DataReport.vue";
import TextReport from "../components/data/TextReport.vue";
import QuickStart from "../components/index/QuickStart.vue";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import CalendarComponent from "../components/data/CalendarComponent.vue";

// data for quick start
const data = reactive([
  {
    title: "New Note",
    icon: "Edit",
    color: "#f56c6c",
    method: "toBlog"
  }, {
    title: "New File",
    icon: "DocumentAdd",
    color: "#e6a23c",
    method: "toResource"

  }, {
    title: "New Project",
    icon: "FolderAdd",
    color: "#5aa4ae",
    method: "toData"
  }, {
    title: "New Data",
    icon: "CirclePlusFilled",
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

// data for text report
const report = reactive([
  {
    name: "visitors",
    num: 107
  }, {
    name: "projects",
    num: 57
  }, {
    name: "files",
    num: 43
  }, {
    name: "blogs",
    num: 7
  }]);

</script>

<style lang="less" scoped>

</style>