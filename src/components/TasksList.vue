<template>
  <vs-list>
    <vs-list-header :icon="group.icon" :title="group.title" :color="group.color"></vs-list-header>
    <vs-list-item v-for="(task) in tasks" :key="task._id" :title="task.description" :subtitle="task.project.name">
      <vs-button v-if="state=='running'" color="warning" size="large" @click="pauseTask(task._id)">Pausar</vs-button>
    </vs-list-item>
  </vs-list>
</template>
<script>
export default {
  props: ['state', 'tasks'],
  computed: {
    group() {
      return {
        title:
          this.state == 'running'
            ? 'En ejecución'
            : this.state == 'paused'
              ? 'Pausadas'
              : this.state == 'finished' ? 'Finalizadas' : 'Pendientes',
        color:
          this.state == 'running'
            ? 'success'
            : this.state == 'paused'
              ? 'warning'
              : this.state == 'finished' ? 'primary' : 'danger',
        icon:
          this.state == 'running'
            ? 'timer'
            : this.state == 'paused'
              ? 'timer_off'
              : this.state == 'finished' ? 'done' : 'list',
      };
    },
  },
  methods: {
    pauseTask: function(taskId) {
      this.$store
        .dispatch('pauseTask', taskId)
        .then()
        .catch(); // TODO: esperar y actuar según el resultado de la Promise
    },
  },
};
</script>
<style scoped>
.vs-list--item {
  padding: 4px;
  padding-left: 25px;
}
</style>
