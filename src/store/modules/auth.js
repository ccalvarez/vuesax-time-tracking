import axios from 'axios';

const state = {
  encodedToken: null,
  userId: null,
  parsedToken: null,
};

const getters = {
  userId: state => {
    return state.userId;
  },
};

const mutations = {
  authenticateUser: (state, userData) => {
    state.parsedToken = parseJWT(userData.token);
    state.encodedToken = userData.token;
    state.userId = state.parsedToken.data.userId;
  },
};

const actions = {
  login: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/users/login', user)
        .then(response => {
          if (response.status == 200) {
            commit('authenticateUser', response.data);
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

const parseJWT = token => {
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
};

export default {
  state,
  getters,
  mutations,
  actions,
};
