<template>
  <section>
    <div v-if="$store.state.pokesCRUD.showContainer">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="$store.state.pokesCRUD.containers"
        item-key="name"        
        class="elevation-1"
      > 
      <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip bottom>
            <template  v-slot:activator="{ on, attrs }">
              <v-btn class="" plain icon @click="goToLoadPokes(item)">
                <img  v-bind="attrs" v-on="on"
                  :src="SendRequestIcon"
                  height="20px"
                  width="20px"
                  class="mr-2"
                  
                />
              </v-btn>
          </template>
          <span>Load pokes</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template  v-slot:activator="{ on, attrs }">
              <v-btn class="" plain icon @click="goToLoadedPokes(item)">
                <img  v-bind="attrs" v-on="on"
                  :src="PokeLoadedIcon"
                  height="20px"
                  width="20px"
                  class="mr-2"
                  
                />
              </v-btn>
          </template>
          <span>See Pokes Loaded</span>
        </v-tooltip>
      </template> 
      </v-data-table>
    </div>
    <div>
      <PokeLoadedApi/>
      <PokeSaved/>
    </div>
    
  </section>
</template>
<script>
import PokeLoadedApi from './PokeLoadedApi';
import PokeSaved from './PokeSaved';
import SendRequestIcon from '@/assets/images/layout/components/table/sendingrequest.svg'
import PokeLoadedIcon from '@/assets/images/layout/components/table/pokesLoaded.svg'

 export default {
    name: 'PokeConteiners',
    components: {PokeLoadedApi, PokeSaved},
    computed: {
      containers () {          
        return this.$store.state.pokesCRUD.containers
      }
    },
    methods: {
      async goToLoadPokes(container) {
        this.$store.state.pokesCRUD.containerSelected = container
        console.log(container)
        await this.$store.dispatch('pokesCRUD/getPokesAPI')
        
      },
      async goToLoadedPokes(container) {
        this.$store.state.pokesCRUD.containerSelected = container
        await this.$store.dispatch('pokesCRUD/getContainerPokes', this.$store.state.pokesCRUD.containerSelected._id)
      }
    },
    data: () => ({ 
      selected:[],
      SendRequestIcon,
      PokeLoadedIcon,
      headers: [
          {
            text: '_id#',
            align: 'start',
            sortable: false,
            value: '_id',
          },
          { text: 'Name Container', value: 'name' },
          { text: 'Status Process', value: 'status' },
          { text: 'Created', value: 'date' },
          { text: 'Action', value: 'actions' },

        ],     
    }),
  }
</script>
