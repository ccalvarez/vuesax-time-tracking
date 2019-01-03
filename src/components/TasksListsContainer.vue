<template>
  <div>
    <vs-row id="content-header">
      <vs-col>
        <vs-button class="addButton" color="success" size="large" @click="addTask()">Nueva Tarea</vs-button>
      </vs-col>
    </vs-row>
    <div id="lists-container">
      <tasks-list state="running" :tasks="runningTasks"></tasks-list>
      <tasks-list state="paused" :tasks="pausedTasks"></tasks-list>
      <tasks-list state="pending" :tasks="pendingTasks"></tasks-list>
      <tasks-list state="finished" :tasks="finishedTasks"></tasks-list>
    </div>
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
#content-header {
  margin-top: 8px;
}
.addButton {
  float: right;
  /* width: 100%;
  text-align: right;
  margin: 0 auto; */
}
#lists-container {
  margin-top: 5px;
}
</style>
