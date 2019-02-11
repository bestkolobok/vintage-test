<template>
    <section class="left-column">
        <h2 class="left-column__title">
            <span class="green-text">GMS</span> Headquarters
        </h2>
        <v-layout class="left-column__layout" wrap>
            <v-flex
                    class="left-column__left-block"
                    xs12 sm6
            >
                <div class="left-column__left-block-text">
                    <ul class="left-column__left-block-list">
                        <li
                                v-for="item in leftBlockList"
                                :key="item.id"
                        >
                            <span> {{ item }} </span>
                        </li>
                    </ul>
                </div>
                <div class="left-column__left-block-phone green-text">
                    <a :href="'tel:' + phone">
                        {{ phone | FormatPhone}}
                    </a>
                </div>
            </v-flex>
            <v-flex
                    class="left-column__right-block"
                    :class="{'left-column__right-block--mobile': $vuetify.breakpoint.xsOnly}"
                    xs12 sm6
            >
                <v-layout
                    v-for="item in rightBlockLines"
                    :key="item.id"
                    class="left-column__right-block-text-line"
                    wrap
                >
                    <v-flex class="left-column__right-block-text-line-title" xs12>
                        {{ item.title }}
                    </v-flex>
                    <v-flex class="left-column__right-block-text-line-text green-text" xs12>
                        <a :href="item.link">
                            {{ item.text }}
                        </a>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </section>
</template>

<script>
    export default {
        name: "LeftColumn",
        data: function () {
            return {
                phone: '+41415446200',
                rightBlockLines: [
                    {title: 'Email', text: 'info@gms-worldwide.com', link: 'mailto:info@gms-worldwide.com'},
                    {title: 'Send message', text: 'Viber us', link: 'viber://chat?number=+41415446200'},
                    {title: 'Send form', text: 'Contact us', link: '#feedback'}
                ],
                leftBlockList: [
                    'Global Message Services Ukraine LLC',
                    'Bundesstrasse 5 | 3rd Floor',
                    '6300 Zug',
                    'Switzerland'
                ]
            }
        },
    }
</script>

<style scoped lang="scss">
    .left-column{
        &__title{
            font-weight: normal;
            margin-bottom: 20px;
        }
        &__layout{
            font-size: .85em;
        }
        &__left-block-list{
            list-style-type: none;
            span{
                line-height: 22px;
            }
        }
        &__left-block-phone{
            margin-top: 14px;
            font-size: 1.8em;
            cursor: pointer;
        }
        &__right-block{
            &--mobile{
                margin-top: 16px;
            }
        }
        &__right-block-text-line-title{
            line-height: 22px;
        }
        &__right-block-text-line-text{
            line-height: 22px;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
</style>