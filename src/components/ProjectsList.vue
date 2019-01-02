<template lang="html">
  <div>
    <vs-table stripe :data="projects">
      <!-- <template slot="header">
        <h3>
          Users
        </h3>
      </template> -->
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
</style>
