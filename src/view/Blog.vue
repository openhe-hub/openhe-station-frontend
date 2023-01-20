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
          <Menu :active-id="'1-1'"
                @noteChange="onNoteChange">
          </Menu>
        </el-row>
      </el-col>
      <el-col :span="18">
        <Reader :path="path"></Reader>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Tag from "../components/blog/Tag.vue";
import Menu from "../components/blog/Menu.vue";
import Reader from "../components/blog/Reader.vue";
import {reactive, ref} from "vue";

// curr value
const passageName = ref('Vue-3 Basic');
const date = ref('2022-12-01');
let tags = reactive(['Vue']);

// handle note change
const path = ref('/web/note1');
const onNoteChange = (newPath, tag) => {
  path.value = newPath;
  passageName.value = tag.passageName;
  date.value = tag.date;
  tags = tag.tags;
}
</script>

<style lang="less" scoped>

</style>