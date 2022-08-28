const productContainer = document.querySelector (".product-container")


const baseUrl = "http://localhost/flower-power/wordpress/wp-json/wc/store/products/"



async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(response)

    products.forEach(function(product){
        productContainer.innerHTML += `<div class="product-container"><a href="product-specific.html?id=${product.id}">
        <div class="product-image" style="background-image:url('${product.images[0].src}"</div>
        <div class="product"<h2>${product.name}</h2></div> 
        <div class="product-price"<p>${product.prices.price}</p>
        </div></a></div>`
    })
}

getProducts(baseUrl)
