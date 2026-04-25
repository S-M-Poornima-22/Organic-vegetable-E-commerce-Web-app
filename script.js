let cart=[];
function toggleCart(){
document.getElementById("cartPanel").classList.toggle("open");
}
function addToCart(name,price,img){
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
function displayCart()
{
let html="";
let total=0;
cart.forEach((item,index)=>{
html += `
<div class="cart-item">
<img src="${item.img}" width="50">
<span>${item.name}</span>
<div class="qty-box">
<button onclick="decreaseQty(${index})">-</button>
<span>${item.qty}</span>
<button onclick="increaseQty(${index})">+</button>
</div>
<span>₹${item.price * item.qty}</span>
</div>
`;
total += item.price * item.qty;
});
document.getElementById("cartItems").innerHTML = html;
document.getElementById("totalPrice").innerHTML = "Total: ₹"+total;
updateCartCount();
}

function updateCartCount(){
let count = 0;
cart.forEach(function(item){
count += item.qty;
});
document.getElementById("cartCount").innerText = count;
}
const vegetables = [
 {name:"Tomato", price:30, img:"vegetable/tomato.png"},
 {name:"Onion", price:40, img:"vegetable/onion.png"},
 {name:"Carrot", price:35, img:"vegetable/carrot.png"},
 {name:"Brinjal", price:25, img:"vegetable/brinjal.png"},
 {name:"Ladies Finger", price:35, img:"vegetable/ladiesfinger.png"},
 {name:"cauliflower", price:25, img:"vegetable/cauliflower.png"},
 {name:"kothvarankai", price:20, img:"vegetable/kothvarankai.png"},
 {name:"Drumstick", price:20, img:"vegetable/drumstick.png"},
 {name:"Kovakai", price:25, img:"vegetable/kovakai.png"},
 {name:"Small onion", price:35, img:"vegetable/small onion.png"},
 {name:"Pumkin", price:30, img:"vegetable/pumkin.png"},
 {name:"Peerkangai", price:35, img:"vegetable/peerkangai.png"},
 {name:"Raddish", price:25, img:"vegetable/raddish.png"},
 {name:"Beetroot", price:25, img:"vegetable/beetroot.png"},
 {name:"chowchow", price:30, img:"vegetable/chowchow.png"},
 {name:"Nukul", price:25, img:"vegetable/nukul.png"},
 {name:"Beans", price:20, img:"vegetable/beans.png"},
 {name:"Bittergaurd", price:25, img:"vegetable/bittergaurd.png"},
 {name:"Bottlegaurd", price:25, img:"vegetable/bottleguard.png"},
 {name:"Cabbage", price:25, img:"vegetable/cabbage.png"},
 {name:"Banana Stem", price:20, img:"vegetable/banana stem.png"},
 {name:"Banana Flower", price:25, img:"vegetable/bananaflower.png"},
 {name:"Potato", price:25, img:"vegetable/potato.png"},
 {name:"Sweet Potato", price:35, img:"vegetable/sweet-potato.png"},
 {name:"Taro", price:25, img:"vegetable/taro.png"},
 {name:"Elephant Yan", price:35, img:"vegetable/elephant-yan.png"},
 {name:"Chill", price:25, img:"vegetable/chilli.png"},
 {name:"Ginger", price:25, img:"vegetable/ginger.png"},
 {name:"Coriander", price:10, img:"vegetable/coriander-leaves.png"},
 {name:"Curry Leaves", price:10, img:"vegetable/curry leaves.png"}
];

function showVeg(){
let html="";
vegetables.forEach(function(v){
html +=`
<div class="product">
<img src="${v.img}">
<h3>${v.name}</h3>
<p class="price">${v.price} rupees</p>
<select onchange="updatePrice(this,${v.price})">
<option value="1">250g</option>
<option value="2">500g</option>
<option value="4">1kg</option>
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
const Fruits = [
 {name:"Amla", price:30, img:"fruits/amla.png"},
 {name:"Banana", price:20, img:"fruits/banana.png"},
 {name:"Chiko", price:35, img:"fruits/chiko.png"},
 {name:"Fig", price:25, img:"fruits/fig.png"},
 {name:"Guava", price:25, img:"fruits/guava.png"},
 {name:"lemon", price:10, img:"fruits/lemon.png"},
 {name:"Orange", price:30, img:"fruits/orange.png"},
 {name:"Papaya", price:25, img:"fruits/papaya.png"},
 {name:"Mango", price:50, img:"fruits/mango.png"},
 {name:"Strawberry", price:50, img:"fruits/strawberry.png"},
 {name:"Jackfruit", price:50, img:"fruits/jackfruit.png"},
 {name:"Plum", price:30, img:"fruits/plum.png"},
];

function showFruits(){

let html="";

Fruits.forEach(function(v){

html += `
<div class="product">
<img src="${v.img}">
<h3>${v.name}</h3>
<p class="price">${v.price} rupees</p>
<select onchange="updatePrice(this,${v.price})">
<option>"1"</option>
<option>"2"</option>
<option>"4"</option>
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
const greens= [
 {name:"Manathakkali-keerai", price:25, img:"greens/manathakkali-keerai-.png"},
 {name:"Mulai-keerai", price:30, img:"greens/mulai-keerai.png"},
 {name:"Parupu-keerai", price:35, img:"greens/parupu-keerai.png"},
 {name:"Pasala-keerai", price:25, img:"greens/pasalai-keerai.png"},
 {name:"Ponagani-keerai", price:25, img:"greens/ponagani.png"},
 {name:"Pulichakeerai", price:30, img:"greens/pulichakeerai.png"},
 {name:"Moringa-leaves", price:25, img:"greens/moringa-leaves.png"},
 {name:"Thuthuvalai-leaves", price:25, img:"greens/thuthuvalai.webp"},
 {name:"Modakathan-leaves", price:25, img:"greens/mudakathan.jpg"}
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
const proteins= [
 {name:"egg", price:50, img:"proteins/egg.png"},
 {name:"Panner", price:30, img:"proteins/panner.png"},
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
const rice= [
 {name:"Kambu", price:50, img:"rice/kambu.webp"},
 {name:"Kuthiraivaali", price:30, img:"rice/kuthiraivaali.jpg"},
 {name:"Raagi", price:50, img:"rice/raagi.png"},
 {name:"Saamai", price:50, img:"rice/saamai.jpg"},
 {name:"Thinai", price:50, img:"rice/thinai.png"},
 {name:"Varagu", price:50, img:"rice/varagu_.webp"},
];

function showRice(){
let html="";
rice.forEach(function(v){
html += `
<div class="product">
<img src="${v.img}">
<h3>${v.name}</h3>
<p class="price">${v.price} rupees</p>
<select class="qty">
<option>250g</option>
<option>1kg</option>
<option>2kg</option>
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
const recommendations = {

Diabetes:[
 {name:"Carrot", img:"vegetable/carrot.png"},
 {name:"Beetroot", img:"vegetable/beetroot.png"},
 {name:"Cabbage", img:"vegetable/cabbage.png"},
 {name:"Beans", img:"vegetable/beans.png"}
],

BP:[
 {name:"Banana", img:"fruits/banana.png"},
 {name:"Beetroot", img:"vegetable/beetroot.png"},
 {name:"Papaya", img:"fruits/papaya.png"}
],

WeightLoss:[
 {name:"Carrot", img:"vegetable/carrot.png"},
 {name:"Cabbage", img:"vegetable/cabbage.png"},
 {name:"Papaya", img:"fruits/papaya.png"}
]

};
function showRecommendations(condition){
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

function increaseQty(index){
cart[index].qty = cart[index].qty + 1;
displayCart();
}
function decreaseQty(index){
if(cart[index].qty > 1){
cart[index].qty = cart[index].qty - 1;
}
else{
cart.splice(index,1);
}
displayCart();
}
function updatePrice(select,basePrice){
let multiplier = select.value;
let newPrice = basePrice * multiplier;
let priceTag = select.parentElement.querySelector(".price");
priceTag.innerText = newPrice + " rupees";
}
function buyNow(name){
alert(name + " purchased successfully!");
}
function addSelectedToCart(btn,name,basePrice,img){
let product = btn.parentElement;
let select = product.querySelector("select");
let multiplier = select.value;
let finalPrice = basePrice * multiplier;
addToCart(name,finalPrice,img);
}