import Vue from 'vue';
import Router from 'vue-router';
import TasksListsContainer from '@/components/TasksListsContainer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tasks',
    },
    {
      path: '/tasks',
      name: 'tasks',
      components: {
        content: TasksListsContainer,
      },
      meta: {
        index: 0,
      },
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        index: 1,
      },
    },
    {
      path: '/report',
      name: 'report',
      meta: {
        index: 2,
      },
    },
    {
      path: '*',
      redirect: '/tasks',
    },
  ],
});
