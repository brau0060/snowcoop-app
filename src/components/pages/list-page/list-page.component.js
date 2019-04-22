// Immport SideNavigation
import mapView from '../../shared/map-view/map-view.component.vue';
import formAddAddress from './form-add-address/form-add-address.component.vue';
export default {
  name: 'listPage',
  components: {
    mapView,
    formAddAddress
  },
  data() {
    return {
      addressList: null,
    }
  },
  mounted(){
    /* eslint-disable */ 
    console.log('mounted...');
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
    this.addressList = addressList;
    /* eslint-disable */
    console.log(addressList);
    });
  },
  // Add SideNavigation to components
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
  methods: {
    showForm() {
      this.$refs.formAddress.toggleForm(true);
    }
  }
};