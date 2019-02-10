<template>
    <section class="right-column">
        <h2 class="right-column__title">
            Technical support <span class="green-text">24/7</span>
        </h2>
        <v-layout class="right-column__layout" column>
            <div class="right-column__text">
                {{ text }}
            </div>
            <div class="right-column__phone green-text">
                {{ phone }}
            </div>
        </v-layout>
    </section>
</template>

<script>
    export default {
        name: "RightColumn",
        data: function () {
            return {
                text: 'GMS understands that it can be hard to follow all new technologies. ' +
                'We regularly provide for all our clients educational trainings to make your operator`s ' +
                'business earn more and better though our best practices.',
                phone: '+41 41 544 62 06'
            }
        },
    }
</script>

<style scoped lang="scss">
    .right-column{
        &__layout{
            font-size: .85em;
        }
        &__title{
            font-weight: normal;
            margin-bottom: 20px;
        }
        &__text{
            line-height: 22px;
        }
        &__phone{
            margin-top: 14px;
            font-size: 1.8em;
        }
    }
</style>