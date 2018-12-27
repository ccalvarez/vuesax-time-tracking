<template>
  <div>
    <!-- <vs-list>
      <vs-list-header title="En ejecución"></vs-list-header>
      <vs-list-item
        v-for="(task, index) in tareas"
        :key="index"
        :title="task.description"
        :subtitle="task.project.name"
      ></vs-list-item>
      <vs-list-header title="Pausadas" color="success"></vs-list-header>
      <vs-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>
      <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
    </vs-list> -->
    <tasks-list state="running"></tasks-list>
    <tasks-list state="paused"></tasks-list>
    <tasks-list state="pending"></tasks-list>
    <tasks-list state="finished"></tasks-list>
  </div>
</template>

<script>
import axios from 'axios';
import TasksList from './components/TasksList.vue';

export default {
  name: 'app',
  components: {
    tasksList: TasksList,
  },
  data() {
    return {
      tareas: null,
    };
  },
  beforeMount() {
    axios
      .get(process.env.VUE_APP_APIURL + '/users/5c1591a080980742861d7ef6/tasks')
      .then(response => {
        if (response.status === 200) {
          this.tareas = response.data;
        } else if (response.status === 204) {
        }
      })
      .catch(error => {});
  },
};
</script>

<style>
</style>
