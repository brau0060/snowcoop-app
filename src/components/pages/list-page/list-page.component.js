
// Immport SideNavigation
import SideNavigation from '../../side-navigation/side-navigation.component.vue';

export default {
  name: 'listPage',
  // Add SideNavigation to components
  components: {
    SideNavigation
  },
  computed: {
    // Get user name from getter only if loged in
    // If user is not loged in re-route to login
    pageInfo() {
      if (this.$store.getters.IS_LOGIN === true) {
        // page title;
        return 'List Page';
      } else {
      // re-route to login
        return this.$router.push('login');
      }
    }
  },
};
