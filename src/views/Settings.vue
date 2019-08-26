<template>
  <v-layout row wrap style="height: 85vh" align-center justify-center>
    <v-btn color="primary" absolute top align-start @click="addUser">
      Add User
    </v-btn>
    <v-flex xs12>
      <v-layout row wrap v-show="showForm">
        <v-flex xs2 offset-xs4 class="field">
          <v-text-field v-model="user.login" label="Login"></v-text-field>
        </v-flex>

        <v-flex xs2 class="field">
          <v-text-field
            v-model="user.password"
            label="Password"
            type="password"
          ></v-text-field>
        </v-flex>

        <v-flex xs4 offset-xs4 class="field">
          <v-text-field
            v-model="user.lastName"
            label="Last Name"
          ></v-text-field>
        </v-flex>

        <v-flex xs4 offset-xs4 class="field">
          <v-text-field
            v-model="user.firstName"
            label="First Name"
          ></v-text-field>
        </v-flex>

        <v-flex xs4 offset-xs4 class="field">
          <v-text-field
            v-model="user.middleName"
            label="Middle Name"
          ></v-text-field>
        </v-flex>
        <v-flex xs4 offset-xs4 class="field">
          <v-textarea
            v-model="user.about"
            label="About you"
            auto-grow
          ></v-textarea>
        </v-flex>
        <v-flex xs4 offset-xs4>
          <v-layout row wrap>
            <v-flex xs5>
              <v-btn
                block
                color="error"
                dark
                @click="removeUser"
                :disabled="!(currentUserIndex != null)"
                >Remove User</v-btn
              >
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs5 v-if="currentUserIndex == null">
              <v-btn block color="success" dark @click="saveUser">Save</v-btn>
            </v-flex>
            <v-flex xs5 v-else>
              <v-btn block color="success" dark @click="saveChanges"
                >Save Changes</v-btn
              >
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Settings",
  computed: {
    users() {
      return this.$store.state.users;
    },
    currentUserIndex() {
      return this.$store.state.currentUserIndex;
    }
  },
  watch: {
    currentUserIndex: function(val) {
      if (val != null && val != undefined) {
        this.user = this.$store.state.users[val];
        this.showForm = true;
      }
    }
  },
  data: () => ({
    user: {
      login: "",
      password: "",
      lastName: "",
      firstName: "",
      middleName: "",
      about: ""
    },
    showForm: false
  }),
  methods: {
    addUser: function() {
      this.showForm = true;
      this.cleanForm();
      this.$store.commit("setCurrentUserIndex", null);
    },

    saveUser: function() {
      this.$store.commit("addUser", this.user);
      this.cleanForm();
      this.showForm = false;
    },

    saveChanges: function() {
      this.$store.commit("changeUser", {
        index: this.currentUserIndex,
        user: this.user
      });
      this.showForm = false;
      this.$store.commit("setCurrentUserIndex", null);
    },

    cleanForm: function() {
      this.user = {
        login: "",
        password: "",
        lastName: "",
        firstName: "",
        middleName: "",
        about: ""
      };
    },
    removeUser: function() {
      this.$store.commit("removeUser", this.currentUserIndex);
      this.cleanForm();
      this.showForm = false;
      this.$store.commit("setCurrentUserIndex", null);
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  margin: 0 5px;
}
.addUserBtn {
}
</style>
