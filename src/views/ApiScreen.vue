<template>
  <v-layout row wrap align-start justify-center class="api-card">
    <v-flex xs12 class="header">
      <h1>{{ apiInfo.name }}</h1>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap align-start justify-center class="content">
        <v-flex xs12>
          <h3>URL: {{ apiInfo.url }}</h3>
        </v-flex>
        <v-flex xs12 v-if="itemId != 2">
          <h3>RESULT:</h3>
          <img
            :src="resultImgUrl"
            alt=""
            style="max-height: 60vh; max-width: 80vw"
          />
        </v-flex>
        <v-flex xs12 v-else>
          <v-layout row wrap>
            <v-flex
              xs4
              v-for="(item, i) in resultCityList.slice(0, 50)"
              :key="i"
            >
              <p>{{ item.city }} ({{ item.country }} | )</p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { apiService } from "../_services";

export default {
  name: "ApiScreen",
  props: ["itemId"],
  created: function() {
    apiService.getApiImageUrl(this.itemId);
  },
  computed: {
    currentUserIndex() {
      return this.$store.state.currentUserIndex;
    },
    apiInfo() {
      return this.$store.state.apiArray[this.itemId];
    },
    resultImgUrl() {
      return this.$store.state.imageUrl;
    },
    resultCityList() {
      return this.$store.state.resultCityList;
    }
  },
  watch: {
    currentUserIndex: function(val) {
      if (val != null && val != undefined) {
        this.$router.push("/");
      }
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.api-card {
  height: calc(100vh - 112px);
  border: 1px solid #29b6f6;
  .header {
    background-color: #29b6f6;
    color: white;
  }
  .content {
    height: calc(100vh - 154px);
  }
}
</style>
