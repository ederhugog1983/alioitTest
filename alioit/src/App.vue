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
    </v-main>
  </v-app>
</template>

<script>
import WelcomePoke from './components/WelcomePoke';

export default {
  name: 'App',

  components: {
    WelcomePoke,
  },

  data: () => ({
    //
  }),
};
</script>
