<template>
    <article
          class="contacts"
          :class="{'contacts--mobile': $vuetify.breakpoint.xsOnly}"
    >
        <header class="contacts__title">
            <h1>{{ mainTitle }}</h1>
        </header>
        <v-layout class="contacts__body" wrap>
            <v-flex
                    class="contacts__left-column contacts__column"
                    :class="{'contacts__column--column': $vuetify.breakpoint.mdAndDown}"
                    xs12 md6
            >
              <left-column/>
            </v-flex>
            <v-flex
                    class="contacts__right-column contacts__column"
                    :class="{'contacts__column--column': $vuetify.breakpoint.mdAndDown}"
                    xs12 sm6
            >
              <right-column/>
            </v-flex>
        </v-layout>
    </article>
</template>

<script>
  import LeftColumn from './Contacts/LeftColumn';
  import RightColumn from './Contacts/RightColumn';

  export default {
      name: 'Contacts',
      components: {
          LeftColumn,
          RightColumn
      },
      data: function () {
          return {
            mainTitle: 'Contacts',
            leftTitle: 'GMS Headquarters',
            rightTitle: 'Technical support 24/7'
          }
      },
  }
</script>

<style scoped lang="scss">
    .contacts{
      padding: 30px 50px 70px;
      background-color: white;
      &--mobile{
        padding: 30px 26px 50px;
      }
      /deep/.green-text{
        color: $c--general-green;
      }
      &__title{
        h1{
          font-weight: normal;
        }
        margin-bottom: 12px;
      }
      &__left-column{
        padding-right: 10px;
      }
      &__right-column{
        padding-left: 10px;
      }
      &__column{
        &--column{
          padding: 0;
          margin-bottom: 20px;
        }
      }
    }
</style>
