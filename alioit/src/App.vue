<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://www.linkedin.com/in/eder-hugo-garcia-calderon-6b37a482?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOVv9wqrIRA6nuGUD2Q1G3g%3D%3D"
        target="_blank"
        text
      >
        <span class="mr-2">Eder Garcia</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <WelcomePoke/>
      <NotificationProcessEnd/>
    </v-main>
  </v-app>
</template>

<script>
import WelcomePoke from './components/WelcomePoke';
import NotificationProcessEnd from './components/notifications/NotificationProcessEnd.vue'

export default {
  name: 'App',

  components: {
    WelcomePoke,NotificationProcessEnd
  },
  mounted() {
    setInterval(() => {
          this.getNotificationsToUser()
       }, 10000)
  },
  computed: {
    notifications () {
      return this.$store.state.pokesCRUD.containers
    }
  },
  watch :{
    notifications(val) {
      val.forEach(element => {        
        if (element.status == 'processBeNotify')
        {
          const data = {
            pokesContainerId :element._id
          }
          this.$store.dispatch('notificationPush/setContainerName', element.name)
          this.$store.dispatch('notificationPush/showAlert', true)
          this.$store.dispatch('pokesCRUD/setStatusPokeContainer', data)
          this.$store.dispatch('pokesCRUD/getContainers', data)
        }  
      });
    }
  },
  methods: {
    getNotificationsToUser() {
      this.$store.dispatch('pokesCRUD/getContainers')
    }
  },
  data: () => ({
    //
  }),
};
</script>
