<template>
  <div class="centerx">
    <vs-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar"
    >
      <vs-navbar-title>Time Tracking</vs-navbar-title>

      <vs-navbar-item index="0">
        <router-link to="/tasks">Tareas</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <!-- <a href="#">Sistemas</a> -->
        <router-link to="/projects">Sistemas</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/report">Informe</router-link>
      </vs-navbar-item>

      <vs-spacer></vs-spacer>

      <!-- <vs-button color-text="rgb(255, 255, 255)" color="rgba(255, 255, 255, 0.3)" type="flat" radius="50%" icon="more_horiz"></vs-button> -->
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    colorx: '#7fa6ad',
    indexActive: 0,
  }),
};
</script>

<style scoped lang="stylus">
.input-color {
  margin-bottom: 10px;
  position: relative;
  display: block;
}

.vs-navbar--title {
  font-size: 1.2rem;
  padding: 13px;
}

.vs-navbar--item {
  padding: 13px 15px;
}

.vs-navbar--item a {
  font-size: 1rem;
}

.myNavbar {
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
}
</style>
