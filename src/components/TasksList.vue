<template>
  <vs-list>
    <vs-list-header :icon="group.icon" :title="group.title" :color="group.color"></vs-list-header>
    <vs-list-item title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>
    <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>
    <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
  </vs-list>
</template>
<script>
export default {
  props: ['state'],
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
