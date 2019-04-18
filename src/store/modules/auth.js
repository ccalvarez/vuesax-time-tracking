import axios from 'axios';

const state = {
  idToken: null,
  userId: null,
};

const getters = {};

const mutations = {};

const actions = {
  login: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/users/login', user)
        .then(response => {
          if (response.status == 200) {
            resolve(response.data);
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
