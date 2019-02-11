<template>
    <section class="address-card">
        <h3 class="address-card__title">
            Global Message Services {{ data.country }} LLC
        </h3>
        <ul class="address-card__list">
            <li>{{ data.address }}</li>
            <li>{{ data.index }}</li>
            <li>{{ data.country }}</li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "AddressCard",
        props: {
            data: {
                type: Object,
                default: () => ({
                    country: '',
                    address: '',
                    index: ''
                }),
            }
        },
    }
</script>

<style scoped lang="scss">
    .address-card{
        &__title{
            font-weight: normal;
            margin-bottom: 26px;
        }
        &__list{
            list-style-type: none;
            li{
                line-height: 28px;
            }
        }
    }
</style>