class Basket {
    constructor() {
        this.items = [];
        this.show = false;
        this.container = '.basket-items';
        this._init();
    }

    _init() {
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
        this.items.forEach(item => {
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
        this.container = '.catalog-items';
        this.url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
        this.basket = basket;
        this._init();
    }

    _init() {
        this.fetchGoods(this.url)
            .then(data => {  this.items = data })
            .finally(() => { this._render() })
        this._eventHandler();
    }

    // изначально пробовал сделать объявление функции в самом верху кода и ее вызов в _init, 
    // но почему то дальше "1" xhr.readyState не проходит. Хотя объекты вроде как приходят, но рендера нет.
    // в итоге сделал по вашему варианту из начала 4го урока
    // _fetchGoods() {
    //     get(this.url)
    //         .then(data => {
    //             this.items = data;
    //         })
    //         .catch(err => {
    //             throw new Error(err);
    //         })
    //         .finaly(() => { this._render(); }) 
    // }

    fetchGoods(url) {
        return new Promise((res, rej) => {
            let xhr = new XMLHttpRequest(); 
            xhr.open('GET', url, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) { // 200 - ответ сервера о том, что он все сделал
                        res(JSON.parse(xhr.responseText));
                    } else {
                        rej('server Error');
                    }
                }
            };
            xhr.send();
        })
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
                            <h3>${item.product_name} test</h3>
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

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
}