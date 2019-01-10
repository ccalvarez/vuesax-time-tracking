import Vue from 'vue';
import Router from 'vue-router';
import TasksListsContainer from '@/components/TasksListsContainer';
import ProjectsList from '@/components/ProjectsList';
import LoginForm from '@/components/LoginForm';
// Lazy Loading:
// const ProjectsList = () => import('@/components/ProjectsList');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tasks',
    },
    {
      path: '/login',
      name: 'login',
      components: {
        content: LoginForm,
      },
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
      components: {
        content: ProjectsList,
      },
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
