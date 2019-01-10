<template>
  <div>
    <vs-row>
      <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      <vs-col vs-lg="8" vs-sm="10" vs-xs="12">
        <nav-bar></nav-bar>
      </vs-col>
      <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
    </vs-row>

    <vs-row>
      <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      <vs-col vs-lg="8" vs-sm="10" vs-xs="12">
        <router-view name="content"></router-view>
      </vs-col>
      <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
    </vs-row>

    <vs-row>
      <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      <vs-col vs-lg="8" vs-sm="10" vs-xs="12">
        <page-footer class="page-footer"></page-footer>
      </vs-col>
      <vs-col vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
    </vs-row>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    navBar: NavBar,
    pageFooter: Footer,
  },
};
</script>

<style scoped>
.page-footer {
  margin-top: 60px;
}
</style>
