function openPopup() {
    document.getElementById("popupOverlay").classList.add("show-popup");
}

function closePopup() {
    document.getElementById("popupOverlay").classList.remove("show-popup");
}

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to the cart
function addToCart(event) {
    event.preventDefault();
    const productElement = document.getElementById("productDetail");
    const productId = productElement.getAttribute("data-id");
    const productName = productElement.getAttribute("data-name");
    const productPrice = parseFloat(productElement.getAttribute("data-price")) || ''; // Default to 0 if price is not available
    const selectedSize = productElement.getAttribute("data-size");
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const productQuantity = parseInt(quantityInput.value) || 1;
    const productImage = productElement.querySelector("img").src;
    const describe = document.getElementById("productDescribe").textContent; // Description field not present in new structure

    if (!selectedSize) {
        alert("Please select a size before adding to cart.");
        return;
    }

    const existingProduct = cart.find(item => item.id === productId && item.size === selectedSize);

    if (existingProduct) {
        existingProduct.quantity += productQuantity;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: productQuantity,
            size: selectedSize,
            image: productImage,
            describe: describe
        });
    }

    saveCartToLocalStorage();
    updateCart();
    updateCartCount();
}

// Update cart display
function updateCart() {
    const cartContainer = document.getElementById('cart');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No items in the cart.</p>';
        return;
    }

    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const cartItem = document.createElement('div');
        const classes = 'cart-item grid mt-2 md:grid-cols-5 gap-2 border p-2 rounded-md';

        cartItem.classList.add(...classes.split(' '));
        cartItem.innerHTML = `
            <div class="md:col-span-1 col-span-3"> 
              <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain">
            </div>
            <div class="md:col-span-4 col-span-3 grid grid-rows-4 px-4">
              <div class="flex justify-between">
                <span class="text-start font-bold text-lg">${item.name}</span>   
                <button onclick="removeFromCart('${item.id}', '${item.size}')" class="bg-red-500 text-white w-[24px] h-[24px] rounded-xl">X</button>
              </div>
              <div class="flex justify-between text-sm font-light">
                  <span>${item.describe} </span>
              </div>
              <div class="flex justify-between">
                <span><span class="text-start font-light">Amount: ${item.quantity}</span></span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-start font-light">Size: ${item.size}</span>
                <span class="text-end font-semibold">${(item.price * item.quantity).toFixed(2)} USD</span>
              </div>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    cartContainer.appendChild(totalElement);
}

// Remove item from the cart
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCartToLocalStorage();
    updateCart();
    updateCartCount();
}

// Update cart item count
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    cartCount.textContent = cart.length;
    const cartNumElement = document.getElementById('cartCount');
    if(cart.length === 0) {
        cartNumElement.style.display = 'none'
    } else {
        cartNumElement.style.display = 'block'
    }
    
}

// Initialize cart UI on page load
document.addEventListener("DOMContentLoaded", () => {
    updateCart();
    updateCartCount();
});
