let cart =  document.querySelectorAll('.button');
   
let products = [
    {  
        name: 'Black and Gray Athletic Cotton Socer',
        tag: 'alack and Gray athletic Cotton Socer',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Intermediate Size Basketball',
        tag: 'Intermediate Size Basketball',
        price: 20.95,
        inCart: 0
    },
    {
        name: 'Adult Plain Cotton T-Shirt-2 Pack',
        tag: 'Adult Plain Cotton T-Shirt-2 Pack',
        price: 7.99,
        inCart: 0
    },
    {
        name: '2 Slot Toaster - Black',
        tag: '2 Slot Toaster - Black',
        price: 18.99,
        inCart: 0
    },
    {
        name: '6 Piece White Dinner Plate Set',
        tag: '6 Piece White Dinner Plate Set',
        price: 20.67,
        inCart: 0
    },
    {  
        name: '6 different colors of clothes',
        tag: '6 different colors of clothes',
        price: 10.67,
        inCart: 0
    },
    {
        name: 'sliver ear ring',
        tag: 'sliver ear ring',
        price: 30.67,
        inCart: 0
    },
    {
        name: 'Black sun glasses',
        tag: 'Black sun glasses',
        price: 15.30,
        inCart: 0
    },
    {
        name: 'Fine black bluetooth(for ear phone)',
        tag: 'Fine black bluetooth(for ear phone)',
        price: 30.88,
        inCart: 0
    },
    {
        name: 'Vanaila Cup Cake',
        tag: 'Vanaila Cup Cake',
        price: 20.67,
        inCart: 0
    }

];


for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(products[1]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.icon-cart span').textContent = productNumbers;
    }
}

function cartNumbers(products) {
    console.log(products.tag, products);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.icon-cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.icon-cart span').textContent = 1;
    }

    setItem(products);
}
function setItem(products) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }

        cartItems[products.tag].inCart += 1;
    }else{
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }
   
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(products) {
   // console.log("the product is", products.price);
   let cartCost = localStorage.getItem('totalCost');
   console.log("My cartCost is", cartCost);

   if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price);
   } else {
    localStorage.setItem("totalCost", products.price);
   }

  
}
const one = 2;
const two = 2.99
const sum = one + two;
console.log(sum);


function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="checkout-section">

            <div class="delivery-product-section">
                <div class="delivery-product">

                    <p class="date-and-time">Delivery date: Tuesday, December 13</p>

                <div class="delivery-product-main"> 

                        <div class="delivery-item">
                            <span class="img-span">
                                <img src="./img/${item.tag}.jpg">
                            </span>

                            <div class="text-div">
                                <span class="bold-black bold">
                                   ${item.name}
                                </span>
                                <div class="bold-red">${item.price}</div>
                                <span class="span-text">
                                    <p class="Quantity">Quantity: </p>
                                    <p> 2 </p>
                                    <a href="">Update</a>
                                    <a href="">Delete</a>
                                </span>
                            </div>
                        </div>

                        <div class="delivery-date">
                            <p class="bold-black">Choose a delivery Opton:</p>
                            <div class="input-div">
                                <input type="radio" name="date" id="">
                                <span class="input-date">
                                    <p class="input-date-number">Tuesday, December 13</p>
                                    <p class="input-date-price">FREE shipping</p>
                                </span>
                            </div>

                            <div class="input-div">
                                <input type="radio" name="date" id="">
                                <span class="input-date">
                                    <p class="input-date-number">Wednesday, December 7</p>
                                    <p class="input-date-price">$4.99 - shipping</p>
                                </span>
                            </div>

                            <div class="input-div">
                                <input type="radio" name="date" id="">
                                <span class="input-date">
                                    <p class="input-date-number">Monday, December 5</p>
                                    <p class="input-date-price">$9.99 - shipping</p>
                                </span>
                            </div>
                        </div>

                </div>
                </div>
            </div>
            
        <div class="total-amount-section">
        <h3 id="h3">Order Summary</h3>
        <div class="items">
            <div class="item-numbers">
                <p  class="item-word">Items</p> 

                <div  class="icon-cart add3">( 
                    <span id="item3">0</span>
                    )
                </div>

            </div>
            <div class="price1">$${item.inCart + item.price}</div>
        </div>
        <span class="items">
            <p  class="item-word">Shipping & handling:</p>
            <p class="price1">$4.99</p>
        </span>

        <div class="vl1"></div>

        <span class="items">
            <p  class="item-word">Total before tax:</p>
            <p class="price1">$${item.price + (parseInt(sum))}</p>
        </span>
        
        <div class="items">
            <span class="item-numbers">
                <p  class="item-word">Estimated tax</p>
                <p>(10%):</p>
            </span>
            <p class="price1">$4.77</p>
        </div>

        <div class="vl"></div>

        <span class="Order-total bold-red items">
            <p class="item-word">Order total:</p>
            <p class="price1 bold-red">$${cartCost}</p>
        </span>

        <span class="Paypal">
            <p class="item-word">Use Paypal</p>
            <input type="checkbox" class="Paypal-input">
        </span>

        <span class="place-button">
            <button class="button-for-orders">Place your Order</button>
        </span>
    </div>

    </div>            
            `;
        });

    }
  }
  onLoadCartNumbers();
  displayCart();




















/* let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

 cartIcon.onclike = () =>{
     cart.classList.add("active");
}

closeCart.onclike = () =>{
    cart.classList.remove("active");
}


var menuList = document.getElementById('cart');
menuList.style.maxHeight = "0px";

function cartSection() {
    if (menuList.style.maxHeight = "0px") {
        menuList.style.maxHeight = "100vh";
    } else {
        menuList.style.maxHeight = "0px"; 
    }
}
 */