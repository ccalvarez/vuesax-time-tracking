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
    },
    {
      path: '/projects',
      name: 'projects',
    },
    {
      path: '/report',
      name: 'report',
    },
  ],
});
