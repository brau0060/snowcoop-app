
// Immport SideNavigation
import SideNavigation from '../../side-navigation/side-navigation.component.vue';
import mapView from '../../shared/map-view/map-view.component.vue';
export default {
  name: 'listPage',
  components: {
    SideNavigation,
    mapView
  },
  data() {
    return {
      addressList: null,
    }
  },
  // Add SideNavigation to components
  mounted(){
    /* eslint-disable */ 
    console.log('mounted...');
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
    this.addressList = addressList;
    console.log(addressList);
    });
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
