<template>
  <v-container>
    <v-card style="margin-top:5%;border-radius:60px;max-width: 90%;padding: 2%;margin: 3%; background:linear-gradient(90deg, rgba(255, 0, 0, 0.7) 0%, rgba(61, 8, 8, 0.7) 40%, rgba(201, 50, 50, 0.7) 80%)" elevation="16" outlined shaped>
      <v-card-text>
          <v-row class="text-center">
            <v-col cols="12">
              <v-img
                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                class="my-3"
                contain
                height="200"
              />
            </v-col>

            <v-col class="mb-4" cols=12>
              <h1 class="display-2 font-weight-bold mb-3">
                Aliot Test Poke API
              </h1>
            </v-col>
            <v-col>
          <v-card  v-if="!$store.state.pokesCRUD.showContainer && !$store.state.pokesCRUD.showPokeApi && !$store.state.pokesCRUD.showPokesSavedOnContainer" 
              style="margin-top:1%;margin-bottom:1%;padding: 15px;background:linear-gradient(90deg, rgba(51, 48, 48, 0.7) 0%, rgba(4, 4, 4, 0.7) 40%, rgba(11, 3, 3, 0.7) 80%)">
            <v-card-title style="color:white; font-size:32px">Welcome</v-card-title>
            <v-card-text>
            <v-row>
              <v-col cols="12" style="text-align:justify;color:#EBC820;font-size:24px;letter-spacing: 2px; line-height: 1.6;">
                You need create first a container, this container can be use for added new pokes, so you are going to have group the pokes by containers
              </v-col>
              <v-col cols="12" style="text-align:right;color:white;font-size:16px">
                See the containers              
              </v-col>
            </v-row>
            <v-row>
              <v-col cols=12 style=" display: flex;
              justify-content: right;">
                <v-btn style="border: solid 1px white" class="" @click="goToContainers()">
                <img  v-bind="attrs" v-on="on"
                  :src="!this.$store.state.pokesCRUD.showContainer ? SendRequestIcon : BackIcon "
                  height="20px"
                  width="20px"
                  class="mr-2"
                  
                /> {{this.$store.state.pokesCRUD.showContainer ? 'Hide ' : 'Go '}}Containers
              </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
            </v-col>
            <v-col class="mb-4" cols=12 v-if="false">
              <v-btn style="border: solid 1px white" class="" @click="goToContainers()">
                <img  v-bind="attrs" v-on="on"
                  :src="!this.$store.state.pokesCRUD.showContainer ? SendRequestIcon : BackIcon "
                  height="20px"
                  width="20px"
                  class="mr-2"
                  
                /> {{this.$store.state.pokesCRUD.showContainer ? 'Hide ' : 'Go '}}Containers
              </v-btn>
            </v-col>
            <v-col class="mb-4" cols=12 v-if="this.$store.state.pokesCRUD.showContainer">
               <v-btn style="border: solid 1px white" class="" @click="$store.state.pokesCRUD.showAddContainer = true">
                <!-- <img  v-bind="attrs" v-on="on"
                  :src="!this.$store.state.pokesCRUD.showContainer ? SendRequestIcon : BackIcon "
                  height="20px"
                  width="20px"
                  class="mr-2"
                  
                /> --> New Container
              </v-btn>
              <v-btn style="border: solid 1px white" class="" @click="$store.state.pokesCRUD.showContainer = false">
                <!-- <img  v-bind="attrs" v-on="on"
                  :src="!this.$store.state.pokesCRUD.showContainer ? SendRequestIcon : BackIcon "
                  height="20px"
                  width="20px"
                  class="mr-2"
                  
                /> --> Hide Containers
              </v-btn>
              
            </v-col>      
            <v-col class="mb-4" cols=12>
              <PokeContainers/>
              <AddContainer/>
            </v-col>      
          </v-row>

      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
import PokeContainers from './pokes/PokeContainers';
import AddContainer from './pokes/AddContainer';
import BackIcon from '@/assets/images/layout/components/table/back.svg'
import SendRequestIcon from '@/assets/images/layout/components/table/sendingrequest.svg'
  export default {
    components: {
    PokeContainers,
    AddContainer
  },
    name: 'WelcomePoke',
    computed: {        
    },
    methods: {
      goToContainers() {                
          this.$store.dispatch('pokesCRUD/showContainers', !this.$store.state.pokesCRUD.showContainer)  
      },
      hideContainers() {
        this.$store.dispatch('pokesCRUD/showContainers', false)  
      }
    },
    mounted () {
      this.$store.dispatch('pokesCRUD/getContainers')
    },
    data: () => ({   
      SendRequestIcon,
      BackIcon   
    }),
  }
</script>
