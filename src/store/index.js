import Vue from 'vue';
import Vuex from 'vuex';
import tasks from './modules/tasks';
import projects from './modules/projects';
import auth from './modules/auth';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    tasks,
    projects,
    auth,
  },
});
