import axios from 'axios';

const state = {
  tasks: [],
};

const getters = {
  workInProgress: state => {
    return state.tasks.filter(task => task.state == 'running').length > 0;
  },
  runningTasks: state => {
    return state.tasks
      .filter(task => task.state == 'running')
      .sort((a, b) => {
        return (
          Math.min(
            ...a.intervals.map(interval => {
              return new Date(interval.start);
            })
          ) -
          Math.min(
            ...b.intervals.map(interval => {
              return new Date(interval.start);
            })
          )
        );
      });
  },
  pausedTasks: state => {
    return state.tasks
      .filter(task => task.state == 'paused')
      .sort((a, b) => {
        return (
          Math.min(
            ...a.intervals.map(interval => {
              return new Date(interval.start);
            })
          ) -
          Math.min(
            ...b.intervals.map(interval => {
              return new Date(interval.start);
            })
          )
        );
      });
  },
  // TODO: resolver cómo ordenar las finalizadas, por ahora las ordenaré por fecha de inicio de atención, descendente
  finishedTasks: state => {
    return state.tasks
      .filter(task => task.state == 'finished')
      .sort((a, b) => {
        return (
          Math.max(
            ...b.intervals.map(interval => {
              return new Date(interval.start);
            })
          ) -
          Math.max(
            ...a.intervals.map(interval => {
              return new Date(interval.start);
            })
          )
        );
      });
  },
  pendingTasks: state => {
    return state.tasks
      .filter(task => task.state == 'pending')
      .sort((a, b) => {
        return (
          Math.min(
            ...a.intervals.map(interval => {
              return new Date(interval.start);
            })
          ) -
          Math.min(
            ...b.intervals.map(interval => {
              return new Date(interval.start);
            })
          )
        );
      });
  },
};

const mutations = {
  updateTasks: (state, tasks) => {
    state.tasks = tasks;
  },
  updateTaskState: (state, payload) => {
    state.tasks.find(task => task._id == payload.taskId).state = payload.state;
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
            commit('updateTaskState', { taskId: taskId, state: 'paused' }); // TODO: actualizar también intervals
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

  resumeTask: ({ commit }, taskId) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(process.env.VUE_APP_APIURL.concat('/tasks'), {
          taskId: taskId,
          state: 'running',
        })
        .then(response => {
          if (response.status == 200) {
            commit('updateTaskState', { taskId: taskId, state: 'running' }); // TODO: actualizar también intervals
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

  finishTask: ({ commit }, taskId) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(process.env.VUE_APP_APIURL.concat('/tasks'), {
          taskId: taskId,
          state: 'finished',
        })
        .then(response => {
          if (response.status == 200) {
            commit('updateTaskState', { taskId: taskId, state: 'finished' }); // TODO: actualizar también intervals
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
