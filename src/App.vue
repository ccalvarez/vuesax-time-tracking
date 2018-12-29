<template>
  <div>
    <vs-row>
      <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      <vs-col vs-lg="8" vs-sm="10" vs-xs="12"><nav-bar></nav-bar></vs-col>
      <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
    </vs-row>

    <div>
      <vs-row>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
        <vs-col vs-lg="8" vs-sm="10" vs-xs="12">
          <tasks-list state="running" :tasks="runningTasks"></tasks-list>
        </vs-col>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      </vs-row>
      <vs-row>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
        <vs-col vs-lg="8" vs-sm="10" vs-xs="12">
            <tasks-list state="paused" :tasks="pausedTasks"></tasks-list></vs-col>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      </vs-row>
      <vs-row>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
        <vs-col vs-lg="8" vs-sm="10" vs-xs="12">
          <tasks-list state="pending" :tasks="pendingTasks"></tasks-list>
        </vs-col>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      </vs-row>
      <vs-row>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
        <vs-col vs-lg="8" vs-sm="10" vs-xs="12">
          <tasks-list state="finished" :tasks="finishedTasks"></tasks-list>
        </vs-col>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      </vs-row>
    </div>
    <vs-row>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
        <vs-col vs-lg="8" vs-sm="10" vs-xs="12">
          <page-footer class="page-footer"></page-footer>
        </vs-col>
        <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      </vs-row>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import TasksList from './components/TasksList.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    tasksList: TasksList,
    navBar: NavBar,
    pageFooter: Footer,
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

<style scoped>
.page-footer {
  margin-top: 90px;
}
</style>
