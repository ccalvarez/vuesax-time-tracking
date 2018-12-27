<template>
  <vs-list>
    <vs-list-header :icon="group.icon" :title="group.title" :color="group.color"></vs-list-header>
    <vs-list-item v-for="(task) in tasks" :key="task._id" :title="task.description" :subtitle="task.project.name"></vs-list-item>
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
};
</script>
<style scoped>
.vs-list--item {
  padding: 4px;
  padding-left: 32px;
}
</style>
