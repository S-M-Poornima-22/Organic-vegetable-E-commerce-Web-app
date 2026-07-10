let cart=[];
function toggleCart() //(opening and closing cart)
{
   document.getElementById("cartPanel").classList.toggle("open");
}
function addToCart(name,price,img) //(add elements in cart)
{
   let item = cart.find(p => p.name === name);
   if(item){
   item.qty += 1;
   }
   else{
   cart.push({
   name:name, 
   price:price,
   img:img,
   qty:1
   });
   }
   displayCart();
   updateCartCount();
}
function displayCart() //(inside cart and total price)
{
   let html = "";
   let total = 0;
   cart.forEach((item,index)=>{
   html += `
   <div class="cart-item">
       <img src="${item.img}" width="60">
     <div style="flex:1; margin-left:10px;">
       <h4>${item.name}</h4>
       <p>₹${item.price} each</p>
     </div>
     <div class="qty-box">
       <button onclick="decreaseQty(${index})">-</button>
       <span>${item.qty}</span>
       <button onclick="increaseQty(${index})">+</button>
     </div>
        <h4>₹${item.price * item.qty}</h4>
   </div>
   `;
   total += item.price * item.qty;
   });
   document.getElementById("cartItems").innerHTML = html;
   document.getElementById("totalPrice").innerHTML ="Total: ₹" + total;
   updateCartCount();
}
function buyAll() // (buy all in the cart)
{
   if(cart.length === 0){
   alert("Cart is Empty");
   }
   else{
   alert("Order Placed Successfully");
   cart = [];
   displayCart();
   updateCartCount();
   }
}
function increaseQty(index) //(increasing the quantity)
{
    cart[index].qty = cart[index].qty + 1;
    displayCart();
}
function decreaseQty(index) //(decresing the quantity)
{ 
    if(cart[index].qty > 1){
    cart[index].qty = cart[index].qty - 1;
    }
    else{
    cart.splice(index,1);
    }
    displayCart();
}
function updatePrice(select,basePrice) //(updating the price)
{
    let multiplier = select.value;
    let newPrice = basePrice * multiplier;
    let priceTag = select.parentElement.querySelector(".price");
    priceTag.innerText = newPrice + " rupees";
}
function buyNow(name) 
{
    alert(name + " purchased successfully!");
}
function addSelectedToCart(btn,name,basePrice,img) //(add to cart)
{
    let product = btn.closest(".product");
    let select = product.querySelector("select");
    let multiplier = Number(select.value);
    let finalPrice = basePrice * multiplier;
    addToCart(name,finalPrice,img);
}
function searchProducts() //(search product)
{
    let input =document.getElementById("searchInput").value.toLowerCase();
    let products =document.querySelectorAll(".product");
    products.forEach((product)=>{
    let productName =product.querySelector("h3").innerText.toLowerCase();
    if(productName.includes(input)){
    product.style.display = "";
    }
    else{
    product.style.display = "none";
    }
    });
}
function updateCartCount() //(product quantity increasing count)
{
    let count = 0;
    cart.forEach(function(item){
    count += item.qty;
    });
    document.getElementById("cartCount").innerText = count;
}
function displayProducts(items) //(display the products in the container)
{
    let html="";
    items.forEach(function(v){
    html += `
    <div class="product">
    <img src="${v.img}" alt="${v.name}">
    <h3>${v.name}</h3>
    <p class="price">${v.price} rupees</p>
    <select onchange="updatePrice(this,${v.price})">
       <option value="1">250g</option>
       <option value="2">500g</option>
       <option value="4">1kg</option>
    </select>
    <div class="button-group">
       <button class="add" onclick="addSelectedToCart(this,'${v.name}',${v.price},'${v.img}')">Add to cart </button>
       <button class="buy" onclick="buyNow('${v.name}')">Buy Now </button>
    </div>
    </div>
    `;
    });
    document.getElementById("products").innerHTML = html;
}
//vegetables
const vegetables = [
 {name:"Tomato", price:30, img:"/static/images/vegetable/tomato.png"},
 {name:"Onion", price:40, img:"/static/images/vegetable/onion.png"},
 {name:"Carrot", price:35, img:"/static/images/vegetable/carrot.png"},
 {name:"Brinjal", price:25, img:"/static/images/vegetable/brinjal.png"},
 {name:"Ladies Finger", price:35, img:"/static/images/vegetable/ladiesfinger.png"},
 {name:"cauliflower", price:25, img:"/static/images/vegetable/cauliflower.png"},
 {name:"kothvarankai", price:20, img:"/static/images/vegetable/kothvarankai.png"},
 {name:"Drumstick", price:20, img:"/static/images/vegetable/drumstick.png"},
 {name:"Kovakai", price:25, img:"/static/images/vegetable/kovakai.png"},
 {name:"Small onion", price:35, img:"/static/images/vegetable/small_onion.png"},
 {name:"Pumkin", price:30, img:"/static/images/vegetable/pumkin.png"},
 {name:"Peerkangai", price:35, img:"/static/images/vegetable/peerkangai.png"},
 {name:"Raddish", price:25, img:"/static/images/vegetable/raddish.png"},
 {name:"Beetroot", price:25, img:"/static/images/vegetable/beetroot.png"},
 {name:"chowchow", price:30, img:"/static/images/vegetable/chowchow.png"},
 {name:"Nukul", price:25, img:"/static/images/vegetable/nukul.png"},
 {name:"Beans", price:20, img:"/static/images/vegetable/beans.png"},
 {name:"Bittergaurd", price:25, img:"/static/images/vegetable/bittergaurd.png"},
 {name:"Bottlegaurd", price:25, img:"/static/images/vegetable/bottleguard.png"},
 {name:"Cabbage", price:25, img:"/static/images/vegetable/cabbage.png"},
 {name:"Banana Stem", price:20, img:"/static/images/vegetable/banana_stem.png"},
 {name:"Banana Flower", price:25, img:"/static/images/vegetable/bananaflower.png"},
 {name:"Potato", price:25, img:"/static/images/vegetable/potato.png"},
 {name:"Sweet Potato", price:35, img:"/static/images/vegetable/sweet_potato.png"},
 {name:"Taro", price:25, img:"/static/images/vegetable/taro.png"},
 {name:"Elephant Yan", price:35, img:"/static/images/vegetable/elephant_yan.png"},
 {name:"Chill", price:25, img:"/static/images/vegetable/chilli.png"},
 {name:"Ginger", price:25, img:"/static/images/vegetable/ginger.png"},
 {name:"Coriander", price:10, img:"/static/images/vegetable/coriander_leaves.png"},
 {name:"Curry Leaves", price:10, img:"/static/images/vegetable/curry_leaves.png"}
];
function showVeg(){
displayProducts(vegetables);
}
//fruits
const Fruits = [
 {name:"Amla", price:30, img:"/static/images/fruits/amla.png"},
 {name:"Banana", price:20, img:"/static/images/fruits/banana.png"},
 {name:"Chiko", price:35, img:"/static/images/fruits/chiko.png"},
 {name:"Fig", price:25, img:"/static/images/fruits/fig.png"},
 {name:"Guava", price:25, img:"/static/images/fruits/guava.png"},
 {name:"lemon", price:10, img:"/static/images/fruits/lemon.png"},
 {name:"Orange", price:30, img:"/static/images/fruits/orange.png"},
 {name:"Papaya", price:25, img:"/static/images/fruits/papaya.png"},
 {name:"Mango", price:50, img:"/static/images/fruits/mango.png"},
 {name:"Strawberry", price:50, img:"/static/images/fruits/strawberry.png"},
 {name:"Jackfruit", price:50, img:"/static/images/fruits/jackfruit.png"},
 {name:"Plum", price:30, img:"/static/images/fruits/plum.png"},
];
function showFruits(){
displayProducts(Fruits);
}
//rice
const rice= [
 {name:"Kambu", price:50, img:"/static/images/rice/kambu.webp"},
 {name:"Kuthiraivaali", price:30, img:"/static/images/rice/kuthiraivaali.jpg"},
 {name:"Raagi", price:50, img:"/static/images/rice/raagi.png"},
 {name:"Saamai", price:50, img:"/static/images/rice/saamai.jpg"},
 {name:"Thinai", price:50, img:"/static/images/rice/thinai.png"},
 {name:"Varagu", price:50, img:"/static/images/rice/varagu_.webp"},
];
function showRice(){
displayProducts(rice);
}
//greens
const greens= [
 {name:"Manathakkali-keerai", price:25, img:"/static/images/greens/manathakkali-keerai-.png"},
 {name:"Mulai-keerai", price:30, img:"static/images/greens/mulai-keerai.png"},
 {name:"Parupu-keerai", price:35, img:"static/images/greens/parupu-keerai.png"},
 {name:"Pasala-keerai", price:25, img:"static/images/greens/pasalai-keerai.png"},
 {name:"Ponagani-keerai", price:25, img:"static/images/greens/ponagani.png"},
 {name:"Pulichakeerai", price:30, img:"static/images/greens/pulichakeerai.png"},
 {name:"Moringa-leaves", price:25, img:"static/images/greens/moringa-leaves.png"},
 {name:"Thuthuvalai-leaves", price:25, img:"static/images/greens/thuthuvalai.webp"},
 {name:"Modakathan-leaves", price:25, img:"static/images/greens/mudakathan.jpg"}
];
function showGreens(){
let html="";
greens.forEach(function(v){
html += `
<div class="product">
<img src="${v.img}">
<h3>${v.name}</h3>
<p class="price">${v.price} rupees</p>
<select class="qty">
<option>1</option>
<option>2</option>
<option>3</option>
</select>
<div class="button-group">
<button class="add" onclick="addToCart('${v.name}',${v.price},'${v.img}')">
Add to cart
</button>
<button class="buy" onclick="buyNow('${v.name}')">
Buy Now
</button>
</div>
</div>
`;
});
document.getElementById("products").innerHTML = html;
}
//proteins
const proteins= [
 {name:"egg", price:50, img:"/static/images/proteins/egg.png"},
 {name:"Panner", price:30, img:"/static/images/proteins/panner.png"},
];
function showProteins(){
let html="";
proteins.forEach(function(v){
html += `
<div class="product">
<img src="${v.img}">
<h3>${v.name}</h3>
<p class="price">${v.price} rupees</p>
<select class="qty">
<option>5</option>
<option>10</option>
<option>20</option>
</select>
<div class="button-group">
<button class="add" onclick="addToCart('${v.name}',${v.price},'${v.img}')">
Add to cart
</button>
<button class="buy" onclick="buyNow('${v.name}')">
Buy Now
</button>
</div>
</div>
`;
});
document.getElementById("products").innerHTML = html;
}
//Recommendation sytem
const recommendations = {
Diabetes:[
 {name:"Carrot", img:"/static/images/vegetable/carrot.png"},
 {name:"Beetroot", img:"/static/images/vegetable/beetroot.png"},
 {name:"Cabbage", img:"/static/images/vegetable/cabbage.png"},
 {name:"Beans", img:"/static/images/vegetable/beans.png"}
],
BP:[
 {name:"Banana", img:"/static/images/fruits/banana.png"},
 {name:"Beetroot", img:"vegetable/beetroot.png"},
 {name:"Papaya", img:"fruits/papaya.png"}
],
WeightLoss:[
 {name:"Carrot", img:"/static/images/vegetable/carrot.png"},
 {name:"Cabbage", img:"/static/images/vegetable/cabbage.png"},
 {name:"Papaya", img:"/static/images/fruits/papaya.png"}
]
};
function showRecommendations(condition)
{
let foods = recommendations[condition];
let html="";
foods.forEach(function(food){
html += `
<div class="rec-card">
<img src="${food.img}" width="120">
<h3>${food.name}</h3>
<button class="shop-btn" onclick="showVeg()">Shop Now</button>
</div>
`;
});
document.getElementById("recommendations").innerHTML = html;
}
document.getElementById("healthForm").addEventListener("submit", function(e){
e.preventDefault();
let condition = document.getElementById("condition").value;
showRecommendations(condition);
});
// chat-bot assistance
document.getElementById('send-btn').addEventListener('click', sendChatMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendChatMessage();
});

async function sendChatMessage() {
    const inputField = document.getElementById('user-input');
    const messageText = inputField.value.trim();

    if (!messageText) return;
    appendChatMessage(messageText, 'user');
    inputField.value = '';
    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: messageText })
        });

        const data = await response.json();
        appendChatMessage(data.response, 'bot');

    } catch (error) {
        console.error("Chat backend connection error:", error);
        appendChatMessage("Sorry, my system is processing an update. Please try again later.", 'bot');
    }
}

function appendChatMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const msgBubble = document.createElement('div');
    msgBubble.classList.add('message', sender);
    msgBubble.innerText = text;
    chatBox.appendChild(msgBubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}
//AI logo
function toggleChatWindow() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none') {
        chatContainer.style.display = 'flex';
    } else {
        chatContainer.style.display = 'none';
    }
}