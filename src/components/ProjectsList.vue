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
        <vs-input ref="projectName" class="inputx" placeholder="Nombre del sistema" v-model="projectName" />
      <br>
      <br>
      <br>
        <vs-button id="saveButton" @click="saveProject($event.target.parentElement)" color="primary" type="filled">Aceptar</vs-button>
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

    const vm = this;
    document.addEventListener('keyup', function(evt) {
      if (evt.key == 'Insert') {
        if (!vm.popupIsActive) {
          vm.popupIsActive = true;
        }
      } else if (evt.key == 'Enter') {
        if (vm.popupIsActive && !vm.popupInfoIsActive) {
          const element = document.getElementById('saveButton');
          vm.saveProject(element);
        } else if (vm.popupInfoIsActive) {
          vm.popupInfoIsActive = false;
        }
      } else if (evt.key == 'Escape') {
        if (vm.popupInfoIsActive) {
          vm.popupInfoIsActive = false;
        } else if (vm.popupIsActive) {
          vm.popupIsActive = false;
        }
      }
    });
  },
  watch: {
    popupIsActive() {
      this.projectName = '';
      if (this.popupIsActive) {
        this.$nextTick(() => this.setFocusOnInput('projectName'));
      }
    },
  },
  methods: {
    setFocusOnInput(inputName) {
      // TODO:
      /**
       * @see https://vuejs.org/v2/api/#vm-el
       * @see https://vuejs.org/v2/api/#vm-refs
       */
      // you could just call this.$refs[inputName].focusInput() but i'm not shure if it belongs to the public API
      let inputEl = this.$refs[inputName].$el.querySelector('input');
      inputEl.focus(); //  <== This time the focus will work properly
    },
    addProject() {
      this.popupIsActive = true;
    },
    saveProject(button) {
      button.disabled = true;
      if (!this.projectName) {
        this.popupTitle = 'Atención'; // TODO: refactorizar los atributos del popup con un JSON
        this.popupText = 'Nombre del sistema es requerido';
        this.popupInfoIsActive = true;
        button.disabled = false;
      } else {
        this.$store
          .dispatch('addProject', {
            name: this.projectName.trim(),
            userId: this.$store.getters.userId,
          })
          .then(result => {
            button.disabled = false;
            this.popupIsActive = false;
          })
          .catch(error => {
            this.popupTitle = 'Atención';
            this.popupText = error.response.data.message;
            this.popupInfoIsActive = true;
            button.disabled = false;
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
