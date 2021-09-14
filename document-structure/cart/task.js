class Product {
    constructor(element, cart) {
        
        this.fromCart = cart.container;
        this.inCart = false;
        
        this.id = element.id;
        this.quantity = parseInt(element.querySelector('.product__quantity-value').textContent);

        this.addBtn = element.querySelector('.product__add');
        this.incBtn = element.querySelector('.product__quantity-control_inc');
        this.decBtn = element.querySelector('.product__quantity-control_dec');
        this.qtyDisp = element.querySelector('.product__quantity-value');

        this.imageLink = element.querySelector('.product__image').getAttribute('src');
        console.log(this.imageLink);
    }

    //Методы работы с корзиной: добавление(создание), удаление, обновление
    addToChart() {
        if (!this.cartProduct) {
            this.cartProduct = document.createElement('div');
            this.cartProduct.className = "cart__product";
            this.cartProduct.dataset.id = "1";

            this.cartImage = document.createElement('img');
            this.cartImage.className = "cart__product-image";
            this.cartImage.setAttribute('src', this.imageLink);
            
            this.cartCount = document.createElement('div');
            this.cartCount.className = "cart__product-count";
            
            this.cartRemoveBtn = document.createElement('a');
            this.cartRemoveBtn.innerHTML = '&times';
            this.cartRemoveBtn.className = 'product__remove';

            this.cartRemoveBtn.addEventListener('click', (e) => {
                //console.log("rmv BTN clicked");
                this.removeFromCart();
            });

            this.cartProduct.appendChild(this.cartImage);
            this.cartProduct.appendChild(this.cartCount);
            this.cartProduct.appendChild(this.cartRemoveBtn);            
        } else {
            
        }
        this.cartCount.textContent = this.quantity + "";
        this.fromCart.appendChild(this.cartProduct);
    }
    removeFromCart() {
        this.inCart = false;
        this.cartProduct.remove();
    }
    updateInCart() {
        if (this.inCart) {
            this.cartCount.textContent = this.quantity + "";
        }
    }

    //Обработчики на карточки товаров: добавление, плюс и минус
    init() {
        this.addBtn.addEventListener('click', (e) => {
            //console.log("add BTN clicked");
            if (!this.inCart) {
                this.inCart = true;
                this.addToChart();
            }
        });

        this.incBtn.addEventListener('click', (e) => {
            //console.log("inc BTN clicked");
            this.quantity += 1; 
            this.qtyDisp.textContent = this.quantity;
            this.updateInCart();
        });

        this.decBtn.addEventListener('click', (e) => {
            //console.log("dec BTN clicked");
            if (this.quantity > 1) {
                this.quantity -= 1;
            }
            this.qtyDisp.textContent = this.quantity;
            this.updateInCart();
        });
    }
}

class Cart {
    //Объект корзины - для порядка и навигации
    constructor(object) {
        this.link = object;
        this.title = object.querySelector('.cart__title');
        this.container = object.querySelector('.cart__products');
        this.products = [];
    }
}

window.onload = () => {

    //Создаём объект корзины
    const cart = new Cart(document.querySelector('.cart'))

    //Создаём объекты товаров и складываем их в корзину
    const listOfProducts = Array.from(document.querySelectorAll('.product'));
    console.log(listOfProducts);

        listOfProducts.forEach(prd => {
        const newProduct = new Product(prd, cart);
        newProduct.init();        
        cart.products.push(newProduct);
    })


}
