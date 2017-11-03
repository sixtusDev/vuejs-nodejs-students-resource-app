<template>
  <v-container>
    <v-layout row wrap>
      <v-flex sm12>
        <h5 style="text-align: center">Add New Student Resource</h5>
        <form>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-select
              label="Resource Category"
              v-model="category"
              :items="items"
              :rules="[v => !!v || 'Category is required']"
              required
            ></v-select>
            <v-text-field
              label="Resource Title"
              v-model="title"
              :rules="titleRules"
              required
            ></v-text-field>
            <v-text-field
              label="Image URL"
              v-model="imageUrl"
            ></v-text-field>
            <v-text-field
              label="Body"
              v-model="body"
              :rules="bodyRules"
              multi-line
              required
            ></v-text-field>
            <v-btn
              @click="submit"
              :disabled="!valid"
            >
              submit
            </v-btn>
          </v-form>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        category: null,
        title: '',
        imageUrl: '',
        body: '',
        valid: true,
        titleRules: [
          (v) => !!v || 'Title is required'
        ],
        bodyRules: [
          (v) => !!v || 'Body is required'
        ],
        items: [
          'Course Registration and Grades',
          'Student Services',
          'Health and Safety',
          'Scholarships and Grants',
          'Costs and Financial Aid',
          'Technology Tools',
          'Academic Tools and Support'
        ]
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          const newResource = {
            category: this.category,
            title: this.title,
            imageUrl: this.imageUrl,
            body: this.body,
            date: new Date()
          }
          this.$http.post('https://tranquil-inlet-62239.herokuapp.com', newResource).then(response => {
            this.$router.push({path: '/'})
          }).catch(err => {
            console.log(err)
          })
        }
      }
    }
  }
</script>
