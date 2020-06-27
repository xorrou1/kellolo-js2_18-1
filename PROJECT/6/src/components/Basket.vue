<template>
    <div class="basket-block">
        <div class="basket-items">
            <item itemType="basket"/>            
        </div>
    </div>
</template>

<script>
import item from './Item'
export default {
    components: { item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/gavrilovem/catalogData/master/getBasket.json'
        }
    }
}
</script>

<style>

</style>