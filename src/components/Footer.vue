<template>
  <div>
    <!-- <vs-navbar
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      class="myNavbar"> -->
      <div class="center">
        <p>Made with &nbsp; <a href="https://vuejs.org/" target="_blank"><img src="../assets/logo.png" alt="Vue.js" width="12" height="12"></a> &nbsp; & <a href="https://expressjs.com/" target="_blank">Express</a></p>
        <p>Source code on &nbsp; <a href="https://github.com/ccalvarez/vuesax-time-tracking" target="_blank"><img src="../assets/GitHub-Mark-32px.png" alt="GitHub" width="12" height="12"></a></p>
      </div>
    <!-- </vs-navbar> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    colorx: '#7fa6ad',
  }),
};
</script>

<style scoped lang="stylus">
.myNavbar {
  color: rgb(255, 255, 255);
}

.center {
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 0.7rem;
  padding: 8px;
  box-box-sizing: border-box;
}
</style>