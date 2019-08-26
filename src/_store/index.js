import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    toolbarEnable: false,
    currentUserIndex: null,
    apiArray: [
      {
        id: 0,
        name: "TheCatApi",
        description: "Return random cat image",
        url: "https://api.thecatapi.com/v1/images/search"
      },
      {
        id: 1,
        name: "TheDogApi",
        description: "Return random dog image",
        url: "https://dog.ceo/api/breeds/image/random"
      },
      {
        id: 2,
        name: "Open AQ Platform API",
        description: "Return list Cityes",
        url: "https://api.openaq.org/v1/cities"
      },
      {
        id: 3,
        name: "Kwelo",
        description: "Ident icon Generator",
        url: "https://api.kwelo.com/v1/media/identicon/random_values"
      }
    ],
    imageUrl: "",
    resultCityList: []
  },
  mutations: {
    toolbarEnable(state) {
      state.toolbarEnable = true;
    },

    toolbarDisable(state) {
      state.toolbarEnable = false;
    },

    addUser(state, data) {
      state.users.push(data);
    },

    changeUser(state, data) {
      state.users[data.index] = data.user;
    },

    removeUser(state, data) {
      state.users.splice(data, 1);
    },

    clearUsers(state) {
      state.users = [];
    },

    setCurrentUserIndex(state, data) {
      state.currentUserIndex = data;
    },

    setImageUrl(state, data) {
      state.imageUrl = data;
    },
    setResultCityList(state, data) {
      state.resultCityList = data;
    }
  },
  actions: {}
});
