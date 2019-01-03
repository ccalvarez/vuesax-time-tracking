<template>
  <div>
    <tasks-list state="running" :tasks="runningTasks"></tasks-list>
    <tasks-list state="paused" :tasks="pausedTasks"></tasks-list>
    <tasks-list state="pending" :tasks="pendingTasks"></tasks-list>
    <tasks-list state="finished" :tasks="finishedTasks"></tasks-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TasksList from './TasksList.vue';

export default {
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
};
</script>
<style>
</style>
