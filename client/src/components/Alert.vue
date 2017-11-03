<template>
  <div>
    <v-alert color="success" icon="info" dismissible v-model="alert">
      {{message}}
    </v-alert>
  </div>
</template>

<script>
  export default {
    props: ['message'],
    data () {
      return {
        alert: true
      }
    }
  }
</script>