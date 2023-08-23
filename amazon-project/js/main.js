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


/* for (let i = 0; i < ratings.length; i++)[  
    document.addEventListener('click' {
        let sum = ratings[i];
        sumRatings =  JSON.parse(sumRatings);
     });
} */
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
        name: 'Black and Gray Athletic Cotton Socer',
        tag: 'product17',
        price: 10.92,
        inCart: 0
    },
    {
        name: 'Intermediate Size Basketball',
        tag: 'product18',
        price: 20.95,
        inCart: 0
    },
    {
        name: 'Adult Plain Cotton T-Shirt-2 Pack(clothes)',
        tag: 'product21',
        price: 7.99,
        inCart: 0
    },
    {
        name: '2 Slot Toaster - Black',
        tag: 'product22',
        price: 18.99,
        inCart: 0
    },
    {
        name: '6 Piece White Dinner Plate Set',
        tag: 'product20',
        price: 20.67,
        inCart: 0
    },
    {  
        name: '6 different colors of clothes',
        tag: 'product 1',
        price: 10.67,
        inCart: 0
    },
    {
        name: 'sliver ear ring',
        tag: 'product2',
        price: 30.67,
        inCart: 0
    },
    {
        name: 'Black sun glasses',
        tag: 'product3',
        price: 15.32,
        inCart: 0
    },
    {
        name: 'Fine black bluetooth(for ear phone)',
        tag: 'product4',
        price: 30.88,
        inCart: 0
    },
    {
        name: 'Vanaila Cup Cake',
        tag: 'product5',
        price: 20.67,
        inCart: 0
    },
    {
        name: 'Intermediate Size FootBall',
        tag: 'product19',
        price: 80.77,
        inCart: 0
    },
    {
        name: 'Adult Plain Cotton T-Shirt-white and black Pack(clothes)',
        tag: 'product13',
        price: 15.54,
        inCart: 0
    },
    {
        name: 'Normal size Glass Wine Cup',
        tag: 'product16',
        price: 15.71,
        inCart: 0
    },
    {
        name: 'Herberal-Drug Bottel',
        tag: 'product10',
        price: 15.62,
        inCart: 0
    },
    {
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
        //UpdateItem(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.icon-cart span').textContent = productNumbers;
    } 
}



function cartNumbers(product, count) {
    //console.log(" The product Clicked is", product);
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

    setItems(product);
    //alert('Added Successfully');
}

/* function UpdateItem() {
    var cartContent = document.getElementsByClassName('cart-Content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-Boxes');
    var total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        var cartBoxe = cartBoxes[i];
        var priceElement = cartBoxe.getElementsByClassName('cart-Price')[0];
        var quantityElement = cartBoxe.getElementsByClassName('product-input')[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName('cartCost')[0].innerText = '$' + total;
    }
} */
 
function setItems(product) {
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
        
        cartItems[product.tag].inCart += 1;
    }else{  
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
  
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));

   // UpdateItem();
}

const one = 1.99;
const two = 3;
const sum = one + two; 
 console.log(JSON.parse(sum));

function totalCost(product, count) {
   document.addEventListener("DOMContentLoaded", ready);

   let cartCost = localStorage.getItem('totalCost');
   console.log("My cartCost is", cartCost);

   if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price * count);
   } else {
    localStorage.setItem("totalCost", product.price * count);
   }
}
if (document.readyState =="loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}
function ready() {
    var removeCartBttons = document.getElementsByClassName("cart-remove");
    
    let totalCost = localStorage.getItem('cartCost');
        totalCost = localStorage.removeItem('cartCost'); 
    

    for (let index = 0; index < removeCartBttons.length; index++) {
        var button = removeCartBttons[index];
        button.addEventListener("click", removeCartItem);
        
    }
  
    
    var quantityInputs = document.getElementsByClassName('product-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantitychanged);
        
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    if (  removeCartItem = 1) {
        removeCartItem = localStorage.clear(totalCost);
    }
    alert('PLACE YOUR ORDERS');
    UpdateItem(); 
}
function quantitychanged(event) {
   var input = event.target;
   if (isNaN(input.value) || input.value <= 0) {
     input.value = 1;
   }
   UpdateItem();
} 




//console.log(onload="initClock()");

function displayCart( ) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart");
    let cartCost = localStorage.getItem('totalCost');
    cartCost = JSON.parse(cartCost);
    let itemCart = localStorage.getItem('cartNumbers');
    //let cartQuntity = parseInt(item.inCart * count); 
    //body = innerHTML.body(onload="initClock()");

   //console.log(onload="initClock()");

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="checkout-section">

            <div class="delivery-product-section cart-Content">
                <div class="delivery-product cart-Boxes">

                <div class="date-and-time">
                <span>Delivery date:</span>
                <span class="date">${dateElement}</span>
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
                                    <p>${item.inCart}</p>
                                    <a href="" class="update">Update</a>
                                    <a class="cart-Delete">Delete</a>
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
              <span class="price1">$${(cartCost + sum ).toFixed([2])}</span>
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
              <button  class="button-for-orders cart-remove">Place your Order</button>
          </span>
      </div>
      </div>
      <a href="" id="BACK-to-top">BACK TO TOP</a>
      `;
   }
}

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



const dateElement = document.querySelector(".date");
/**
 *@param {Date} date
*/
function formatDate(date) {
    const DAYS =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January","Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decmeber"];
    
    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`;
}

setInterval(() => {
    const now = new Date();

   dateElement.textContent = formatDate(now);
},100);

/*onload="initClock()"
 function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        no = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear();

    var months = ["January","Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decmeber"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum","year"];
    var values = [week[dname], months[no], dnum, yr];
    for (let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
} 


    function UpdateItem(UpdateItem){
        let items = JSON.parse(localStorage.getItem('items'));
    
        items.forEach(function(item, index){
           if (UpdateItem.id === item.id) {
               items.splice(index, 1, UpdateItem);
           }
        });
        localStorage.setItem('items', JSON.stringify(items));
    };
UpdateItem();    
*/

 onLoadCartNumbers();
 displayCart();
 //removeCartItem();




  /* costCart  *











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