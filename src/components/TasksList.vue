<template>
  <div>
    <vs-list>
      <vs-list-header :icon="group.icon" :title="group.title" :color="group.color"></vs-list-header>
      <vs-list-item v-for="(task) in tasks" :key="task._id" :title="task.description" :subtitle="task.project.name">
        <vs-button v-if="state == 'running'" color="warning" size="large" @click="pauseTask(task._id, $event)">Pausar</vs-button>&nbsp;&nbsp;
        <vs-button :disabled="workInProgress" v-if="state == 'paused'" color="success" size="large" @click="resumeOrStartTask(task._id, $event)">Reanudar</vs-button>&nbsp;&nbsp;
        <vs-button v-if="state == 'paused' || state == 'running'" color="primary" size="large" @click="finishTask(task._id, $event)">Finalizar</vs-button>
        <vs-button :disabled="workInProgress" v-if="state == 'pending'" color="success" size="large" @click="resumeOrStartTask(task._id, $event)">Iniciar</vs-button>
      </vs-list-item>
    </vs-list>
    <vs-popup :title="popupTitle" :active.sync="popupIsActive">
      <p v-html="popupText"></p>
    </vs-popup>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: ['state', 'tasks'],
  data() {
    return {
      popupTitle: '',
      popupText: '',
      popupIsActive: false,
    };
  },
  computed: {
    ...mapGetters(['workInProgress']),
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
    pauseTask: function(taskId, event) {
      event.target.parentElement.disabled = true;
      this.$store
        .dispatch('pauseTask', taskId)
        .then(result => {
          event.target.parentElement.disabled = false;
        })
        .catch(error => {
          this.popupTitle = 'Atención'; // TODO: refactorizar los atributos del popup con un JSON
          this.popupText = error.response.data.message;
          this.popupIsActive = true;
          event.target.parentElement.disabled = false;
        });
    },
    resumeOrStartTask: function(taskId, event) {
      event.target.parentElement.disabled = true;
      this.$store
        .dispatch('resumeOrStartTask', taskId)
        .then(result => {
          event.target.parentElement.disabled = false;
        })
        .catch(error => {
          this.popupTitle = 'Atención';
          this.popupText = error.response.data.message;
          this.popupIsActive = true;
          event.target.parentElement.disabled = false;
        });
    },
    finishTask: function(taskId, event) {
      event.target.parentElement.disabled = true;
      this.$store
        .dispatch('finishTask', taskId)
        .then(result => {
          event.target.parentElement.disabled = false;
        })
        .catch(error => {
          this.popupTitle = 'Atención';
          this.popupText = error.response.data.message;
          this.popupIsActive = true;
          event.target.parentElement.disabled = false;
        });
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
