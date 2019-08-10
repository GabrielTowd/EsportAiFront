import Vue from "vue";
import Vuex from "vuex";
import ApiService from "./services/APIService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentChampion: {},
    showResult: false
  },
  getters: {
    currentChampion: state => state.currentChampion,
    showResult: state => state.showResult
  },
  mutations: {
    SET_CURRENT_CHAMPION(state, champion) {
      state.currentChampion = champion;
    },
    SHOW_RESULT(state) {
      state.showResult = !state.showResult;
    }
  },
  actions: {
    QUERY_AI(context, query) {
      return ApiService.queryAI(query).then(data => {
        context.commit("SET_CURRENT_CHAMPION", data.data);
        return data;
      });
    },
    SHOW_RESULT(context) {
      context.commit("SHOW_RESULT");
    }
  }
});
