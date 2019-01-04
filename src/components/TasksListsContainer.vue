<template>
  <div>
    <vs-input
      type="password"
      class="inputx"
      label="User ID"
      placeholder="User ID"
      v-model="userId"
    />
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
    <!-- Task properties form -->
    <div class="centerx">
      <vs-popup classContent="popup-example" title="Tarea" :active.sync="popupIsActive">
        <vs-input class="inputx" placeholder="Descripción de la tarea" v-model="taskDescription"/>
        <vs-select label="Sistema" v-model="projectId">
          <vs-select-item
            :key="project._id"
            :value="project._id"
            :text="project.name"
            v-for="project in projects"
          ></vs-select-item>
        </vs-select>
        <br>
        <vs-checkbox v-if="!workInProgress" v-model="start">Iniciar la tarea de inmediato</vs-checkbox>
        <vs-checkbox v-model="includeInReport">Incluir en el informe de labores</vs-checkbox>
        <br>
        <br>
        <vs-button @click="saveTask($event)" color="primary" type="filled">Aceptar</vs-button>
        <!-- Information-Warnings-Errors popup -->
        <vs-popup :title="popupTitle" :active.sync="popupInfoIsActive">
          <p v-html="popupText"></p>
        </vs-popup>
      </vs-popup>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TasksList from './TasksList.vue';

export default {
  data() {
    return {
      popupIsActive: false,
      popupInfoIsActive: false,
      popupTitle: '',
      popupText: '',
      taskDescription: '',
      projectId: '',
      start: !this.workInProgress,
      includeInReport: true,
    };
  },
  watch: {
    popupIsActive() {
      this.taskDescription = '';
      this.projectId = '';
      this.start = !this.workInProgress;
      this.includeInReport = true;
    },
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
      'workInProgress',
    ]),
    userId: {
      get: function() {
        return this.$store.getters.userId;
      },
      set: function(value) {
        this.$store.dispatch('updateUserId', value.trim());
      },
    },
    projects() {
      return this.$store.getters.projects;
    },
  },
  methods: {
    addTask() {
      this.popupIsActive = true;
    },
    saveTask(event) {
      event.target.parentElement.disabled = true;
      if (!this.taskDescription) {
        this.popupTitle = 'Atención'; // TODO: refactorizar los atributos del popup con un JSON
        this.popupText = 'Descripción de la tarea es requerida';
        this.popupInfoIsActive = true;
        event.target.parentElement.disabled = false;
      } else if (!this.projectId) {
        this.popupTitle = 'Atención'; // TODO: refactorizar los atributos del popup con un JSON
        this.popupText = 'Sistema es requerido';
        this.popupInfoIsActive = true;
        event.target.parentElement.disabled = false;
      } else {
        this.$store
          .dispatch('addTask', {
            description: this.taskDescription.trim(),
            projectId: this.projectId.trim(),
            userId: this.$store.getters.userId,
            start: this.start,
            includeInReport: this.includeInReport,
          })
          .then(result => {
            event.target.parentElement.disabled = false;
            this.popupIsActive = false;
          })
          .catch(error => {
            this.popupTitle = 'Atención';
            this.popupText = error.response.data.message;
            this.popupInfoIsActive = true;
            event.target.parentElement.disabled = false;
          });
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
#content-header {
  margin-top: 8px;
}

.addButton {
  float: right;
}

#lists-container {
  margin-top: 5px;
}

.popup-example {
  .vs-input {
    float: left;
    width: 95%;
    margin: 10px;
    margin-top: 5px;
  }
}

.popup-example {
  .vs-button {
    float: left;
    margin: 10px;
    margin-top: 50px;
  }
}

.popup-example {
  .con-select {
    width: 80%;
  }
}

.popup-example {
  .con-vs-checkbox {
    float: left;
    margin: 10px;
    margin-top: 5px;
  }
}
</style>
