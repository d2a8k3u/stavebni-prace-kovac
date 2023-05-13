import AdminPage from '@/modules/admin/views/AdminPage.vue';
import LoginPage from '@/modules/admin/views/LoginPage.vue';

export default [
  {
    path: '/admin',
    name: 'admin-page',
    component: AdminPage,
  },
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage,
  },
];
