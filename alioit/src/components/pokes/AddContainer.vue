<template>
  <v-dialog 
    v-model="$store.state.pokesCRUD.showAddContainer" 
    persistent
    transition="dialog-top-transition"
    max-width="600px"
    max-height="auto"
    >
    <v-card>
      <v-card-title>Add a new container</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols=12>
            <v-text-field
              label="Add a container name"
              :rules="rules"
              hide-details="auto"
              v-model="name"
            ></v-text-field>            
          </v-col>
          <v-col cols=12>
            <v-btn style="border: solid 1px white" class="" @click="saveContainer()">
                <!-- <img  v-bind="attrs" v-on="on"
                  :src="!this.$store.state.pokesCRUD.showContainer ? SendRequestIcon : BackIcon "
                  height="20px"
                  width="20px"
                  class="mr-2"
                  
                /> --> Save Container
              </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    data: () => ({
      name:'',
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
    methods: {
      saveContainer() {
        console.log('save container')
        const data = {
          name: this.name
        }
        this.$store.dispatch('pokesCRUD/showAddContainer', false)        
        this.$store.dispatch('pokesCRUD/saveContainer', data)        
      }
    }
  }
</script>