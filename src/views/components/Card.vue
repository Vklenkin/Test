<template>
  <v-layout>
    <v-flex xs12 class="margin">
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ title }}</h3>
            <v-layout row wrap>
              {{ body }}
            </v-layout>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn color="primary" @click="showApiScreen">show more...</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "body", "itemId"],
  data() {
    return {};
  },
  methods: {
    showApiScreen: function() {
      this.$router.push("/ApiScreen/" + this.itemId);
    }
  }
};
</script>

<style>
.margin {
  margin: 5px;
}
</style>
