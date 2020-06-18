<template>
  <v-container class="pa-0 ma-0">
    <v-sheet dark color="primary" class="pa-4 login-header">
      <div class="display-3 font-weight-bold">
        monthly
        <br />dues
        <br />ph
      </div>
      <v-img class="login-header-image" :src="require('@/assets/icons8-pay-64-white.png')"></v-img>
    </v-sheet>
    <v-form class="mt-4 pa-4">
      <v-text-field
        class="login-input"
        prepend-inner-icon="mdi-account-circle-outline"
        outlined
        label="Username"
      ></v-text-field>
      <v-text-field
        class="login-input"
        prepend-inner-icon="mdi-lock"
        outlined
        label="Password"
      ></v-text-field>

      <div class="d-flex flex-column flex-sm-row pa-0">
        <v-btn
          @click="login"
          outlined
          class="my-2 mr-sm-2 pa-5 primary font-weight-bold action-buttons"
          dark
        >Login</v-btn>

        <v-btn @click="login" outlined class="mt-12 mt-sm-2 mr-sm-2 pa-5 blue action-buttons" dark>
          <span style="font-size: 2em" class="mr-4">
            <i class="fab fa-facebook"></i>
          </span>
          Login with Facebook
        </v-btn>
        <v-btn @click="login" outilned class="my-2 pa-5 action-buttons" color="red" dark>
          <span style="font-size: 2em" class="mr-4">
            <i class="fab fa-google"></i>
          </span>
          Login with Google
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<style>
.login-input .v-input__prepend-inner {
  margin: auto 14px !important;
}
</style>
<style scoped>
.login-input {
  border-radius: 10px;
}

.login-header {
  position: relative;
  height: 300px;
}
.login-header-image {
  width: 294px;
  height: 294px;
  position: absolute;
  bottom: -35px;
  right: -10px;
}

.action-buttons {
  height: 56px !important;
  border-radius: 50px;
}
</style>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/dashboard");
    }
  }
};
</script>