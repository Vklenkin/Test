<template>
  <v-layout
    align-start
    justify-center
    row
    wrap
    fill-height
    style="height: 85vh"
  >
    <v-flex xs4 v-for="(item, i) in apiArray" :key="i">
      <Card
        :title="item.name"
        :body="item.description"
        :itemId="item.id"
      ></Card>
    </v-flex>
  </v-layout>
</template>

<script>
import Card from "./components/Card.vue";
export default {
  components: {
    Card
  },
  name: "Home",
  created() {
    this.generateApiArray();
  },
  computed: {
    currentUserIndex: function() {
      return this.$store.state.currentUserIndex;
    }
  },
  data() {
    return {
      apiArray: []
    };
  },
  watch: {
    currentUserIndex: function(val) {
      if (val != null && val != undefined) {
        this.generateApiArray();
      }
    }
  },
  methods: {
    generateApiArray: function() {
      let indexArray = [];
      let result = [];

      while (indexArray.length < 2) {
        let index = Math.floor(Math.random() * 4);
        if (!indexArray.includes(index)) {
          indexArray.push(index);
        }
      }

      for (let i = 0; i < 6; i++) {
        if (i % 2 == 0) {
          result.push(this.$store.state.apiArray[indexArray[0]]);
        } else {
          result.push(this.$store.state.apiArray[indexArray[1]]);
        }
      }
      this.apiArray = result;
    }
  }
};
</script>

<style lang="scss">
.v-chip .v-chip__content {
  cursor: pointer !important;
}
</style>
