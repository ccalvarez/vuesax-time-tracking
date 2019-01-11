import axios from 'axios';

const state = {
  tasks: [],
  userId: process.env.VUE_APP_USERID,
};

const getters = {
  userId: state => {
    return state.userId;
  },
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
    return state.tasks.filter(task => task.state == 'pending');
  },
};

const mutations = {
  updateTasks: (state, tasks) => {
    state.tasks = tasks;
  },
  updateTaskState: (state, payload) => {
    let taskInStore = state.tasks.find(task => task._id == payload.taskId);

    if (payload.state == 'running') {
      if (taskInStore.state == 'pending') {
        // tarea está pendiente, no tiene arreglo de intervalos, crear la propiedad intervals:
        taskInStore.intervals = [
          {
            start: payload.start,
            end: null,
          },
        ];
      } else {
        // tarea está pausada, ya tiene arreglo de intervalos, agregar al arreglo un nuevo intervalo:
        taskInStore.intervals.push({
          start: payload.start,
          end: null,
        });
      }
    } else if (
      // pausar una en ejecución o finalizar una en ejecución ==> cerrar su último intervalo
      payload.state == 'paused' ||
      (payload.state == 'finished' && taskInStore.state == 'running')
    ) {
      // buscar el último intervalo y cerrarlo:
      const lastIntervalStart = Math.max(
        ...taskInStore.intervals.map(interval => new Date(interval.start))
      );
      let lastInterval = taskInStore.intervals.find(
        interval => interval.start == new Date(lastIntervalStart).toISOString()
      );
      lastInterval.end = payload.end;
    }
    // en todos los casos, actualizar el estado de la tarea:
    taskInStore.state = payload.state;
  },
  addTask: (state, task) => {
    state.tasks.push(task);
  },
  updateUserId: (state, userId) => {
    state.userId = userId;
  },
};

const actions = {
  getTasks: ({ commit, state }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(process.env.VUE_APP_APIURL + `/users/${state.userId}/tasks`)
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
            commit('updateTaskState', {
              end: response.data.end,
              taskId: taskId,
              state: 'paused',
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

  resumeOrStartTask: ({ commit }, taskId) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(process.env.VUE_APP_APIURL.concat('/tasks'), {
          taskId: taskId,
          state: 'running',
        })
        .then(response => {
          if (response.status == 200) {
            commit('updateTaskState', {
              start: response.data.start,
              state: 'running',
              taskId: taskId,
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

  finishTask: ({ commit }, taskId) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(process.env.VUE_APP_APIURL.concat('/tasks'), {
          taskId: taskId,
          state: 'finished',
        })
        .then(response => {
          if (response.status == 200) {
            commit(
              'updateTaskState',
              response.data.end
                ? { end: response.data.end, taskId: taskId, state: 'finished' }
                : { taskId: taskId, state: 'finished' }
            );
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

  addTask: ({ commit, rootGetters }, task) => {
    return new Promise((resolve, reject) => {
      axios
        .post(process.env.VUE_APP_APIURL.concat('/tasks'), task)
        .then(response => {
          if (response.status == '201') {
            commit(
              'addTask',
              task.start
                ? {
                    description: task.description,
                    intervals: [
                      {
                        start: response.data.start,
                        end: null,
                      },
                    ],
                    state: 'running',
                    project: {
                      name: rootGetters.projects.find(
                        project => project._id == task.projectId
                      ).name,
                      _id: task.projectId,
                    },
                    _id: response.data._id,
                  }
                : {
                    description: task.description,
                    state: 'pending',
                    project: {
                      name: rootGetters.projects.find(
                        project => project._id == task.projectId
                      ).name,
                      _id: task.projectId,
                    },
                    _id: response.data._id,
                  }
            );
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

  updateUserId: ({ commit, dispatch }, userId) => {
    commit('updateUserId', userId);
    dispatch('getTasks')
      .then()
      .catch(); // TODO: esperar y actuar segÃºn el resultado de la Promise
    dispatch('getProjects')
      .then()
      .catch(); // TODO: esperar y actuar según el resultado de la Promise
  },

  login: (context, user) => {
    return new Promise((resolve, reject) => {
      axios
        .post(process.env.VUE_APP_APIURL.concat('/users/login'), user)
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
