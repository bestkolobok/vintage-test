<template>
    <nav
            class="map-menu"
            :class="{'map-menu--mobile': $vuetify.breakpoint.xsOnly}"
    >
            <span
                    v-for="(item, i) in options"
                    :key="i"
                    @click="onInput(item.value)"
                    class="map-menu__item"
                    :class="{'map-menu__item--active': item.value === value, 'map-menu__item--last': +i === options.length - 1}"
            >
                {{ item.text }}
            </span>
    </nav>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            options: {
                type: Array,
                default: () => ([]),
            },
            value: {
                type: String,
                default: '',
            },
        },
        methods: {
            onInput(val){
                this.$emit('input', val)
            }
        }
    }
</script>

<style scoped lang="scss">
    .map-menu{
        display: flex;
        &--mobile{
            flex-direction: column;
        }
        &__item{
            margin-right: 20px;
            color: white;
            font-size: 0.9em;
            cursor: pointer;
            text-transform: uppercase;
            line-height: 28px;
            transition: color 0.4s ease-out 0.1s;
            &--active{
                color: $c--general-green;
            }
            &--last{
                margin-right: 0;
            }
        }
    }
</style>