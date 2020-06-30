class List {
    constructor(url, container, basket) {
        this.url = 'https://raw.githubusercontent.com/gavrilovem/catalogData/master' + url;
        this.container = container;
        this.items = [];
        this._init(basket);
    }

    _init(basket = false) {
        this._get(this.url)
            .then(data => {
                this.items = basket ? data.contents : data;
                this._render();
                this._handleEvents();
            })
    }

    _get(url) {
        return fetch(url).then(data => data.json());
    }
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new connect[this.constructor.name](item).render();
        });
        document.querySelector(this.container).innerHTML = htmlStr;
    }

    _handleEvents() {
        return ''
    }
}

class Item {
    constructor(item) {
        this.item = item;
    }

    render() {
        return `<div class="catalog-item">
                    <img src="${this.item.img}" alt="${this.item.product_name}">
                    <div class="desc">
                        <h3>${this.item.product_name}</h3>
                        <p>${this.item.price} $</p>
                        <button 
                            class="buy-btn" 
                            name="buy"
                            data-name="${this.item.product_name}"
                            data-price="${this.item.price}"
                            data-id="${this.item.id_product}"
                        >Buy</button>
                    </div>
                </div>`
    }
}

class Catalog extends List {
    constructor(basket, url ='/catalogData.json', container = '.catalog-items') {
        super(url, container);
        this.basket = basket;
    }

    _handleEvents() {
        document.querySelector(this.container).addEventListener('click', (event) => {
            if (event.target.name == 'buy') {
                this.basket.add(event.target.dataset)
            }
        })
    }
}

class Basket extends List {
    constructor(url ='/getBasket.json', container = '.basket-items', basket = true) {
        super(url, container, basket);
    }

    _handleEvents() {
        document.querySelector(this.container).addEventListener('click', (event) => {
            if (event.target.name == 'remove') {
                this.remove(event.target.dataset.id)
            }
        })

        document.querySelector('.btn-basket').addEventListener('click', (event) => {
            document.querySelector('.basket-block').classList.toggle('invisible')
        })
    }

    add(item) {
        let find = this.items.find(el => el.id_product == item.id);
        if (find) {
            find.quantity++;
            this._render();
        } else {
            let itemNew = { id_product: item.id, product_name: item.name, price: item.price, quantity: 1};
            this.items.push(itemNew);
            this._render();
        }
    }

    remove(item) {
        let find = this.items.find(el => el.id_product == item);
        if (find.quantity > 1) {
            find.quantity--;
            this._render();
        } else {
            this.items.splice(this.items.indexOf(find), 1);
            this._render();
        }
    }
}

class CatalogItem extends Item {}

class BasketItem extends Item {
    constructor(item) {
        super(item)
    }

    render() {
        return `<div class="basket-item">
                    <img src="http://placehold.it/100x80" alt="${this.item.product_name}">
                    <div class="product-desc">
                        <p class="product-title">${this.item.product_name}</p>
                        <p class="product-quantity">${this.item.quantity}</p>
                        <p class="product-single-price">${this.item.price}</p>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.item.price * this.item.quantity}</p>
                        <button class="del-btn" name="remove" data-id="${this.item.id_product}">&times;</button>
                    </div>
                </div>`
    }
}

const connect = {
    "Catalog": CatalogItem,
    "Basket": BasketItem
}

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
}