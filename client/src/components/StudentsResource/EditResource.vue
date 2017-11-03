<template>
  <v-dialog max-width="700px" persistent v-model="editDialog">
      <v-btn slot="activator" class="warning">
        Edit
      </v-btn>
      <v-card>
          <v-container>
            <v-layout row>
              <v-flex xs12>
                <v-card-title>Edit Resource</v-card-title>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-text>
                  <v-select label="Resource Category" v-model="resource.category" :items="items" required></v-select>
                  <v-text-field name="title" label="title" id="title" v-model="resource.title" required></v-text-field>
                  <v-text-field name="imageUrl" label="Image Url" id="imageUrl" v-model="resource.imageUrl" required></v-text-field>
                  <v-text-field name="body" label="body" id="body" v-model="resource.body" multi-line required></v-text-field>
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-actions>
                  <v-btn flat class="blue--text darken-1" @click="editDialog = false">Close</v-btn>
                  <v-btn flat class="blue--text darken-1" @click="onSaveChange">Save</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          'Course Registration and Grades',
          'Student Services',
          'Health and Safety',
          'Scholarships and Grants',
          'Costs and Financial Aid',
          'Technology Tools',
          'Academic Tools and Support'
        ],
        editDialog: false,
        resource: {}
      }
    },
    methods: {
      fetchResource () {
        this.$http.get('http://localhost:3000/api/studentsresource/' + this.$route.params.id).then(response => {
          this.resource = response.body
        }).catch(err => {
          console.log(err)
        })
      },
      onSaveChange: function () {
        if (this.resource.title.trim() === '' || this.resource.body.trim() === '' || this.resource.category.trim() === '') {
          return false
        }
        const updateResource = {
          category: this.resource.category,
          title: this.resource.title,
          imageUrl: this.resource.imageUrl,
          body: this.resource.body,
          date: new Date()
        }
        this.$http.put('http://localhost:3000/api/studentsresource/' + this.$route.params.id, updateResource).then(response => {
          this.$router.push({path: '/resources/' + this.$route.params.id})
        }).catch(err => {
          console.log(err)
        })
        this.editDialog = false
      }
    },
    created () {
      this.fetchResource(this.$route.params.id)
    }
  }
</script>
