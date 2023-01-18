<template>
  <div id="timeline-container">
    <div class="center">
      <el-row>
        <el-col :span="10" v-for="(timeline,idx) in timelines" :key="idx">
          <el-timeline>
            <el-timeline-item
                v-for="(activity, index) in timeline"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :hollow="activity.hollow"
                :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import {SuccessFilled, Sunny} from '@element-plus/icons-vue'

const timeline1 = [
  {
    content: 'Project Finished',
    timestamp: '2023-06-01',
    size: 'large',
    type: 'primary',
    icon: SuccessFilled,
  },
  {
    content: 'Project Init',
    timestamp: '2023-01-16',
    color: '#0bbd87',
  },
  {
    content: 'Project Setup',
    timestamp: '2022-12-15',
  },
]

const timeline2 = [
  {
    content: 'Summer Term',
    timestamp: '2023-05-10',
    size: 'large',
    type: 'danger',
    icon: Sunny,
  },
  {
    content: 'Spring Term',
    timestamp: '2023-02-13',
    color: '#b1d5c8',
  },
  {
    content: 'Winter Holiday',
    timestamp: '2022-12-17',
  },
]

const timelines = [timeline1, timeline2];
</script>

<style scoped>
div#timeline-container {
  padding: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 35vh;
  margin: 5px 10px;
}

div.center {
  margin-top: 6vh;
}

</style>