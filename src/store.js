import Vue from "vue";
import Vuex from "vuex";
import ApiService from "./services/APIService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentChampion: {}
  },
  getters: {
    currentChampion: state => state.currentChampion
  },
  mutations: {
    SET_CURRENT_CHAMPION(state, champion) {
      state.currentChampion = champion;
    }
  },
  actions: {
    QUERY_AI(context, payload) {
      return ApiService.queryAI(payload).then(data => {
        context.commit("SET_CURRENT_CHAMPION", data.data);
        return data;
      });
    }
  }
});
