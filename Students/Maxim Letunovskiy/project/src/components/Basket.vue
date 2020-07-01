<template>
    <div class="basket-block">
        <div class="basket-items">
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
import item from './Item.vue'
export default {
    components: { item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/gavrilovem/catalogData/master/getBasket.json'
        }
    },
    mounted() {
        this.$parent.get(this.url).then(d => {
            this.items = d.contents;
        })
    },
    methods: {
        add(item) {
            let find = this.items.findIndex(el => el.id_product == item.id_product);
            if (find > -1){
                this.items[find].quantity++
                console.log('asd');
                console.log(item);
                console.log(this.items);
            } else {
                let itemNew = { id_product: item.id_product, product_name: item.product_name, price: +item.price, quantity: 1 };
                this.items.push(itemNew);
                console.log(item);
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                this.items.splice(this.items.indexOf(item), 1);
                console.log(item);
            }
        }
    }
}
</script>

<style>

</style>