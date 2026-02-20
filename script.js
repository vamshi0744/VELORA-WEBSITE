 const products = [
  {name:"Black Tee", price:999, category:"tshirt", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"},
  {name:"White Tee", price:899, category:"tshirt", image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500"},
  {name:"Premium Hoodie", price:1999, category:"hoodie", image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"},
  {name:"Street Hoodie", price:1899, category:"hoodie", image:"https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500"},
  {name:"Cargo Pants", price:2499, category:"pants", image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"},
  {name:"Denim Jeans", price:2199, category:"pants", image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"},
  {name:"Cap", price:699, category:"accessory", image:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500"},
  {name:"Sunglasses", price:1299, category:"accessory", image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"}
];

let cart = [];

const productContainer = document.getElementById("product-container");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function displayProducts(filteredProducts) {
  productContainer.innerHTML = "";
  filteredProducts.forEach((product, index) => {
    productContainer.innerHTML += `
      <div class="product">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      </div>
    `;
  });
}

function filterProducts(category) {
  if(category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  cartCount.innerText = cart.length;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });
  cartTotal.innerText = total;
}

function clearCart() {
  cart = [];
  updateCart();
}

function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("active");
}

function scrollToShop() {
  document.getElementById("shop").scrollIntoView({behavior:"smooth"});
}

function submitForm(e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
}

displayProducts(products);