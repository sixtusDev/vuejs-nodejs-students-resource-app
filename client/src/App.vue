<template>
  <v-app light>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-content>Home</v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/resources/add">
          <v-list-tile-content>Add Resource</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <router-link to="/" tag="span" style="cursor: pointer"><v-toolbar-title>StudentsResource</v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat to="/">
          Home
        </v-btn>
        <v-btn flat to="/resources/add">
          Add Resource
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
