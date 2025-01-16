function increaseQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    quantityInput.value = parseInt(quantityInput.value) + 1;
    console.log('button',productId );
}

function decreaseQuantity(productId) {
    
    
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function openPopup() {
    document.getElementById('popupOverlay').classList.add('show-popup');
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('show-popup');
}
let cart = [];

function addToCart(event) {
    event.preventDefault();
    const productElement = document.getElementById('productDetail');
    console.log("product ",productElement );
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));
    const productQuantity = parseInt(document.getElementById(`quantity-${productId}`).value);
    const productNote = document.getElementById(`note-${productId}`).value;
    const productImage = productElement.querySelector('img').src;

    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += productQuantity;
        existingProduct.note = productNote;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: productQuantity,
            note: productNote,
            image: productImage
        });
    }

    updateCart();
}

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
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
            <span>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</span>
            <span>Note: ${item.note}</span>
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    cartContainer.appendChild(totalElement);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}
