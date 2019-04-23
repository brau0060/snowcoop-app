//get the map view from shared folder
import mapView from '../../shared/map-view/map-view.component.vue';
export default {
  name: 'dashboardPage',
  //get the map view to dashboard page
  components: {
    mapView
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
}