let names = ['BLONDE', 'MAN', 'SHATEN', 'PEROXIDE', 'PIMP'];
let prices = [100, 120, 130, 50, 150];
let ids = [1, 2, 3, 4, 5];
let imgs = ['https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-2.png', 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-3.png', 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-4.png', 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-5.png', 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-11.png' ];
let imgSmall = ['https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-2small.png', 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-3small.png', 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-4small.png', 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-5small.png', 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/public/img/product-11small.png']

let createItem = index => ({
    product_name: names[index],
    price: prices[index],
    id_product: ids[index],
    img: imgs[index],
    img_sm: imgSmall[index]
});

let fillCatalog = () => {

    return ids.map((el, index) => createItem(index))
};


class Basket {
    constructor() {
        this.items = [];
        this.show = false;
        this.container = '.basket-items';
        this._init();

    }

    _init() {
        this._render(),
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
        this.items.forEach(item => {
            htmlStr += `<div class="basket-item">
                            <img src="${item.img_sm}" alt="${item.product_name}">
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
            this.items.push(Object.assign({}, createItem(+item.id - 1), {
                amount: 1
            }));
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
    constructor(basket) {
        this.items = [];
        this.container = '.catalog-items'
        this._init();
        this.basket = basket;
    }

    _init() {
        this.items = fillCatalog();
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
            this.items.forEach(item => {
                htmlStr += `<div class="catalog-item">
                        <img src="${item.img}" alt="${item.product_name}">
                        <div class="desc">
                            <h3>${item.product_name}</h3>
                            <p>${item.price} $ per hour</p>
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

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
}

