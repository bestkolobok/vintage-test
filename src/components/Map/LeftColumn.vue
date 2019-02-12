<template>
    <section
            class="map-left-column"
            :class="{'map-left-column--mobile': $vuetify.breakpoint.mdAndDown}"
    >
        <h2 class="map-left-column__title">
            Our Offices
        </h2>
        <v-layout class="map-left-column__menu-area">
            <map-menu
                    :options="navigationList"
                    v-model="menuValue"
            />
        </v-layout>
        <div class="map-left-column__card-wrapper">
            <div
                    class="map-left-column__card-items-area"
                    :style="{left: position+'%'}"
            >
                <address-card
                        v-for="item in navigationList"
                        :key="item.id"
                        :data="{
                        country: item.value,
                        address: addressList[item.value].address,
                        index: addressList[item.value].index
                    }"
                        class="map-left-column__card-item"
                />
            </div>

        </div>
    </section>

</template>

<script>
    import MapMenu from './Menu';
    import AddressCard from './AddressCard';

    export default {
        name: "LeftColumn",
        components: {
            MapMenu,
            AddressCard
        },
        data: function () {
            return {
                navigationList: [
                    {text: 'Kyiv', value: 'Ukraine'},
                    {text: 'New York', value: 'USA'},
                    {text: 'Guangzhou', value: 'China'},
                    {text: 'Barcelona', value: 'Spain'},
                ],
                addressList: {
                    Ukraine: {address: 'Kyiv, Stepan Bandera, 33', index: '02066'},
                    USA: {address: 'New York, 27th Street, 542 W', index: '10001'},
                    China: {address: 'Guangzhou, Qiyi Road, 2', index: '54206'},
                    Spain: {address: 'Barcelona, Enric Granados, 48, ', index: '08008'},
                },
                menuSelected: 'Ukraine'
            }
        },
        computed: {
            position(){
                return -101 * this.navigationList.findIndex(item => this.menuValue === item.value)
            },
            menuValue: {
                get(){
                    return this.menuSelected
                },
                set(val){
                    this.menuSelected = val;
                    const city = this.navigationList.find(item => item.value === val).text;
                    this.$emit('change-city', city)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .map-left-column{
        padding: 70px 50px 90px;
        color: white;
        &--mobile{
            padding: 70px 25px 10px;
        }
        &__title{
            font-weight: normal;
            margin-bottom: 42px;
        }
        &__menu-area{
            margin-bottom: 60px;
        }
        &__card-wrapper{
            position: relative;
            height: 200px;
            overflow: hidden;
            max-width: 100%;
        }
        &__card-items-area{
            position: absolute;
            left: 0;
            display: flex;
            flex-wrap: nowrap;
            min-width: 404%;
            transition: all 0.4s ease-out 0.1s;
        }
        &__card-item{
            min-width: 25%;
        }
    }
</style>