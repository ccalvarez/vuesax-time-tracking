<template>
  <vs-list>
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
  </vs-list>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';
import 'vuesax/dist/vuesax.css'; //Vuesax styles

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data() {
    return {
      tareas: null,
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_APIURL)
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
