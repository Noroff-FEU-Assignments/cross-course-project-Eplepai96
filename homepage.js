const popularContainer = document.querySelector (".popular-products")
const saleContainer = document.querySelector (".sale-products")



const baseUrl = "http://localhost/flower-power/wordpress/wp-json/wc/store/products"

async function getPopularItems(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(response)

    products.forEach(function(product){
        popularContainer.innerHTML += `<div class="product-container"><a  href="product-specific.html?id=${product.id}">
        <div class="product-image-home" style="background-image:url('${product.images[0].src}"</div>
        <div class="product"<h2>${product.name}</h2></div> 
        <div class="product-price"<p>${product.prices.price}</p>
        </div></a></div>`
    })
}

getPopularItems(baseUrl + "?orderby=popularity&order=desc&")


async function getSaleItems(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(response)

    products.forEach(function(product){
        saleContainer.innerHTML += `<div class="product-container"><a href="product-specific.html?id=${product.id}">
        <div class="product-image-home" style="background-image:url('${product.images[0].src}"</div>
        <div class="product"<h2>${product.name}</h2></div> 
        <div class="product-price"<p>${product.prices.price}</p>
        </div></a></div>`
    })
}

var saleItems = baseUrl + "?on_sale=true";
getSaleItems(saleItems)
console.log(saleItems)