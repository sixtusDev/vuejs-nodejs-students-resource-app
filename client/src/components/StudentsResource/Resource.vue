<template>
  <v-container>
  <v-layout>
    <v-flex xs12>
      <app-alert v-if="alert" :message="alert"></app-alert>
    </v-flex>
  </v-layout>
    <v-layout row wrap class="mt-0">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <app-edit-resource :resource="resource"></app-edit-resource>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn @click="deleteResource" class="error">Delete</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap >
          <v-flex xs12>
              <v-card>
                  <v-card-title>
                    <h3 class="primary--text">{{resource.category}}</h3>
                  </v-card-title>
                  <v-card-media v-if="resource.imageUrl" :src="resource.imageUrl" height="400px"></v-card-media>
                  <v-card-text>
                    <h4 class="info--text">{{resource.title}}</h4>
                    <div>{{resource.body}}</div>
                  </v-card-text>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    data () {
      return {
        resource: '',
        alert: ''
      }
    },
    methods: {
      fetchResource () {
        this.$http.get('https://tranquil-inlet-62239.herokuapp.com/' + this.id).then(response => {
          this.resource = response.body
        }).catch(err => {
          console.log(err)
        })
      },
      deleteResource () {
        var confirmDelete = confirm('Are you sure you want to delete this resource?')
        if (confirmDelete) {
          this.$http.delete('https://tranquil-inlet-62239.herokuapp.com/' + this.id).then(response => {
            this.$router.push({path: '/'})
          }).then(err => {
            console.log(err)
          })
        }
      }
    },
    created () {
      if (this.$route.query.alert) {
        this.alert = this.$route.query.alert
      }
      this.fetchResource(this.id)
    },
    updated () {
      this.fetchResource(this.id)
    }
  }
</script>

<style scoped>
</style>

