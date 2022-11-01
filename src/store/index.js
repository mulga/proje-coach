import { createStore } from "vuex";

import coachesModules from "./modules/coaches/index.js";
const store = createStore({
  modules: {
    coachesKey: coachesModules,
  },

  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
