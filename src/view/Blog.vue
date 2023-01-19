<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-row>
          <Tag :title="passageName"
               :date="date"
               :tags="tags"
          ></Tag>
        </el-row>
        <el-row>
          <Menu></Menu>
        </el-row>
      </el-col>
      <el-col :span="18">
        <Reader>

        </Reader>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Tag from "../components/blog/Tag.vue";
import Menu from "../components/blog/Menu.vue";
import Reader from "../components/blog/Reader.vue";
import {reactive, ref} from "vue";

const note = reactive([
  {
    groupName: 'aaa',
    passages: [
      {passageName: 'Vue-3 Study', date: '2022-12-01', tags: ['Vue','Vite']},
      {passageName: '222', date: '2022-12-01', tags: ['Vue']},
      {passageName: '333', date: '2022-12-01', tags: []},
    ]
  },
  {
    groupName: 'bbb',
    passages: [
      {passageName: '111', date: '2022-12-01', tags: ['Vue']},
      {passageName: '222', date: '2022-12-01', tags: ['Vue', 'Vite']},
    ]
  },
  {
    groupName: 'ccc',
    passages: [
      {passageName: '111', date: '2022-12-01', tags: ['Vue']},
    ]
  }
])

// curr value
const groupName = ref(note[0].groupName);
const passageName = ref(note[0].passages[0].passageName);
const date = ref(note[0].passages[0].date);
const tags = reactive(note[0].passages[0].tags);
</script>

<style lang="less" scoped>

</style>