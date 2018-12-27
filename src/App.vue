<template>
  <div>
    <tasks-list state="running" :tasks="runningTasks"></tasks-list>
    <tasks-list state="paused" :tasks="pausedTasks"></tasks-list>
    <tasks-list state="pending" :tasks="pendingTasks"></tasks-list>
    <tasks-list state="finished" :tasks="finishedTasks"></tasks-list>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import TasksList from './components/TasksList.vue';

export default {
  name: 'app',
  components: {
    tasksList: TasksList,
  },
  computed: {
    ...mapGetters([
      'runningTasks',
      'pausedTasks',
      'finishedTasks',
      'pendingTasks',
    ]),
  },
  mounted() {
    console.log(this.runningTasks);
  },
};
</script>

<style>
</style>
