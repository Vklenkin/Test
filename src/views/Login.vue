<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="secondary">
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="login"
              prepend-icon="person"
              name="login"
              label="Login"
              type="text"
            >
            </v-text-field>
            <v-text-field
              v-model="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              id="password"
              type="password"
            >
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="loginBtn">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: "",
      token: ""
    };
  },
  methods: {
    loginBtn: function() {
      this.generateToken();

      let user = {
        login: this.login,
        password: this.password,
        token: this.token
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.$router.push("/");
    },

    generateToken: function() {
      let chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=:;";

      let length = (this.login + this.password).length;

      for (let i = 0; i < length; i++) {
        this.token += chars.charAt(
          Math.floor(Math.random(1, 10) * chars.length)
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
