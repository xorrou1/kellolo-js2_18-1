// let names = ['HTML5 & CSS3', 'JavaScript base', 'JavaScript advanced', 'PHP', 'React'];
// let prices = [100, 120, 130, 50, 150];
// let ids = [1, 2, 3, 4, 5];
// let imgs = ['http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150',]

// let createItem = index => ({
//     product_name: names[index],
//     price: prices[index],
//     id_product: ids[index],
//     img: imgs[index]
// });

// let fillCatalog = () => {
//     // ids.forEach((el, index) => {
//     //     catalog.items.push(createItem(index));
//     // }); 

//     return ids.map((el, index) => createItem(index))
// };

function get(url) {
    return new Promise((res, rej) => {
        let xhr = new XMLHttpRequest(); // if(){} else {} проверка на IE (ActiveXObject)
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) { // 4 - зав запроса без ошибки
                if(xhr.status == 200) { // 200 - ответ сервера о том, что он все сделал
                    res(JSON.parse(xhr.responseText));
                }
                else {
                    rej('server Error');
                }
            }
        };
        xhr.send(); 
    })
}


let items;
let url = 'https://raw.githubusercontent.com/maximle/online-store-api/master/responses/catalogData2.json'


// get(url)
//     .then(data => {
//         items = data;
//     })
//     .catch(err => {
//         throw new Error(err);
//     })




class Basket {
    constructor() {
        // this.items = [];
        this.show = false;
        this.container = '.basket-items';

    }

    _init() {
        this.items = [];
        this._render();
        this._eventHandler();
    }

    _eventHandler() {
        document.querySelector(this.container).addEventListener('click', (e) => {
            if (e.target.name == 'remove') {
                this.remove(e.target.dataset); //todo
            }
        });

        document.querySelector('.btn-basket').addEventListener('click', () => {
            this.show = !this.show;
            document.querySelector('.basket-block').classList.toggle('invisible');
        })
    }

    _render() {
        let htmlStr = '';
        this.items.forEach (item => {
            htmlStr += `<div class="basket-item">
                            <img src="http://placehold.it/100x80" alt="${item.product_name}">
                            <div class="product-desc">
                                <p class="product-title">${item.product_name}</p>
                                <p class="product-amount">${item.amount}</p>
                                <p class="product-single-price">${item.price}</p>
                            </div>
                            <div class="right-block">
                                <p class="product-price">${item.price * item.amount}</p>
                                <button class="del-btn" name="remove" data-id="${item.id_product}">&times;</button>
                            </div>
                        </div>`
        });
        document.querySelector(this.container).innerHTML = htmlStr; 
    }

    add(item) {
        let find = this.items.find(el => el.id_product == item.id);

        if (!find) {
            this.items.push(Object.assign({}, items[+item.id - 1], {amount: 1}));
        } else {
            find.amount++;
        }
        this._render();
    }

    remove(item) {
        let find = this.items.find(el => el.id_product == item.id);

        if (find.amount == 1) {
            this.items.splice(this.items.indexOf(find), 1);
        } else {
            find.amount--;
        }
        this._render();
    }

}

class Catalog {
    constructor() {
        
        this.container = '.catalog-items';
        this.basket = basket;
        
    }
    
    _init() {
        this.items = items;
        this._render();
        this._eventHandler();
    }

    _eventHandler() {
        document.querySelector(this.container).addEventListener('click', (e) => {
            if (e.target.name == 'buy') {
                this.basket.add(e.target.dataset);
            }
        });
    }

    _render() {
        let htmlStr = '';
        this.items.forEach (item => {
            htmlStr += `<div class="catalog-item">
                        <img src="${item.img}" alt="${item.product_name}">
                        <div class="desc">
                            <h3>${item.product_name}</h3>
                            <p>${item.price} $</p>
                            <button 
                                class="buy-btn" 
                                name="buy"
                                data-id="${item.id_product}"
                            >Buy</button>
                        </div>
                    </div>`
        })
        document.querySelector(this.container).innerHTML = htmlStr;      
    }
    
}

let basket = new Basket();
let catalog = new Catalog();

get(url)
    .then(data => {
        items = data;
        console.log(items);
        catalog._init();
        basket._init();
    })
    .catch(err => {
        throw new Error(err);
    })
export default () => {
    
}
// let basket = {
//     items: [],
//     show: false,
//     container: '.basket-items',
//     init() {
//         this._render();
//         this._eventHandler();
//     },
//     _eventHandler() {
//         document.querySelector(this.container).addEventListener('click', (e) => {
//             if (e.target.name == 'remove') {
//                 this.remove(e.target.dataset); //todo
//             }
//         });

//         document.querySelector('.btn-basket').addEventListener('click', () => {
//             this.show = !this.show;
//             document.querySelector('.basket-block').classList.toggle('invisible');
//         })
//     },
//     _render() {
//         let htmlStr = '';
//         this.items.forEach (item => {
//             htmlStr += `<div class="basket-item">
//                             <img src="http://placehold.it/100x80" alt="${item.product_name}">
//                             <div class="product-desc">
//                                 <p class="product-title">${item.product_name}</p>
//                                 <p class="product-amount">${item.amount}</p>
//                                 <p class="product-single-price">${item.price}</p>
//                             </div>
//                             <div class="right-block">
//                                 <p class="product-price">${item.price * item.amount}</p>
//                                 <button class="del-btn" name="remove" data-id="${item.id_product}">&times;</button>
//                             </div>
//                         </div>`
//         });
//         document.querySelector(this.container).innerHTML = htmlStr; 
//     },
//     add(item) {
//         let find = this.items.find(el => el.id_product == item.id);

//         if (!find) {
//             this.items.push(Object.assign({}, createItem(+item.id - 1), {amount: 1}));
//         } else {
//             find.amount++;
//         }
//         this._render();
//     },
//     remove(item) {
//         let find = this.items.find(el => el.id_product == item.id);

//         if (find.amount == 1) {
//             this.items.splice(this.items.indexOf(find), 1);
//         } else {
//             find.amount--;
//         }
//         this._render();
//     }
// }

// let catalog = {
//     items: [],
//     container: '.catalog-items',
//     basket: basket,

//     init() {
//         fillCatalog();
//         this._render();
//         this._eventHandler();
//     },
//     _eventHandler() {
//         document.querySelector(this.container).addEventListener('click', (e) => {
//             if (e.target.name == 'buy') {
//                 this.basket.add(e.target.dataset);
//             }
//         });
//     },
    // _render() {
    //     let htmlStr = '';
    //     this.items.forEach (item => {
    //         htmlStr += `<div class="catalog-item">
    //                     <img src="${item.img}" alt="${item.product_name}">
    //                     <div class="desc">
    //                         <h3>${item.product_name}</h3>
    //                         <p>${item.price} $</p>
    //                         <button 
    //                             class="buy-btn" 
    //                             name="buy"
    //                             data-id="${item.id_product}"
    //                         >Buy</button>
    //                     </div>
    //                 </div>`
    //     })
    //     document.querySelector(this.container).innerHTML = htmlStr;      
    // }
// }

// export default () => {
//     basket.init();
//     catalog.init();
// }

