

// // get product details
// const product = document.getElementById('productDetail');

// const assetPath = "../src/shop/"
// let productList = [{name : "Donat",product_id:1,price: 200, noted:"default", productRef:"c1.webp"}]
// const url = window.location.href;
// const urlPath = window.location.pathname;
// const urlObj = new URL(url);
// const params = urlObj.searchParams;

// console.log({"url path  ": urlPath.replace(".html","/")});

// console.log({"product_id":params.get("product_id")});
// let productIDFilter =params.get("product_id"); 
// // filter product
// let productFind= productList.find(item =>item.product_id == productIDFilter );
// console.log(productFind);

// if (productFind == undefined){
//     window.location.replace('http://127.0.0.1:5500/index.html');
// }
// else {

//     const miniBox = document.getElementById('miniBox');
//     miniBox.setAttribute("src", assetPath +productFind.productRef);
//     const mainBox = document.getElementById('mainBox');
//     mainBox.setAttribute("src", assetPath +productFind.productRef);
//     const name = document.getElementById('productName');
//     name.textContent = productFind.name;
//     const price = document.getElementById('productPrice');
//     price.textContent = productFind.price + " " +  "USD";
//     const noted = document.getElementById('productNoted');
//     noted.textContent = productFind.noted;

//     product.setAttribute("data-id", productFind.product_id);
//     product.setAttribute("data-name", productFind.name);
//     product.setAttribute("data-price", productFind.price);

    
// }


// Updated product details script
const products = [
    { id: 1, img: "../src/shop/c1.webp", productName: "New Year Cake" },
    { id: 2, img: "../src/shop/c2.webp", productName: "Cake" },
    { id: 3, img: "../src/shop/c3.webp", productName: "Food Menu" },
    { id: 4, img: "../src/shop/c4.webp", productName: "Cake Pieces" },
    { id: 5, img: "../src/shop/c5.webp", productName: "Catering" },
    { id: 6, img: "../src/shop/c6.webp", productName: "Design Order" },
    { id: 7, img: "../src/shop/c7.webp", productName: "Ice Cream" },
    { id: 8, img: "../src/shop/c8.webp", productName: "Mr Cookies" },
    { id: 9, img: "../src/shop/c9.webp", productName: "Gift Box and Moajonat" },
    { id: 10, img: "../src/shop/c10.webp", productName: "Accessory" },
    { id: 11, img: "../src/shop/c11.webp", productName: "Flower" },
  ];
  
  const product = document.getElementById("productDetail");
  const urlObj = new URL(window.location.href);
  const params = urlObj.searchParams;
  
  console.log({ "url path": urlObj.pathname.replace(".html", "/") });
  console.log({ product_id: params.get("product_id") });
  
  let productIDFilter = params.get("product_id"); // Get product ID from URL
  let productFind = products.find(item => item.id == productIDFilter);
  
  if (!productFind) {
    // Redirect if product not found
    window.location.replace("http://127.0.0.1:5500/index.html");
  } else {
    const miniBox = document.getElementById("miniBox");
    miniBox.setAttribute("src", productFind.img);
  
    const mainBox = document.getElementById("mainBox");
    mainBox.setAttribute("src", productFind.img);
  
    const name = document.getElementById("productName");
    name.textContent = productFind.productName;
  
    const price = document.getElementById("productPrice");
    price.textContent = "Price not available"; // Price field not present in new structure
  
    const noted = document.getElementById("productNoted");
    noted.textContent = "No additional details available"; // Default text
  
    // Set data attributes for product
    product.setAttribute("data-id", productFind.id);
    product.setAttribute("data-name", productFind.productName);
  }