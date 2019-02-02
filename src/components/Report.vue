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
import { mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters(['reportTasks']),
  },
  methods: {
    generateReport() {
      let end = this.end;
      end.setDate(end.getDate() + 1);

      this.$store.dispatch('getReportTasks', {
        start: new Date(
          this.start.getFullYear(),
          this.start.getMonth(),
          this.start.getDate()
        ),
        end: new Date(end.getFullYear(), end.getMonth(), end.getDate()),
      });
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

