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
  pauseTask: (state, taskId) => {
    state.tasks.find(task => task._id == taskId).state = 'paused';
  },
};

const actions = {
  getTasks: ({ commit }) => {
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
          reject(error);
        });
    });
  },

  pauseTask: ({ commit }, taskId) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(process.env.VUE_APP_APIURL.concat('/tasks'), {
          taskId: taskId,
          state: 'paused',
        })
        .then(response => {
          if (response.status == 200) {
            commit('pauseTask', taskId);
            resolve();
          } else {
            reject(response.data);
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
