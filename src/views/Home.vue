<template>
  <main class="home">
    <div class="wrapper">
      <a-contacts />
      <a-map />
      <a-feedback />
    </div>
  </main>
</template>

<script>
  import AContacts from '../components/Contacts'
  import AMap from '../components/Map'
  import AFeedback from '../components/Feedback'

  export default {
      name: 'Home',
      components: {
          AContacts,
          AMap,
          AFeedback
      }
  }
</script>

<style scoped lang="scss">
  .home{
    background-color: $c--general-background;
  }
</style>
