<template>
  <article class="map-place">
      <v-layout class="map-place__body" wrap>
          <v-flex
                  class="map-place__left-column"
                  :class="{'map-place__left-column--column': $vuetify.breakpoint.mdAndDown}"
                  xs12 md6
          >
              <map-left-column
                      @change-city="onTabClick"
              />
          </v-flex>
          <v-flex
                  class="map-place__right-column"
                  xs12 md6
          >
              <address-map
                      :markers="points"
                      :value="currentPoint"
              />
          </v-flex>
      </v-layout>
  </article>
</template>

<script>
  import MapLeftColumn from './Map/LeftColumn';
  import AddressMap from './Map/AddressMap';
  export default {
      name: 'Map',
      components: {
          MapLeftColumn,
          AddressMap
      },
      data: function () {
          return {
              selectedCity: 'Kyiv',
              points: [
                  {city: 'Kyiv', position:{lat:50.487945, lng:30.519251}},
                  {city: 'New York', position:{lat:40.691978, lng:-73.986764}},
                  {city: 'Guangzhou', position:{lat:23.127783, lng:113.261771}},
                  {city: 'Barcelona', position:{lat:41.393110, lng:2.173936}},
              ],
              currentPoint: {lat:50.487945, lng:30.519251}
          }
      },
      methods: {
          onTabClick(city){
              this.currentPoint = this.points.find(item => item.city === city).position
          }
      }
  }
</script>

<style scoped lang="scss">
    .map-place{
        /*min-height: 500px;*/

    }
</style>
