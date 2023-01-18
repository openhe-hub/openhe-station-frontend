<template>
  <div id="timeline-container">
    <el-row>
      <el-col :span="8" v-for="i in [0,1]">
        <el-timeline>
          <el-timeline-item
              v-for="(activity, index) in activities"
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
</template>

<script setup>
import { MoreFilled } from '@element-plus/icons-vue'

const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
</script>

<style scoped>
</style>