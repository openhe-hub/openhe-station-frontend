<template>
  <div id="text-report-container">
    <el-row v-for="(item,index) in report" :key="index">
      <div class="item-container">
        <el-button :type="style[index]" round>
          {{ nums[index] }}
          <el-icon>
            <Top/>
          </el-icon>
        </el-button>
        <span class="name-container">
        {{ item.name.toUpperCase() }}
      </span>
      </div>
    </el-row>
  </div>
</template>

<script setup>
// props
import {onMounted, reactive} from "vue";

const props = defineProps({
  report: {
    type: Array
  }
})
let report = props.report;

// flash
let cnt = 0, timer = 0, nums = reactive([0, 0, 0, 0]), total = 10;
const flash = () => {
  if (cnt < total) {
    for (let i = 0; i < report.length; i++) {
      nums[i] += Math.floor(report[i].num / total);
    }
    console.log(nums);
    cnt++;
    timer = setTimeout(() => {
      flash();
    }, 150);
  } else {
    clearTimeout(timer);
    for (let i = 0; i < report.length; i++) {
      nums[i] = report[i].num;
    }
  }
}

onMounted(() => {
  flash();
})

// button styles
const style = ['primary', 'success', 'warning', 'danger']
</script>

<style lang="less" scoped>
div#text-report-container {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 5px 10px 10px;
  padding: 10px;
  height: 38vh;

  div.item-container {
    margin: 1.5vh;
    span.name-container {
      font-family: Consolas, sans-serif;
      font-style: italic;
      font-weight: 300;
      font-size: 16px;
      margin-left: 5px;
    }
  }
}
</style>