import axios from 'axios';

const state = {
  tasks: [],
};

const getters = {
  runningTasks: state => {
    return state.tasks.filter(task => task.state == 'running');
  },
  pausedTasks: state => {
    return state.tasks.filter(task => task.state == 'paused');
  },
  finishedTasks: state => {
    return state.tasks.filter(task => task.state == 'finished');
  },
  pendingTasks: state => {
    return state.tasks.filter(task => task.state == 'pending');
  },
};

const mutations = {
  updateTasks: (state, tasks) => {
    state.tasks = tasks;
  },
};

const actions = {
  getTasks: ({ commit, state }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          process.env.VUE_APP_APIURL + '/users/5c1591a080980742861d7ef6/tasks'
        )
        .then(response => {
          if (response.status == 200) {
            commit('updateTasks', response.data);
            resolve();
          } else if (response.status == 204) {
            resolve(); // TODO: resolver qué mostrar en caso de que no haya tareas
          }
        })
        .catch(error => {
          reject();
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
