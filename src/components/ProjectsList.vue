<template lang="html">
  <div>
    <vs-table stripe :data="projects">
      <template slot="header" class="derecha">
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
  </div>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
  },
  beforeCreate() {
    this.$store
      .dispatch('getProjects')
      .then()
      .catch(); // TODO: esperar y actuar según el resultado de la Promise
  },
};
</script>
<style scoped>
.vs-con-table {
  margin-top: 20px;
}
.vs-table--header {
  text-align: right;
  background-color: orange;
  box-sizing: border-box;
  outline: none;
  display: block;
}
.derecha {
  text-align: right;
  background-color: orange;
}
#addButton {
  position: relative;
  float: right;
}
</style>
