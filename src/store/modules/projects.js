import axios from 'axios';

const state = {
  projects: [],
};

const getters = {
  projects: state => {
    return state.projects;
  },
};

const mutations = {
  updateProjects: (state, projects) => {
    state.projects = projects;
  },
};

const actions = {
  getProjects: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          process.env.VUE_APP_APIURL.concat(
            '/users/5c1591a080980742861d7ef6/projects'
          )
        )
        .then(response => {
          if (response.status == 200) {
            commit('updateProjects', response.data);
            resolve();
          } else if (response.status == 204) {
            resolve();
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
