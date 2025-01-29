const products = [
  { id: 1, img: "../src/shop/c1.webp", name: "New Year Cake", sizes: ["SM", "X", "XL"], price: 29.99, describe: "A festive cake perfect for celebrating the New Year." },
  { id: 2, img: "../src/shop/c2.webp", name: "Cake", sizes: ["SM", "X"], price: 19.99, describe: "Delicious and moist cake, ideal for any occasion." },
  { id: 3, img: "../src/shop/c3.webp", name: "Food Menu", sizes: [], price: 49.99, describe: "An assorted menu with diverse food options." },
  { id: 4, img: "../src/shop/c4.webp", name: "Cake Pieces", sizes: ["X"], price: 14.99, describe: "Individual cake slices, great for quick treats." },
  { id: 5, img: "../src/shop/c5.webp", name: "Catering", sizes: ["SM", "XL"], price: 99.99, describe: "Professional catering services for your events." },
  { id: 6, img: "../src/shop/c6.webp", name: "Design Order", sizes: ["SM", "X", "XL"], price: 39.99, describe: "Custom design cakes tailored to your preferences." },
  { id: 7, img: "../src/shop/c7.webp", name: "Ice Cream", sizes: ["SM", "X"], price: 9.99, describe: "Refreshing ice cream available in multiple flavors." },
  { id: 8, img: "../src/shop/c8.webp", name: "Mr Cookies", sizes: ["XL"], price: 24.99, describe: "Crispy and delightful cookies for every moment." },
  { id: 9, img: "../src/shop/c9.webp", name: "Gift Box and Moajonat", sizes: [], price: 59.99, describe: "A gift box with a variety of pastries and treats." },
  { id: 10, img: "../src/shop/c10.webp", name: "Accessory", sizes: ["SM", "X", "XL"], price: 15.99, describe: "Unique accessories to complement your special days." },
  { id: 11, img: "../src/shop/c11.webp", name: "Flower", sizes: ["SM"], price: 7.99, describe: "Fresh and vibrant flowers for decoration or gifting." },
];

function increaseQuantity(productId) {
  const quantityInput = document.getElementById(`quantity-${productId}`);
  console.log("button", productId);

  quantityInput.value = parseInt(quantityInput.value) + 1;
  console.log("button", productId);
}

function decreaseQuantity(productId) {
  const quantityInput = document.getElementById(`quantity-${productId}`);
  console.log("button", productId);

  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
  }
}

//get btn

const btnIncreDom = document.getElementById("btnIncre");
const btnDecreDom = document.getElementById("btnDes");

// get dom
const product = document.getElementById("productDetail");
const urlObj = new URL(window.location.href);
const params = urlObj.searchParams;

console.log({ "url path": urlObj.pathname.replace(".html", "/") });
console.log({ url:urlObj});
let currentProductSubMenuDom = document.getElementById("currentProduct");

let productIDFilter = params.get("product_id"); // Get product ID from URL
let productFind = products.find(item => item.id == productIDFilter);

// Redirect if product not found
if (!productFind) {
  window.location.replace(urlObj.origin);
} else {
  const miniBox = document.getElementById("miniBox");
  miniBox.setAttribute("src", productFind.img);

  const mainBox = document.getElementById("mainBox");
  mainBox.setAttribute("src", productFind.img);

  const name = document.getElementById("productName");
  name.textContent = productFind.name;

  const price = document.getElementById("productPrice");
  price.textContent = `${productFind.price} USD`; // Price field not present in new structure
  const quantity = document.querySelector(`input[name="quantity"]`);
  const productDescribe = document.getElementById("productDescribe");
  productDescribe.textContent = productFind.describe;
  // Dynamically generate size buttons
  const sizeButtons = document.getElementById("sizeButtons");
  if (productFind.sizes.length > 0) {
    sizeButtons.innerHTML = productFind.sizes
      .map(size => `<button  class="size-btn rounded-xl px-4 py-1 border" data-size="${size}">${size}</button>`)
      .join("");

    // Add click event to size buttons
    document.querySelectorAll(".size-btn").forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        // Remove 'selected' class from all buttons
        document.querySelectorAll(".size-btn").forEach(btn => btn.classList.remove("selected"));

        // Add 'selected' class to the clicked button
        e.target.classList.add("selected");

        // Store the selected size in the product's data attribute
        product.setAttribute("data-size", e.target.dataset.size);
      });
    });
  } else {
    sizeButtons.innerHTML = "<p class='no-sizes'>No sizes available</p>";
  }

  // Set data attributes for product
  product.setAttribute("data-id", productFind.id);
  product.setAttribute("data-name", productFind.name);
  product.setAttribute("data-price", productFind.price);
  quantity.setAttribute("id", `quantity-${productFind.id}`);
  // sub menu 
  currentProductSubMenuDom.textContent = productFind.name;
  
  btnIncreDom.addEventListener("click",()=> { increaseQuantity(productFind.id)
});
  // btnDecreDom.addEventListener("click", decreaseQuantity(productFind.id));
  btnDecreDom.addEventListener("click",()=> { decreaseQuantity(productFind.id)
  });


  
  
}