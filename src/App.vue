<template>
  <v-app>
    <v-container fill-height>
      <v-toolbar color="#263238" dark app v-if="toolbarEnable">
        <v-flex xs1 style="cursor:pointer" @click="goHome">
          Go Home!
        </v-flex>
        <div class="text-xs-xenter">
          <v-chip
            color="green darken-2"
            text-color="white"
            v-for="(item, i) in users"
            :key="i"
            @click="setCurrentUserIndex(i)"
          >
            <v-avatar>
              <v-icon>account_circle</v-icon>
            </v-avatar>
            {{ item.lastName }}
          </v-chip>
        </div>

        <v-spacer></v-spacer>

        <v-menu bottom left offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on" style="margin: 0 0 15px 0">
              <v-avatar color="#004D40">
                <v-icon dark>account_circle </v-icon>
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-tile
              v-for="(item, i) in menuItems"
              :key="i"
              @click="menuClick(item.method)"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-content>
        <router-view />
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    menuItems: [
      { title: "Settings", method: "settings" },
      { title: "Logout", method: "logout" }
    ]
  }),
  methods: {
    menuClick: function(method) {
      switch (method) {
        case "settings":
          this.goToSettings();
          break;
        case "logout":
          this.logout();
          break;
      }
    },

    goHome: function() {
      this.$router.push("/");
    },

    goToSettings: function() {
      this.$router.push("/settings");
    },

    logout: function() {
      localStorage.clear();
      this.$router.push("/login");
    },

    setCurrentUserIndex: function(index) {
      this.$store.commit("setCurrentUserIndex", index);
    }
  },
  computed: {
    toolbarEnable() {
      return this.$store.state.toolbarEnable;
    },
    users() {
      return this.$store.state.users;
    }
  }
};
</script>

<style>
#app {
  /* font-family: "Roboto", sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 400;
  text-align: center;
}
</style>
