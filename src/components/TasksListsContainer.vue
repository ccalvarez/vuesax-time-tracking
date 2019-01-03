<template>
  <div>
    <vs-row id="content-header">
      <vs-col>
        <vs-button class="addButton" color="success" size="large" @click="addTask()">Nuevo Sistema</vs-button>
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
  mounted() {
    // document.getElementById('content-header').style.display = 'inline-flex';
  },
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
  margin-top: 20px;
}
.addButton {
  float: right;
  /* width: 100%;
  text-align: right;
  margin: 0 auto; */
}
#lists-container {
  margin-top: 10px;
  /* padding: 5px; */
}
</style>
