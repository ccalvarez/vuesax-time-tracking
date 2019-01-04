<template lang="html">
  <div>
    <vs-table stripe :data="projects">
      <template slot="header">
        <vs-button id="addButton" color="success" size="large" @click="addProject()">Nuevo Sistema</vs-button>
      </template>
      <template slot="thead">
  <vs-th>Nombre del Sistema</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :key="data[indextr]._id" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>
  </vs-tr>
</template>
    </vs-table>

    <!-- Project properties form -->
    <div class="centerx">
      <vs-popup classContent="popup-example" title="Sistema" :active.sync="popupIsActive">
        <vs-input class="inputx" placeholder="Nombre del sistema" v-model="projectName" />
      <br>
      <br>
      <br>
        <vs-button @click="saveProject($event)" color="primary" type="filled">Aceptar</vs-button>
        <!-- Information-Warnings-Errors popup -->
        <vs-popup :title="popupTitle" :active.sync="popupInfoIsActive">
          <p v-html="popupText"></p>
        </vs-popup>
      </vs-popup>
    </div>

  </div>

</template>
<script>
export default {
  data() {
    return {
      popupIsActive: false,
      popupInfoIsActive: false,
      popupTitle: '',
      popupText: '',
      projectName: '',
    };
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
  },
  mounted() {
    document.getElementsByClassName('header-table')[0].style.display = 'block';
  },
  watch: {
    popupIsActive() {
      this.projectName = '';
    },
  },
  methods: {
    addProject() {
      this.popupIsActive = true;
    },
    saveProject(event) {
      event.target.parentElement.disabled = true;

      if (!this.projectName) {
        this.popupTitle = 'Atención'; // TODO: refactorizar los atributos del popup con un JSON
        this.popupText = 'Nombre del sistema es requerido';
        this.popupInfoIsActive = true;
        event.target.parentElement.disabled = false;
      } else {
        this.$store
          .dispatch('addProject', {
            name: this.projectName.trim(),
            userId: '5c1591a080980742861d7ef6',
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
.vs-con-table {
  margin-top: 8px;
}

#addButton {
  position: relative;
  float: right;
}

.popup-example {
  .vs-input {
    float: left;
    width: 95%;
    margin: 10px;
    margin-top: 5px;
  }

  .vs-button {
    float: left;
    margin: 10px;
    margin-top: 5px;
  }
}
</style>
