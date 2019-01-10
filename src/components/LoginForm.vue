<template>
  <div>
    <vs-input type="email" label="Email" v-model="email"></vs-input>
    <br>
    <vs-input type="password" label="Password" v-model="password"></vs-input>
    <br>
    <vs-button size="large" @click="login($event)">Acceder</vs-button>
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
  methods: {
    login(event) {
      event.target.parentElement.disabled = true;
      this.$store
        .dispatch('login', {
          email: this.email.trim(),
          password: this.password.trim(),
        })
        .then(result => {
          const parsedToken = this.parseJWT(result.token);
          this.$cookie.set('_ATHNCTKN', result.token, {
            expires: new Date(parsedToken.exp),
          });

          // usuario autenticado, redireccionar a /tasks

          event.target.parentElement.disabled = false;
        })
        .catch(error => {
          this.popupTitle = 'Atención';
          // TODO: este catch atrapa incluso errores de sentencias dentro de .then() como que .set falla porque
          // no importé vue-cookie (.set de undefined), por lo que no debo tratar de leer error.response.data.message
          // sino leer una propiedad más genérica que tenga cualquier error, de lo contrario me da error la siguiente línea:
          this.popupText = error.response.data.message;
          this.popupInfoIsActive = true;
          event.target.parentElement.disabled = false;
        });
    },
    parseJWT(token) {
      let base64Url = token.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(window.atob(base64));
    },
  },
};
</script>
<style>
</style>
