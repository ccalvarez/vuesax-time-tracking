<template>
  <div>
    <div>
      <datepicker placeholder="Fecha de inicio" v-model="start"></datepicker>
    </div>
    <div>
      <datepicker placeholder="Fecha de fin" v-model="end"></datepicker>
    </div>
    <div>
      <vs-button
        id="generateButton"
        color="success"
        size="large"
        @click="generateReport()"
        >Generar</vs-button
      >
    </div>
    <br />
    <br />
    <br />
    <span>
      <div>
        <table
          class="MsoTableGrid"
          border="1"
          cellspacing="0"
          cellpadding="0"
          width="0"
          style="width:517.45pt;margin-left:-21.55pt;border-collapse:collapse;
 border:none;mso-border-alt:solid windowtext .5pt;mso-yfti-tbllook:1184;
 mso-padding-alt:0cm 5.4pt 0cm 5.4pt"
        >
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
                    <span
                      lang="ES-CR"
                      style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >
                      FECHA DE EJECUCIÓN
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
                    <span
                      lang="ES-CR"
                      style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                      >ACTIVIDAD</span
                    >
                  </b>
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="margin-bottom:0cm;margin-bottom:.0001pt;
   text-align:center;line-height:normal"
                >
                  <b style="mso-bidi-font-weight:normal">
                    <span
                      lang="ES-CR"
                      style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >
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
                    <span
                      lang="ES-CR"
                      style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >
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
                    <span
                      lang="ES-CR"
                      style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >
                      GRADO DE AVANCE
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
                    <span
                      lang="ES-CR"
                      style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >
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
                    <span
                      lang="ES-CR"
                      style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >
                      OBSERVACIONES
                      <sup>6</sup>
                    </span>
                  </b>
                </p>
              </td>
            </tr>
          </thead>
          <template v-for="(tasks, date) in groupedTasks">
            <tr
              v-for="(task, taskIndex) in tasks"
              :key="`${date}-${task.id || taskIndex}`"
            >
              <td
                v-if="taskIndex === 0"
                :rowspan="tasks.length"
                width="76"
                style="width:57.3pt; border:solid windowtext 1.0pt;
                border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
                padding:0cm 5.4pt 0cm 5.4pt;height:11.65pt"
              >
                <p
                  class="MsoNormal"
                  style="margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal"
                >
                  <span
                    lang="ES-CR"
                    style="font-size:9.0pt;mso-bidi-font-size:11.0pt"
                    >{{ date }}</span
                  >
                </p>
              </td>
              <td
                width="151"
                valign="top"
                style="width:112.85pt;border-top:none;border-left:none;
                border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.65pt"
              >
                <p
                  class="MsoNormal"
                  style="margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal"
                >
                  <span
                    lang="ES-CR"
                    style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >{{ task.description }}</span
                  >
                </p>
              </td>
              <td
                width="76"
                style="width:2.0cm;border:solid windowtext 1.0pt;border-top:none;
                border-left:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
                padding:0cm 5.4pt 0cm 5.4pt;height:11.65pt"
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal"
                >
                  <span
                    lang="ES-CR"
                    style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >{{ task.intervalDuration }}</span
                  >
                </p>
              </td>
              <td
                width="85"
                style="width:57.3pt;border:solid windowtext 1.0pt;border-top:none;
                border-left:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
                padding:0cm 5.4pt 0cm 5.4pt;height:11.65pt"
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal"
                >
                  <span
                    lang="ES-CR"
                    style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >{{ task.intervalAccumulatedPercentage }}</span
                  >
                </p>
              </td>
              <td
                width="132"
                style="width:99.2pt;border-top:none;border-left:none;
                border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.65pt"
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal"
                >
                  <span
                    lang="ES-CR"
                    style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                    >{{ task.project }}</span
                  >
                </p>
              </td>
              <td
                width="170"
                style="width:127.6pt;border-top:none;border-left:none;
                border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.65pt"
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal"
                >
                  <span
                    lang="ES-CR"
                    style="font-size:9.0pt;mso-bidi-font-family:Calibri"
                  ></span>
                </p>
              </td>
            </tr>
          </template>
        </table>
      </div>
    </span>
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
    groupedTasks() {
      if (!this.reportTasks) return {};

      return this.reportTasks.reduce((groups, task) => {
        const date = task.date;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(task);
        return groups;
      }, {});
    },
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
body {
  font-family: Calibri;
}
div {
  display: inline-block;
  margin: 15px 20px 10px 20px;
}
</style>
