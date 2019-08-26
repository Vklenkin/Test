import axios from "axios";
import store from "../_store";
export const apiService = {
  getApiImageUrl
};

function getApiImageUrl(index) {
  let api = store.state.apiArray[index];
  store.commit("setImageUrl", "");
  axios({
    method: "GET",
    url: api.url
  }).then(function(result) {
    switch (api.id) {
      case 0:
        store.commit("setImageUrl", result.data[0].url);
        break;
      case 1:
        store.commit("setImageUrl", result.data.message);
        break;
      case 2:
        store.commit("setResultCityList", result.data.results);
        break;
      case 3:
        store.commit("setImageUrl", api.url);
        break;

      default:
        break;
    }
  });
}
