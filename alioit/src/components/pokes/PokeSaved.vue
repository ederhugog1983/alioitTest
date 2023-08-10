<template>
  <section>
    <v-row>
      <v-col v-if="$store.state.pokesCRUD.showPokesSavedOnContainer" cols=12 style="border-radius:60px;max-width: 90%;padding: 2%;margin: 3%; background:linear-gradient(90deg, rgba(86, 86, 86, 0.7) 0%, rgba(86, 86, 86, 0.7) 40%, rgba(86, 86, 86, 0.7) 80%)">
        <h1 style="font-size:24px">Container: {{$store.state.pokesCRUD.containerSelected.name}}</h1>
        <h3 style="font-size:20px">Pokes Saved on MongoDB</h3>
      </v-col>
    </v-row>
    <v-row>
    <v-col class="mb-4" cols=6 v-if="$store.state.pokesCRUD.showPokesSavedOnContainer">
        <v-btn style="border: solid 1px white" class="" @click="goToContainers()">
          <img  v-bind="attrs" v-on="on"
            :src="BackIcon"
            height="20px"
            width="20px"
            class="mr-2"
            
          /> {{this.$store.state.pokesCRUD.showContainer ? 'Hide ' : 'Go '}}Containers
        </v-btn>
    </v-col> 
    </v-row>    
    <div v-if="$store.state.pokesCRUD.showPokesSavedOnContainer">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="$store.state.pokesCRUD.pokesSavedOnContainer"
        item-key="name"        
        class="elevation-1"
      >
      </v-data-table>
    </div>
  </section>
</template>
<script>
import SendRequestIcon from '@/assets/images/layout/components/table/sendingrequest.svg'
import LoadedPokeIcon from '@/assets/images/layout/components/table/loadedPoke.svg'
import BackIcon from '@/assets/images/layout/components/table/back.svg'
 export default {
    name: 'PokeLoadedApi',    
    methods: {
      async goToContainers() { // trigger service to save on MongoDB the data
        await this.$store.dispatch('pokesCRUD/getContainers')
        this.$store.dispatch('pokesCRUD/showContainers', true)
        this.$store.dispatch('pokesCRUD/setShowSavedPokes', false)
        
      }
    },
    data: () => ({ 
      selected:[],
      SendRequestIcon,
      LoadedPokeIcon,
      BackIcon,
      headers: [          
          { text: 'Name', value: 'name' },
          { text: 'Species Information', value: 'url' }
        ],     
    }),
  }
</script>
