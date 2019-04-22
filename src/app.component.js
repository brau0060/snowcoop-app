import dashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue';
import SideNavigation from './components/side-navigation/side-navigation.component.vue';

export default {
  name: 'app',
  components: {
   SideNavigation,
    dashboardPage
  },
  computed: {
    isLogIn() {
      return this.$store.getters.IS_LOGIN
      
    }
  },
};


