import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Home from "./modules/Home/store";

export default new Vuex.Store({
  modules: {
    home: Home,
  },
});
