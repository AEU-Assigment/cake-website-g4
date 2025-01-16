

// get product details
const product = document.getElementById('productDetail');

const assetPath = "../src/product/"
let productList = [{name : "Donat",product_id:1,price: 200, noted:"default", productRef:"branch.jpg"}]
const url = window.location.href;
const urlPath = window.location.pathname;
const urlObj = new URL(url);
const params = urlObj.searchParams;

console.log({"url path  ": urlPath.replace(".html","/")});

console.log({"product_id":params.get("product_id")});
let productIDFilter =params.get("product_id"); 
// filter product
let productFind= productList.find(item =>item.product_id == productIDFilter );
console.log(productFind);

if (productFind == undefined){
    window.location.replace('http://127.0.0.1:5500/index.html');
}
else {

    const miniBox = document.getElementById('miniBox');
    miniBox.setAttribute("src", assetPath +productFind.productRef);
    const mainBox = document.getElementById('mainBox');
    mainBox.setAttribute("src", assetPath +productFind.productRef);
    const name = document.getElementById('productName');
    name.textContent = productFind.name;
    const price = document.getElementById('productPrice');
    price.textContent = productFind.price + " " +  "USD";
    const noted = document.getElementById('productNoted');
    noted.textContent = productFind.noted;

    product.setAttribute("data-id", productFind.product_id);
    product.setAttribute("data-name", productFind.name);
    product.setAttribute("data-price", productFind.price);

    
}


