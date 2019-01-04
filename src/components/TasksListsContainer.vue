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
      start: false,
      includeInReport: true,
    };
  },
  watch: {
    popupIsActive() {
      this.taskDescription = '';
      this.projectId = '';
      this.start = false;
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
    projects() {
      return this.$store.getters.projects;
    },
  },
  methods: {
    addTask() {
      this.popupIsActive = true;
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
    width: 75%;
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
