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
  addProject: (state, project) => {
    state.projects.push(project);
  },
};

const actions = {
  getProjects: ({ commit, rootGetters }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          process.env.VUE_APP_APIURL.concat(
            `/users/${rootGetters.userId}/projects`
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
  addProject: ({ commit }, project) => {
    return new Promise((resolve, reject) => {
      axios
        .post(process.env.VUE_APP_APIURL.concat('/projects'), {
          name: project.name,
          userId: project.userId,
        })
        .then(response => {
          if (response.status == '201') {
            commit('addProject', {
              name: project.name,
              _id: response.data._id,
            });
            resolve();
          } else {
            reject(response);
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
