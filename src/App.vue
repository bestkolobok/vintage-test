<template>
  <v-app>
    <v-content class="main-content">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style>
    .main-content{
        font-family: 'SuisseIntl-Light';
    }
</style>