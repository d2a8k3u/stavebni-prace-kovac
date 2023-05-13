import { createRouter, createWebHistory } from 'vue-router';
import adminRoutes from '@/modules/admin/routes';
import guestRoutes from '@/modules/guest/routes';
import loginRoutes from '@/modules/login/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...adminRoutes, ...guestRoutes, ...loginRoutes],
});

export default router;
