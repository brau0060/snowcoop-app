import VueRouter from 'vue-router';
import loginPage from './components/pages/login-page/login-page.component.vue';
import registerPage from './components/pages/register-page/register-page.component.vue';
import dashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue';
import listPage from './components/pages/list-page/list-page.component.vue';
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: loginPage,
    },
    {
      path: '/register',
      component: registerPage
    },
    {
      path: '/dashboard',
      component: dashboardPage,
      // to acsess this page you need to be logged in
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/list',
      component: listPage,
      // to acsess this page you need to be logged in
      meta: {
        requireAuth: true
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
if (to.matched.some(record => record.meta.requiresAuth)) {
   if(localStorage.getItem("token") == null) {
     next({
       path: "/login",
       params: to.fullPath
     });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;