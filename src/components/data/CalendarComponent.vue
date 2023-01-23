<template>
  <div id="calendar-container">
    <Calendar
        backgroundText
        class-name="select-mode"
        language="en"
        :selectDate="today"
        style="height: 100%;width: 95%"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
import Calendar from 'mpvue-calendar';


let date = new Date();
const today = ref(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
console.log(today.value);
</script>

<style scoped lang="less">
div#calendar-container {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 5px 10px 10px 0;
  padding: 10px;
  height: 38vh;
}
</style>