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
    <div>
      <table>
        <thead>
          <tr
            style="mso-yfti-irow:0;mso-yfti-firstrow:yes;page-break-inside:avoid;
   height:16.45pt"
          >
            <td
              width="76"
              style="width:57.3pt;border:solid windowtext 1.0pt;mso-border-alt:
   solid windowtext .5pt;background:#BDD6EE;mso-background-themecolor:accent1;
   mso-background-themetint:102;padding:0cm 5.4pt 0cm 5.4pt;height:16.45pt"
            >
              <p
                class="MsoNormal"
                align="center"
                style="margin-bottom:0cm;margin-bottom:.0001pt;
   text-align:center;line-height:normal"
              >
                <b style="mso-bidi-font-weight:normal">
                  <span lang="ES-CR">
                    FECHA
                    DE EJECUCIÓN
                    <sup>1</sup>
                  </span>
                </b>
              </p>
            </td>
            <td
              width="151"
              valign="top"
              style="width:112.85pt;border:solid windowtext 1.0pt;
   border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
   solid windowtext .5pt;background:#BDD6EE;mso-background-themecolor:accent1;
   mso-background-themetint:102;padding:0cm 5.4pt 0cm 5.4pt;height:16.45pt"
            >
              <p
                class="MsoNormal"
                align="center"
                style="margin-bottom:0cm;margin-bottom:.0001pt;
   text-align:center;line-height:normal"
              >
                <b style="mso-bidi-font-weight:normal">
                  <span lang="ES-CR">ACTIVIDAD</span>
                </b>
              </p>
              <p
                class="MsoNormal"
                align="center"
                style="margin-bottom:0cm;margin-bottom:.0001pt;
   text-align:center;line-height:normal"
              >
                <b style="mso-bidi-font-weight:normal">
                  <span lang="ES-CR">
                    REALIZADA
                    <sup>2</sup>
                  </span>
                </b>
              </p>
            </td>
            <td
              width="76"
              valign="top"
              style="width:2.0cm;border:solid windowtext 1.0pt;
   border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
   solid windowtext .5pt;background:#BDD6EE;mso-background-themecolor:accent1;
   mso-background-themetint:102;padding:0cm 5.4pt 0cm 5.4pt;height:16.45pt"
            >
              <p
                class="MsoNormal"
                align="center"
                style="margin-bottom:0cm;margin-bottom:.0001pt;
   text-align:center;line-height:normal"
              >
                <b style="mso-bidi-font-weight:normal">
                  <span lang="ES-CR">
                    DURACIÓN
                    <sup>3</sup>
                  </span>
                </b>
              </p>
            </td>
            <td
              width="85"
              valign="top"
              style="width:63.8pt;border:solid windowtext 1.0pt;
   border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
   solid windowtext .5pt;background:#BDD6EE;mso-background-themecolor:accent1;
   mso-background-themetint:102;padding:0cm 5.4pt 0cm 5.4pt;height:16.45pt"
            >
              <p
                class="MsoNormal"
                align="center"
                style="margin-bottom:0cm;margin-bottom:.0001pt;
   text-align:center;line-height:normal"
              >
                <b style="mso-bidi-font-weight:normal">
                  <span lang="ES-CR">
                    GRADO
                    DE AVANCE
                    <sup>4</sup>
                  </span>
                </b>
              </p>
            </td>
            <td
              width="132"
              valign="top"
              style="width:99.2pt;border:solid windowtext 1.0pt;
   border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
   solid windowtext .5pt;background:#BDD6EE;mso-background-themecolor:accent1;
   mso-background-themetint:102;padding:0cm 5.4pt 0cm 5.4pt;height:16.45pt"
            >
              <p
                class="MsoNormal"
                align="center"
                style="margin-bottom:0cm;margin-bottom:.0001pt;
   text-align:center;line-height:normal"
              >
                <b style="mso-bidi-font-weight:normal">
                  <span lang="ES-CR">
                    SISTEMA
                    <sup>5</sup>
                  </span>
                </b>
              </p>
            </td>
            <td
              width="170"
              valign="top"
              style="width:127.6pt;border:solid windowtext 1.0pt;
   border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
   solid windowtext .5pt;background:#BDD6EE;mso-background-themecolor:accent1;
   mso-background-themetint:102;padding:0cm 5.4pt 0cm 5.4pt;height:16.45pt"
            >
              <p
                class="MsoNormal"
                align="center"
                style="margin-bottom:0cm;margin-bottom:.0001pt;
   text-align:center;line-height:normal"
              >
                <b style="mso-bidi-font-weight:normal">
                  <span lang="ES-CR">
                    OBSERVACIONES
                    <sup>6</sup>
                  </span>
                </b>
              </p>
            </td>
          </tr>
        </thead>
        <tr :key="index" v-for="(task, index) in reportTasks">
          <td>
            <span>{{ task.date }}</span>
          </td>
          <td>
            <span>{{ task.description }}</span>
          </td>
          <td>
            <span>{{ task.intervalDuration }}</span>
          </td>
          <td>
            <span>{{ task.intervalAccumulatedPercentage }}</span>
          </td>
          <td>
            <span>{{ task.project }}</span>
          </td>
          <td>
            <span></span>
          </td>
        </tr>
      </table>
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

