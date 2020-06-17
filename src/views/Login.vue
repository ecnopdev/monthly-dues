<template>
  <v-container>
    <v-form>
      <v-text-field label="Username"></v-text-field>
      <v-text-field label="Password"></v-text-field>

      <div class="d-flex flex-column flex-sm-row">
        <v-btn class="my-2 pa-5">Login</v-btn>
        <v-btn class="my-2 pa-5" color="blue" dark>Login with Facebook</v-btn>
        <v-btn class="my-2 pa-5" color="red" dark>Login with Google</v-btn>
      </div>
    </v-form>
  </v-container>
</template>
