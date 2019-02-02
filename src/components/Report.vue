<template>
  <div>
    <div>
      <datepicker placeholder="Fecha de inicio" v-model="start"></datepicker>
    </div>
    <div>
      <datepicker placeholder="Fecha de fin" v-model="end"></datepicker>
    </div>
    <div>
      <vs-button id="generateButton" color="success" size="large" @click="generateReport()">Generar</vs-button>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
  data() {
    return {
      start: new Date(),
      end: new Date(),
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    generateReport() {
      console.log(this.start);
      console.log(this.end);
    },
  },
};
</script>

<style scoped>
div {
  display: inline-block;
  margin: 15px 20px 10px 20px;
}
</style>

