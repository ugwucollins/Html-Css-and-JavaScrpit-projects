const ratings ={
    BlackAthletic:80,
    Basketball :120,
    Cotton: 52,
    Toaster:40,
    Plate :37,
    clothes:20,
    earring:30,
    glasses:94,
    bluetooth:70,
    Vanaila:100,
    FootBall:177,
    Adult:17,
    Wine:145,
    HerberalDrug:87,
    Bottel:107,
}
document.addEventListener('DOMContentLoaded',
getRatings);
const starTotal = 250;

 function getRatings() {
    //console.log('ran');
    for (let rating in ratings) {
        //console.log(ratings[rating]);
        const starPercentage =  (ratings[rating]/ 
       starTotal)*130;

       const starPercentageRounded = `${Math.round
        (starPercentage / 5)*5}%`;

        
        document.querySelector(`.${rating} 
        .stars-inner`).style.width = starPercentageRounded;

        document.querySelector(`.${rating} 
        .number-rating`).innerHTML = ratings[rating];

    }
    //console.log(starPercentageRounded);
 }


let cart =  document.querySelectorAll('.button');
 
let products = [
    {  
        id: 1,
        name: 'Black and Gray Athletic Cotton Socer',
        tag: 'product17',
        price: 10.92,
        //date: Thursday-June-9,
        inCart: 0
    },
    {
        id: 2,
        name: 'Intermediate Size Basketball',
        tag: 'product18',
        price: 20.95,
        inCart: 0
    },
    {
        id: 3,
        name: 'Adult Plain Cotton T-Shirt-2 Pack(clothes)',
        tag: 'product21',
        price: 7.99,
        inCart: 0
    },
    {
        id: 4,
        name: '2 Slot Toaster - Black',
        tag: 'product22',
        price: 18.99,
        inCart: 0
    },
    {
        id: 5,
        name: '6 Piece White Dinner Plate Set',
        tag: 'product20',
        price: 20.67,
        inCart: 0
    },
    {  
        id:6,
        name: '6 different colors of clothes',
        tag: 'product 1',
        price: 10.67,

        inCart: 0
    },
    {
        id: 7,
        name: 'sliver ear ring',
        tag: 'product2',
        price: 30.67,
        inCart: 0
    },
    {
        id: 8,
        name: 'Black sun glasses',
        tag: 'product3',
        price: 15.32,
        inCart: 0
    },
    {
        id: 9,
        name: 'Fine black bluetooth(for ear phone)',
        tag: 'product4',
        price: 30.88,
        inCart: 0
    },
    {
        id: 10,
        name: 'Vanaila Cup Cake',
        tag: 'product5',
        price: 20.67,
        inCart: 0
    },
    {
        id: 11,
        name: 'Intermediate Size FootBall',
        tag: 'product19',
        price: 80.77,
        inCart: 0
    },
    {
        id: 12,
        name: 'Adult Plain Cotton T-Shirt-white and black Pack(clothes)',
        tag: 'product13',
        price: 15.54,
        inCart: 0
    },
    {
        id: 13,
        name: 'Normal size Glass Wine Cup',
        tag: 'product16',
        price: 15.71,
        inCart: 0
    },
    {
        id: 14,
        name: 'Herberal-Drug Bottel',
        tag: 'product10',
        price: 15.62,
        inCart: 0
    },
    {
        id: 15,
        name: 'Hot-Red-Wine Bottel',
        tag: 'product15',
        price: 20.69,
        inCart: 0
    }

];


for (let i=0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        const count = parseInt(cart[i].closest('.product-section').querySelector('.product-input').value) 
        console.log(count);
        cartNumbers(products[i], count);
        totalCost(products[i], count);
    })
}


function onLoadCartNumbers() {
    let productNumbers1 = localStorage.getItem('UpdateItem');
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.icon-cart span').textContent = productNumbers1;
        document.querySelector('.icon-cart span').textContent = productNumbers;
    }
}


function UpdateItem(event) {
    const products  = JSON.parse(localStorage.getItem('productsInCart'));
    const tag = event.target.dataset.tag;



    // increase the count by 1
    const update = {
        ...products,
        [tag]: {
            ...products[tag],
            inCart: products[tag].inCart + 1,
        }
    }

    let productNumbers1 = localStorage.getItem('cartNumbers');
    productNumbers1 = parseInt(productNumbers1);

   if (productNumbers1) {
       localStorage.setItem('cartNumbers', productNumbers1);
       document.querySelector('.icon-cart span').textContent = 
       productNumbers1 += 1;
   } else {
       localStorage.setItem('cartNumbers', + 1);
       document.querySelector('.icon-cart span').textContent = productNumbers1;
   }
   localStorage.setItem("cartNumbers", JSON.stringify
    (productNumbers1));

    localStorage.setItem('productsInCart', JSON.stringify(update))

    // recalculate total
    totalCost(products[tag], 1);

    // refresh screen
    displayCart();

          
 }


function deleteItem(event) {
    const products  = JSON.parse(localStorage.getItem('productsInCart'));
    const tag = event.target.dataset.tag;

    // decrease the count by 1
    let update;
    if (!products[tag] || products[tag].inCart == 0) {
        console.log("it's now zero oo: ", tag)
        displayCart();
        return
    } else if (products[tag].inCart <= 1) { 
        const otherProducts = Object.entries(products).filter(([t, product]) => t != tag)
        update = Object.fromEntries(otherProducts);
    } else {
        update = {
            ...products,
            [tag]: {
                ...products[tag],
                inCart: products[tag].inCart - 1,
            }
        }
    }

    
    localStorage.setItem('productsInCart', JSON.stringify(update))

    let productNumbers1 = localStorage.getItem('cartNumbers');
    productNumbers1 = parseInt(productNumbers1);

   if (productNumbers1) {
       localStorage.setItem('cartNumbers', productNumbers1);
       document.querySelector('.icon-cart span').textContent = 
       productNumbers1 -= 1;
   } else {
       localStorage.setItem('cartNumbers', - 1);
       document.querySelector('.icon-cart span').textContent = productNumbers1;
   }
   localStorage.setItem("cartNumbers", JSON.stringify
    (productNumbers1));

    localStorage.setItem('productsInCart', JSON.stringify(update))

    // recalculate total
    reduceTotalCost(products[tag], 1);

    //refresh screen
    displayCart();

}

function cartNumbers(product, count) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
   productNumbers = parseInt(productNumbers);

   if (productNumbers) {
       localStorage.setItem('cartNumbers', productNumbers + count);
       document.querySelector('.icon-cart span').textContent = 
       productNumbers + count;
   } else {
       localStorage.setItem('cartNumbers', count);
       document.querySelector('.icon-cart span').textContent = count;
    }

    setItems(product,count);
}
//var buttonClicked = document.querySelectorAll('.button-for-orders');
function placeCartItem() {
     var buttonClicked = localStorage.getItem('products');
     buttonClicked = JSON.stringify('buttonClicked');

     if (buttonClicked = 1) {
         //item.inCart != productsInCart
         removeCartItem = localStorage.clear(products);
     }
     alert('ARE YOU SURE YOU WANT TO PLACE AN ORDER');
       //refresh screen
    displayCart();
    }

function setItems(product, count) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    console.log("my cartitems are", (cartItems));
   
    if(cartItems != null){
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        
        cartItems[product.tag].inCart += count;
    }else{  
        product.inCart = count;
        cartItems = {
            [product.tag]: product
        }
    }
  
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

/* function shippingFee() { 
    let shipping = localStorage.getItem('shippingFee');
   console.log("My shipping is", shipping);

   if (shipping != null) {
    shipping = JSON.parse(shipping);
    localStorage.setItem("shippingFee", shipping + (JSON.parse(4.99)));
   } else {
    localStorage.setItem("shippingFee", shipping);
   } 

    } */

    const one = 1.99;
    const two = 3;
    const sum = one + two; 


function totalCost(product, count) {
   document.addEventListener("DOMContentLoaded", ready);

   let cartCost = localStorage.getItem('totalCost');
   console.log("My cartCost is", cartCost);

   if (cartCost != null) {
    cartCost = JSON.parse(cartCost);
    localStorage.setItem("totalCost", cartCost + (product.price * count));
   } else {
    localStorage.setItem("totalCost", (product.price * count));
   }

}

function reduceTotalCost(product, count) {
    let cartCost = localStorage.getItem('totalCost');
 
    if (cartCost != null) {
     cartCost = JSON.parse(cartCost);
     localStorage.setItem("totalCost", cartCost - (product.price * count));
    } else {
     localStorage.setItem("totalCost", 0);
    }
 
}

if (document.readyState =="loading") {
    document.addEventListener("DOMContentLoaded", ready);
}else {
    ready();
}
function ready(){
    let totalCost = localStorage.getItem('cartCost');
    totalCost = localStorage.removeItem('cartCost')
}

//seraching functon
const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product-section-div")
    const pname = storeitems.getElementsByTagName("h2")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }else {
                product[i].style.display = "none";
            }
        } 
        
    }
}



function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart");
    let cartCost = localStorage.getItem('totalCost');
    cartCost = JSON.parse(cartCost);
    //let shipping = localStorage.getItem('shippingFee');
    //shipping = JSON.parse(shipping);
    let itemCart = localStorage.getItem('cartNumbers');

    var myDate  = new Date(),
    month = myDate.getMonth(),
    date = myDate.getDate(),
    day = myDate.getDay(); 

    var months = ["January","Februray", "March",
     "April", "May", "June", "July", "August", 
     "September", "October", "November", "Decmeber"];


     var week = ["Sunday", "Monday", "Tuesday",
      "Wednesday", "Thursday", "Friday", "Saturday"];

 let currentDate = localStorage.getItem('myDate');
    currentDate =  JSON.parse(currentDate);
   

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="checkout-section">

            <div class="delivery-product-section cart-Content">
                <div class="delivery-product cart-Boxes">

                <div class="date-and-time">
                <span>Delivery date:</span>
                <span class="date">
                <p>${(week[day])},</p>
                <p>${(months[month])}</p>
                <p>${(date)}</p>
                </span>
                </div>

                <div class="delivery-product-main"> 

                        <div class="delivery-item">
                            <span class="img-span">
                                <img src="./images/${item.tag}.jpg">
                            </span>

                            <div class="text-div">
                                <span class="bold-black bold">
                                   ${item.name}
                                </span>
                                <div class="bold-red cart-Price">$${item.price}</div>
                                <span class="span-text">
                                    <p class="Quantity">Quantity: </p>
                                    <p> ${item.inCart}</p>
                                    <a href="#" class="update" data-tag="${item.tag}" onclick="UpdateItem(event)">Update</a>
                                    <a class="cart-Delete" data-tag="${item.tag}" onclick="deleteItem(event)">Delete</a>
                                </span>
                            </div>
                        </div>
                        
                        <div class="delivery-date">
                            <p class="bold-black">Choose a delivery Opton:</p>
                            <div class="input-div">
                                <input type="radio" name="datedelivery" id="">
                                <span class="input-date">
                                <span class="input-date-number">
                                    <p>Wednesday,</p>
                                    <p>${(months[month])}</p>
                                    <p>${(date) + 10}</p>
                                </span>
                                    <p class="input-date-price">FREE shipping</p>
                                </span>
                            </div>

                            <div class="input-div">
                                <input type="radio" name="datedelivery" id="">
                                <span class="input-date">
                                    <span class="input-date-number">
                                        <p>Monday,</p>
                                        <p>${(months[month])}</p>
                                        <p>${(date) + 5}</p>
                                    </span>
                                    <p class="input-date-price">$4.99 - shipping</p>
                                </span>
                            </div>

                            <div class="input-div">
                                <input type="radio" name="datedelivery" checked>
                                <span class="input-date">
                                    <span class="input-date-number">
                                        <p>${(week[day])},</p>
                                        <p>${(months[month])}</p>
                                        <p>${(date)}</p>
                                    </span>
                                    <p class="input-date-price">$9.99 - shipping</p>
                                </span>
                            </div>
                        </div>
                </div>
                </div>
                
            </div>
        
               
    `;
        });


        productContainer.innerHTML += `
        <div class="checkout-section">
          <div class="total-amount-section">
          <h3 id="h3">Order Summary</h3>
          <div class="items">
              <div class="item-numbers">
                  <p  class="item-word">Items</p> 
  
                  <div class="icon-cart add3">( 
                      <span id="item3">${itemCart}</span>
                      )
                  </div>
  
              </div>
              <div class="price1">$${cartCost}</div>
          </div>
          <span class="items">
              <p  class="item-word">Shipping & handling:</p>
              <p class="price1  price9">$4.99</p>
          </span>
  
          <div class="vl1"></div>
  
          <span class="items">
              <p  class="item-word">Total before tax:</p>
              <span class="price1">$${JSON.parse(cartCost + sum).toFixed([2])}</span>
          </span>
          
          <div class="items">
              <span class="item-numbers">
                  <p  class="item-word">Estimated tax</p>
                  <p>(10%):</p>
              </span>
              <p class="price1">$${((cartCost + sum)/10).toFixed([2])}</p>
          </div>
  
          <div class="vl"></div>
  
          <span class="Order-total bold-red items">
              <p class="item-word">Order total:</p>
              <p class="price1 bold-red">$${((cartCost + sum) + ((cartCost + sum)/10)).toFixed([2])}</p>
         </span>
  
          <span class="Paypal">
              <p class="item-word">Use Paypal</p>
              <input type="checkbox" class="Paypal-input">
          </span>
  
          <span class="place-button">
              <button class="button-for-orders cart-remove" href="#" onclick="placeCartItem()">Place your Order</button>
          </span>
      </div>
      </div>
      <a href="" id="BACK-to-top">BACK TO TOP</a>
      `;
   }
}


 onLoadCartNumbers();
 displayCart();


