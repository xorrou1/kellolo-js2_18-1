<template>
    <div>
        <template v-if="itemType == 'catalog'">
            <div class="catalog-item">
                <img src="http://placehold.it/300x200" alt="item.product_name">
                <div class="desc">
                    <h3>{{item.product_name}}</h3>
                    <p>{{item.price}} $</p>
                    <button 
                        class="buy-btn" 
                        name="buy"
                        @click="this.$parent.$parent.refs.basket.add(item)"
                    >Buy</button>
                </div>
            </div>
        </template>

        <template v-else-if="itemType == 'basket'">
            <div class="basket-item">
                <img src="http://placehold.it/300x200" alt="item.product_name">
                <div class="desc">
                    <h3>{{item.product_name}}</h3>
                    <p>{{item.price}} $</p>
                    <button
                            class="buy-btn"
                            name="buy"
                            @click="this.$parent.$parent.refs.basket.remove(item)"
                    > Remove</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        itemType: {
            type: String
        },
        item: {
            type: Object
        }
    }
}

//this.$parent.$parent.refs.kolya.add(item) //не комильфо, но...
</script>

<style>

</style>