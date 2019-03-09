export default {
  name: 'dashboardPage',

  computed: {
    // Get user name from getter only if loged in
    // If user is not loged in re rout to login
    userInfo() {
      if (this.$store.getters.IS_LOGIN === true) {
        return this.$store.getters.USERNAME
      } else {

        return this.$router.push('login');
      }
    }
  },
};

