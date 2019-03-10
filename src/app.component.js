import dashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue';

export default {
  name: 'app',
  components: {
    // SideNavigation, ---Remove and move to dashboard page to fix back buton issue
    dashboardPage
  },
  computed: {
    isLogIn() {
      return this.$store.getters.IS_LOGIN
      
    }
  },
};


