import { createStore } from "vuex";

import coachesModules from "./modules/coaches/index.js";
const store = createStore({
  modules: {
    coachesKey: coachesModules,
  },
});

export default store;
