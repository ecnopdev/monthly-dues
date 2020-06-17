<template>
  <v-container class="pa-0">
    <v-sheet dark color="primary" height="320px" class="pa-4">
        <div class="display-3 font-weight-bold">
          monthly
          <br />dues
          <br />ph
          </div>
    </v-sheet>
    <v-form class="pa-2">
      <v-text-field style="border-radius:10px;" prepend-inner-icon="mdi-account-circle-outline" outlined label="Username">

      </v-text-field>
      <v-text-field style="border-radius:10px;" prepend-inner-icon="mdi-lock" outlined label="Password"></v-text-field>

      <div class="d-flex flex-column flex-sm-row">
        <v-btn @click="login" outlined class="my-2 pa-5 primary font-weight-bold action-buttons" dark>
          Login
        </v-btn>

        <v-btn @click="login" outlined class="my-2 pa-5 blue action-buttons" dark>
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
<style scoped>
.action-buttons {
  height:56px !important;
  border-radius:50px;
}
</style>
<script>
export default {
  methods:{
    login(){
      this.$router.push('/dashboard');
    }
  }
}
</script>