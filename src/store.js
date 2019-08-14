import Vue from "vue";
import Vuex from "vuex";
import ApiService from "./services/APIService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    answerType: null,
    showResult: false,
    dataDragonBaseUrl: "http://ddragon.leagueoflegends.com/cdn/6.24.1"
  },
  getters: {
    data: state => state.data,
    answerType: state => state.answerType,
    showResult: state => state.showResult,
    dataDragonBaseUrl: state => state.dataDragonBaseUrl
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data.data;
    },
    SET_ANSWER_TYPE(state, answer) {
      state.answerType = answer.answer_type;
    },
    SHOW_RESULT(state) {
      state.showResult = !state.showResult;
    },
    CLEAR_DATA(state) {
      state.answerType = null;
      state.data = {};
    }
  },
  actions: {
    QUERY_AI(context, query) {
      return ApiService.queryAI(query).then(data => {
        context.commit("SET_DATA", data.data);
        context.commit("SET_ANSWER_TYPE", data.data);
        return data;
      });
    },
    SHOW_RESULT(context) {
      context.commit("SHOW_RESULT");
    },
    CLEAR_DATA(context) {
      context.commit("CLEAR_DATA");
    }
  }
});
