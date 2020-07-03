<template>
    <div class="basket-block">
        <div class="basket-items" v-show="visibility">
            <item
                    itemType="basket"
                    v-for="item of items"
                    :item="item"
                    :key="item.id_product"
            />
        </div>
    </div>
</template>

<script>
import item from './Item.vue';

export default {
    components: { item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/gavrilovem/catalogData/master/getBasket.json'
        }
    }
    mounted() {
        this.$parent.get(this.url).then(d => {
            this.items = d;
        })
    }
}
</script>

<style>

</style>