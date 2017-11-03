<template>
  <v-container>
    <v-layout>
    <v-flex xs12>
      <app-alert v-if="alert" :message="alert"></app-alert>
      <h4 style="text-align: center" class="mb-5">Students Resource</h4>
      <v-card v-for="resource in studentsResources" :key="resource._id" class="mb-4">
        <v-card-media v-if="resource.imageUrl" :src="resource.imageUrl" height="400px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h4 class="headline mb-0 cyan--text">{{resource.category}}</h4>
            <h5 class="primary--text mt-2">{{ resource.title }}</h5>
            <div>{{resource.body | snippet}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" :to="/resources/ + resource._id">View</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      resources: [],
      alert: ''
    }
  },
  computed: {
    studentsResources () {
      return this.resources.sort((resourceA, resourceB) => {
        return resourceB.date > resourceA.date
      })
    }
  },
  methods: {
    fetchResource () {
      this.$http.get('http://localhost:3000/api/studentsresource').then(response => {
        this.resources = response.body
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
    this.fetchResource()
  },
  updated () {
    this.fetchResource()
  }
}
</script>
