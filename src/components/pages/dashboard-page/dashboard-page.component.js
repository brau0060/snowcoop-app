// Immport SideNavigation
import SideNavigation from '../../side-navigation/side-navigation.component.vue';

export default {
  name: 'dashboardPage',
  // Add SideNavigation to components
  components: {
    SideNavigation
  },
  
  computed: {
    // Get user name from getter only if loged in
    // If user is not loged in re-route to login
    userInfo() {
      if (this.$store.getters.IS_LOGIN === true) {
        return this.$store.getters.USERNAME
      } else {
      // re-route to login
        return this.$router.push('login');
      }
    }
  },
};

