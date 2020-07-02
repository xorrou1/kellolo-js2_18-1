let app = new Vue({
    el: '#app', 
    data: {
        basketItems: [], // массив для корзины
        items: [], // массив для каталога
        url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
        basket: false
    },
    methods: {
        
        add(item) {
            let find = this.basketItems.find(el => el.id_product == item.id_product); // либо ссылка на объект с товаром, либо false если ничего не найдет
            if (find) {
                find.quantity++;
            } else {
                let itemNew = {
                    id_product: item.id_product,
                    product_name: item.product_name,
                    price: +item.price,
                    quantity: 1
                }
                this.basketItems.push(itemNew);
            }
        },

        remove(item) {
            if (item.quantity != 1) {
                item.quantity--;
            } else {
                this.basketItems.splice(this.basketItems.indexOf(item), 1);
            }
        }
    },
    mounted() {
        fetch(this.url)
            .then(d => d.json())
            .then(items => {
                this.items = items
            })
    }

});


/*
почему то при запуске всегда появляется ошибка:
Uncaught TypeError: _components_main_js__WEBPACK_IMPORTED_MODULE_2___default(...) is not a function
    at eval (index.js:13)
    at Module../src/index.js (bundle.js:472)
    at __webpack_require__ (bundle.js:20)
    at eval (webpack:///multi_(:3000/webpack)-dev-server/client?:2:18)
    at Object.0 (bundle.js:505)
    at __webpack_require__ (bundle.js:20)
    at bundle.js:84
    at bundle.js:87

причем даже с ней все работает нормально, но откуда она и с чем связана я не пойму
*/