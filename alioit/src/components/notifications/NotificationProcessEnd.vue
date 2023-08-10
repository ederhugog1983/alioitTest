<template>
<v-snackbar
      v-model="$store.state.notificationPush.alert"
      :timeout="timeout"
    >
      The pokes loaded on {{$store.state.notificationPush.container}} is done!!!
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="$store.state.notificationPush.alert = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> 
</template>
<script>
  export default {
    data: () => ({     
      timeout: 4000,
    }),
  }
</script>
