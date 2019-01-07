<template>
  <div>
    <vs-input type="email" label="Email" v-model="email"></vs-input>
    <br>
    <vs-input type="password" label="Password" v-model="password"></vs-input>
    <br>
    <vs-button size="large" @click="login()">Acceder</vs-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>
<style>
</style>
